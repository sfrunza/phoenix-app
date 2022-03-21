import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'General'}
          items={[
            {
              title: 'Should I buy moving insurance?',
              subtitle:
                'While most moving companies offer $0.60 per pound for a damaged or lost item, Phoenix Movers offer value protection up to $20,000 in household goods coverage at no extra charge.',
            },
            {
              title: 'Is the price base on the hours?',
              subtitle:
                'That is correct. If you\'re having a local move with us, your final price is based on the actual labor time + travel time to your origin and back from your destination. labor and travel time are being prorated based on 15 minute increments.',
            },
            {
              title: 'Do I have to pay for the travel time?',
              subtitle:
                'You will be billed for the travel time from our parking location in Natick, MA (18 Lakeview Gdns, Natick, MA 01760) to your origin, and for the travel time from the destination back to our parking. Those charges are prorated based on 15 minute increments and are calculated by the reading of Google Maps. In case if our truck is being delayed by traffic, the additional time incurred will not be added to the bill. Any travel time between the origin and the destination is considered to be part of the "labor time".',
            },
            {
              title: 'What forms of payment do you accept?',
              subtitle:
                'Payments for local services can be made in form of cash, credit card or a certified bankers check. Payments for long distance services can be made in form of cash, certified bankers check or debit/credit cards. Any payments with a personal check have to be granted by your moving coordinator.',
            },
            {
              title: 'When should I pay for the move?',
              subtitle:
                'There is a deposit of $100.00 required on all local moves and a 10% deposit from final price on any long distance move. All service charges on a local move can be paid upon the completion of the job. Payments for long distance move has to be performed prior to the actual unload of your shipment at your destination.',
            },
            {
              title: 'Can I leave stuff inside the dresser?',
              subtitle:
                'The answer to this question is yes and no. You can definitely leave your light linens inside the drawers, but please make sure to take out any heavier items (i.e. jeans, files, books). Please keep in mind that our movers might be changing the position of the dresser by standing it up vertically, therefore any small articles left inside might fall behind the drawers and get lost. Bottom line is, empty dresser is easier to be carryied takes less time to be wrapped and the chances of something being lost or damaged are minimal.',
            },
            {
              title:
                'Will you provide with moving pads for the furniture? Are those free of charge?',
              subtitle:
                'We provide free moving blankets for all moving jobs. However, we do not provide free packing tape to secure our pads around the furniture. It is up to you to decide if you want to use our tape or to purchase your own.',
            },
            {
              title: 'Am I able to change my move date and/or time?',
              subtitle:
                'If you need to change your move date and/or time, log\n in to your profile to request a date and/or time change. If you can’t log in, email info@phoenixmoving.com or give us a call at (857) 316-9922 and we will assist you with the change. Keep in mind that price may change when rescheduling online.',
            },
          ]}
        />
      </Box>
      {/* <Box marginBottom={6}>
        <FaqGroupItem
          title={'Account & settings'}
          items={[
            {
              title: 'Can I purchase a gift certificate?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'What is your return policy?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Do you sell gift cards?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Can I change plans later on?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Is this a subscription service?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
          ]}
        />
      </Box> */}
    </Box>
  );
};

export default Content;
