import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const features = [
  {
    title: '2 movers & truck',
    id: 1,
  },
  {
    title: '3 movers & truck',
    id: 2,
  },
  {
    title: '4 movers & truck',
    id: 3,
  },
  {
    title: 'additional mover',
    id: 4,
  },
  {
    title: 'additional truck',
    id: 5,
  },
];

const PricingCompareTable = ({ prices }) => {
  let disc = [
    prices.two_men[0],
    prices.three_men[0],
    prices.four_men[0],
    prices.add_men[0],
    prices.add_truck[0],
  ];
  let reg = [
    prices.two_men[1],
    prices.three_men[1],
    prices.four_men[1],
    prices.add_men[1],
    prices.add_truck[1],
  ];
  let peak = [
    prices.two_men[2],
    prices.three_men[2],
    prices.four_men[2],
    prices.add_men[2],
    prices.add_truck[2],
  ];
  let high = [
    prices.two_men[2],
    prices.three_men[2],
    prices.four_men[2],
    prices.add_men[2],
    prices.add_truck[2],
  ];
  const pricing = [
    {
      title: 'Regular',
      price: {
        monthly: 22,
        annual: 210,
      },
      features: prices ? disc : [90, 140, 190, 50, 40],
      isHighlighted: false,
      btnText: 'Book online',
    },
    {
      title: 'Sub-peak',
      price: {
        monthly: 22,
        annual: 210,
      },
      features: prices ? reg : [90, 140, 190, 50, 40],
      isHighlighted: false,
      btnText: 'Book online',
    },
    {
      title: 'Peak',
      price: {
        annual: 420,
        monthly: 44,
      },
      features: prices ? peak : [131230, 12380, 22330, 2350, 2340],
      isHighlighted: false,
      btnText: 'Book online',
    },
    {
      title: 'High-Peak',
      price: {
        annual: 740,
        monthly: 77,
      },
      features: prices ? high : [150, 210, 270, 50, 40],
      isHighlighted: false,
      btnText: 'Book online',
    },
  ];

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography fontWeight={700} variant={'h4'}>
          Pricing table
        </Typography>
      </Box>
      <Box>
        <TableContainer component={Paper} elevation={0}>
          <Table aria-label="caption table" sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {pricing.map((item, i) => (
                  <TableCell align="center" key={i}>
                    <Typography
                      sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}
                    >
                      {item.title}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature, i) => (
                <TableRow key={feature.id}>
                  <TableCell component="th" scope="row">
                    {feature.title}
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      <Typography color="text.secondary">
                        {pricing[0].features[i]}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      <Box display={'flex'} justifyContent={'center'}>
                        <Typography color="text.secondary">
                          {pricing[1].features[i]}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      <Box display={'flex'} justifyContent={'center'}>
                        <Typography color="text.secondary">
                          {pricing[2].features[i]}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      <Box display={'flex'} justifyContent={'center'}>
                        <Typography color="text.secondary">
                          {pricing[2].features[i]}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                {pricing.map((item, i) => (
                  <TableCell align="center" key={i}>
                    <Button
                      variant={item.isHighlighted ? 'contained' : 'outlined'}
                    >
                      {item.btnText}
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="caption" color="textSecondary">
          Compare the plans and choose the one which works for you the best.
        </Typography>
      </Box>
    </Box>
  );
};

PricingCompareTable.propTypes = {
  prices: PropTypes.object.isRequired,
};

export default PricingCompareTable;
