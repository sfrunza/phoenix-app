import submitFormModel from './submitFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    phone,
    movingDate,
    deliveryDate,
    startTime,
    originAddress,
    originCity,
    originState,
    originZip,
    originFloor,
    originApt,
    destinationAddress,
    destinationCity,
    destinationState,
    destinationZip,
    destinationFloor,
    destinationApt,
    service,
    size,
    additionalInfo,
    referral,
    // address1,
    // city,
    // zipcode,
    // country,
    // useAddressForPaymentDetails,
    // nameOnCard,
    // cardNumber,
    // expiryDate,
    // cvv,
  },
} = submitFormModel;

export default {
  [firstName.name]: 'Serg',
  [lastName.name]: 'Frunza',
  [email.name]: 'frunza_sergiu@mail.ru',
  [phone.name]: '(617) 206-0968',
  [movingDate.name]: '',
  [deliveryDate.name]: '',
  [startTime.name]: 'Any time',
  [service.name]: 'moving',
  [size.name]: '',
  [additionalInfo.name]: '',
  [referral.name]: '',
  [originAddress.name]: '',
  [originCity.name]: '',
  [originState.name]: '',
  [originZip.name]: '02446',
  [originFloor.name]: '',
  [originApt.name]: '',
  [destinationAddress.name]: '',
  [destinationCity.name]: '',
  [destinationState.name]: '',
  [destinationZip.name]: '10001',
  [destinationFloor.name]: '',
  [destinationApt.name]: '',
  //   [address1.name]: '',
  //   [city.name]: '',
  //   [zipcode.name]: '',
  //   [country.name]: '',
  //   [useAddressForPaymentDetails.name]: false,
  //   [nameOnCard.name]: '',
  //   [cardNumber.name]: '',
  //   [expiryDate.name]: '',
  //   [cvv.name]: '',
};
