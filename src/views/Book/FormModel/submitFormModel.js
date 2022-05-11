export default {
  formId: 'bookForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name',
      requiredErrorMsg: 'First name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name',
      requiredErrorMsg: 'Last name is required',
    },
    email: {
      name: 'email',
      label: 'Email',
      requiredErrorMsg: 'Email is required',
    },
    phone: {
      name: 'phone',
      label: 'Phone',
      requiredErrorMsg: 'Phone is required',
    },
    moveDate: {
      name: 'moveDate',
      label: 'Move date',
      requiredErrorMsg: 'Move date is required',
      invalidErrorMsg: 'Move date is not valid',
    },
    deliveryDate: {
      name: 'deliveryDate',
      label: 'Delivery date',
      requiredErrorMsg: 'Delivery date is required',
      invalidErrorMsg: 'Delivery date is not valid',
    },
    startTime: {
      name: 'startTime',
      label: 'Time',
      requiredErrorMsg: 'Start time is required',
    },
    service: {
      name: 'service',
      label: '',
      requiredErrorMsg: 'Service is required',
    },
    size: {
      name: 'size',
      label: 'Moving size',
      requiredErrorMsg: 'Moving size is required',
    },
    origin: {
      address: {
        name: 'origin.address',
        label: '',
        requiredErrorMsg: 'Address is required',
      },
      city: {
        name: 'origin.city',
        label: '',
        // requiredErrorMsg: 'Address is required',
      },
      state: {
        name: 'origin.state',
        label: '',
        // requiredErrorMsg: 'State is required',
      },
      zip: {
        name: 'origin.zip',
        label: 'From zip',
        requiredErrorMsg: 'Zip is required',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 01234)',
      },
      apt: {
        name: 'origin.apt',
        label: '',
      },
      floor: {
        name: 'origin.floor',
        label: '',
        requiredErrorMsg: 'Floor is required',
      },
    },
    destination: {
      address: {
        name: 'destination.address',
        label: '',
        requiredErrorMsg: 'Address is required',
      },
      city: {
        name: 'destination.city',
        label: '',
        // requiredErrorMsg: 'Address is required',
      },
      state: {
        name: 'destination.state',
        label: '',
        // requiredErrorMsg: 'State is required',
      },
      zip: {
        name: 'destination.zip',
        label: 'To zip',
        requiredErrorMsg: 'Zip is required',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 01234)',
      },
      apt: {
        name: 'destination.apt',
        label: '',
      },
      floor: {
        name: 'destination.floor',
        label: '',
        requiredErrorMsg: 'Floor is required',
      },
    },
    //   address1: {
    //     name: 'address1',
    //     label: 'Address Line 1*',
    //     requiredErrorMsg: 'Address Line 1 is required'
    //   },
    //   address2: {
    //     name: 'address2',
    //     label: 'Address Line 2'
    //   },
    //   city: {
    //     name: 'city',
    //     label: 'City*',
    //     requiredErrorMsg: 'City is required'
    //   },
    //   state: {
    //     name: 'state',
    //     label: 'State/Province/Region'
    //   },
    //   zipcode: {
    //     name: 'zipcode',
    //     label: 'Zipcode*',
    //     requiredErrorMsg: 'Zipcode is required',
    //     invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
    //   },
    //   country: {
    //     name: 'country',
    //     label: 'Country*',
    //     requiredErrorMsg: 'Country is required'
    //   },
    //   useAddressForPaymentDetails: {
    //     name: 'useAddressForPaymentDetails',
    //     label: 'Use this address for payment details'
    //   },
    //   nameOnCard: {
    //     name: 'nameOnCard',
    //     label: 'Name on card*',
    //     requiredErrorMsg: 'Name on card is required'
    //   },
    //   cardNumber: {
    //     name: 'cardNumber',
    //     label: 'Card number*',
    //     requiredErrorMsg: 'Card number is required',
    //     invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    //   },
    //   expiryDate: {
    //     name: 'expiryDate',
    //     label: 'Expiry date*',
    //     requiredErrorMsg: 'Expiry date is required',
    //     invalidErrorMsg: 'Expiry date is not valid'
    //   },
    //   cvv: {
    //     name: 'cvv',
    //     label: 'CVV*',
    //     requiredErrorMsg: 'CVV is required',
    //     invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    //   }
  },
};
