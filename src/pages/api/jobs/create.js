import prisma from 'lib/prisma';
// import { getSession } from 'next-auth/react';
import { format, parseISO } from 'date-fns';

export default async function (req, res) {
  const {
    movingDate,
    deliveryDate,
    startTime,
    size,
    service,
    additionalInfo,
    referral,
    firstName,
    lastName,
    email,
    phone,
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
  } = req.body;

  const prevCustomer = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  let origin = {
    address: originAddress,
    city: originCity,
    state: originState,
    zip: originZip,
    apt: originApt,
    floor: originFloor,
    isOrigin: true,
  };
  let destination = {
    address: destinationAddress,
    city: destinationCity,
    state: destinationState,
    zip: destinationZip,
    apt: destinationApt,
    floor: destinationFloor,
    isDestination: true,
  };

  let includeDestination = destinationZip.length === 5 ? true : false;

  let addressArray = [];

  if (includeDestination) {
    addressArray.push(origin, destination);
  } else {
    addressArray.push(origin);
  }

  console.log(addressArray);

  try {
    if (prevCustomer) {
      const result = await prisma.job.create({
        data: {
          movingDate: format(parseISO(movingDate), 'yyyy-MM-dd'),
          deliveryDate: format(parseISO(deliveryDate), 'yyyy-MM-dd'),
          startTime,
          size,
          service,
          additionalInfo,
          referral,
          customerId: prevCustomer.id,
          addresses: {
            create: addressArray,
          },
        },
      });
      res.json(result);
    } else {
      const result = await prisma.job.create({
        data: {
          movingDate: format(parseISO(movingDate), 'yyyy-MM-dd'),
          deliveryDate: format(parseISO(deliveryDate), 'yyyy-MM-dd'),
          startTime,
          size,
          service,
          additionalInfo,
          referral,
          customer: {
            create: {
              firstName,
              lastName,
              email,
              phone,
              password: '111111',
            },
          },
          addresses: {
            create: addressArray,
          },
        },
      });
      res.json(result);
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'Oops, Something went wrong, please try again later' });
  } finally {
    await prisma.$disconnect();
  }
}
