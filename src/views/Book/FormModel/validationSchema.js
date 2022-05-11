import * as Yup from 'yup';
import moment from 'moment';
import submitFormModel from './submitFormModel';
import { jsonCityState } from '../UsCities';

const {
  formField: {
    firstName,
    lastName,
    email,
    phone,
    moveDate,
    deliveryDate,
    startTime,
    origin,
    destination,
    service,
    size,
    // address1,
    // city,
    // zipcode,
    // country,
    // nameOnCard,
    // cardNumber,
    // expiryDate,
    // cvv
  },
} = submitFormModel;

const findCity = (zip) => {
  let cityObject = jsonCityState.find((o) => {
    return o.z === zip;
  });
  if (cityObject === undefined) {
    return null;
  }
  return cityObject;
};

// const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [moveDate.name]: Yup.string()
      .nullable()
      .required(`${moveDate.requiredErrorMsg}`)
      .test('moveDate', moveDate.invalidErrorMsg, (val) => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [deliveryDate.name]: Yup.string()
      .ensure()
      .when(['service'], {
        is: (service) => service === 'withStorage',
        then: Yup.string()
          .nullable()
          .required(`${deliveryDate.requiredErrorMsg}`),
      }),
    [startTime.name]: Yup.string()
      .nullable()
      .required(`${startTime.requiredErrorMsg}`),
    origin: Yup.object().shape({
      zip: Yup.string()
        .required(`${origin.zip.requiredErrorMsg}`)
        .test('len', `${origin.zip.invalidErrorMsg}`, (val) => findCity(val)),
    }),
    destination: Yup.object().shape({
      zip: Yup.string()
        .required(`${origin.zip.requiredErrorMsg}`)
        .test('len', `${origin.zip.invalidErrorMsg}`, (val) => findCity(val)),
    }),

    [service.name]: Yup.string()
      .nullable()
      .required(`${service.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [size.name]: Yup.string().required(`${size.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`).email(),
    [phone.name]: Yup.string()
      .trim()
      .required('Phone is required.')
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
        'Invalid phone number.',
      ),
  }),
];
