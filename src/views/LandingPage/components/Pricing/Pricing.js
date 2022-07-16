import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Container from 'components/Container';
import Link from 'next/link';

const local = [
  {
    title: '2 Movers',
    price: '$120',
    features: [
      '2 Proffesional Movers',
      'Clean, fully stocked moving trucks',
      'Delicate handling of your belongings',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    isHighlighted: false,
  },
  {
    title: '3 Movers',
    price: '$160',
    features: [
      '2 Proffesional Movers',
      'Clean, fully stocked moving trucks',
      'Delicate handling of your belongings',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    isHighlighted: true,
  },
  {
    title: '4 Movers',
    price: '$200',
    features: [
      '4 Proffesional Movers',
      'Clean, fully stocked moving trucks',
      'Delicate handling of your belongings',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    isHighlighted: false,
  },
];

const interstate = [
  {
    title: 'New York',
    price: '$950',
    features: [
      'Same day delivery',
      'Fuel, mileage and tolls included',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    isHighlighted: false,
  },
  {
    title: 'Washington DC',
    price: '$1400',
    features: [
      'Next day delivery',
      'Fuel, mileage and tolls included',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    isHighlighted: true,
  },
  {
    title: 'Chicago IL',
    price: '$1750',
    features: [
      'Next day delivery',
      'Fuel, mileage and tolls included',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    isHighlighted: false,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 5 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Pricing = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Box marginBottom={4}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Phoenix Movers Rates
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            See our local and long distance rates
          </Typography>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="price tabs"
            centered
          >
            <Tab
              label="Local Moving"
              sx={{ fontSize: 16, fontWeight: 600 }}
              disableRipple
              {...a11yProps(0)}
            />
            <Tab
              label="Long Distance"
              sx={{ fontSize: 16, fontWeight: 600 }}
              disableRipple
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={4}>
            {local.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  component={Card}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  boxShadow={item.isHighlighted ? 4 : 0}
                >
                  <CardContent
                    sx={{
                      padding: 4,
                    }}
                  >
                    <Box
                      marginBottom={4}
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'baseline'}
                      mb={6}
                    >
                      <Typography
                        component={'p'}
                        variant={'h4'}
                        fontWeight={600}
                      >
                        {item.title}
                      </Typography>
                      <Box display={'flex'} alignItems={'baseline'}>
                        <Typography
                          component={'p'}
                          variant={'h4'}
                          color={'primary'}
                          fontWeight={600}
                        >
                          {item.price}
                        </Typography>
                        <Typography
                          component={'span'}
                          variant={'subtitle2'}
                          color={'text.secondary'}
                        >
                          /hour
                        </Typography>
                      </Box>
                    </Box>
                    <Grid container spacing={2}>
                      {item.features.map((feature, j) => (
                        <Grid item xs={12} key={j}>
                          <Box
                            display={'flex'}
                            alignItems={'center'}
                            disableGutters
                            width={'auto'}
                            padding={0}
                          >
                            <Box
                              component={ListItemAvatar}
                              minWidth={'auto !important'}
                              marginRight={2}
                            >
                              <Box
                                component={Avatar}
                                bgcolor={theme.palette.secondary.main}
                                width={20}
                                height={20}
                              >
                                <svg
                                  width={12}
                                  height={12}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Box>
                            </Box>
                            <Typography
                              sx={{ marginTop: 0.5, marginBottom: 0.5 }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                    <Link href="/book">
                      <a>
                        <Button size={'large'} variant={'contained'}>
                          Book Now
                        </Button>
                      </a>
                    </Link>
                  </CardActions>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={4}>
            {interstate.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  component={Card}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  boxShadow={item.isHighlighted ? 4 : 0}
                >
                  <CardContent
                    sx={{
                      padding: 4,
                    }}
                  >
                    <Typography
                      component={'span'}
                      variant={'h4'}
                      fontWeight={600}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      marginBottom={4}
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'baseline'}
                      mb={6}
                    >
                      <Typography
                        variant={'body1'}
                        component={'span'}
                        color={'textSecondary'}
                      >
                        Starting at
                      </Typography>
                      <Typography
                        component={'p'}
                        variant={'h4'}
                        color={'primary'}
                        fontWeight={600}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                    <Grid container spacing={2}>
                      {item.features.map((feature, j) => (
                        <Grid item xs={12} key={j}>
                          <Box
                            display={'flex'}
                            alignItems={'center'}
                            disableGutters
                            width={'auto'}
                            padding={0}
                          >
                            <Box
                              component={ListItemAvatar}
                              minWidth={'auto !important'}
                              marginRight={2}
                            >
                              <Box
                                component={Avatar}
                                bgcolor={theme.palette.secondary.main}
                                width={20}
                                height={20}
                              >
                                <svg
                                  width={12}
                                  height={12}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Box>
                            </Box>
                            <Typography
                              sx={{ marginTop: 0.5, marginBottom: 0.5 }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                    <Link href="/book">
                      <a>
                        <Button size={'large'} variant={'contained'}>
                          Book Now
                        </Button>
                      </a>
                    </Link>
                  </CardActions>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <Box textAlign={'center'} mt={6}>
          <Link href="/pricing">
            <a>
              <Button variant="link" size="large">
                View More
              </Button>
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
