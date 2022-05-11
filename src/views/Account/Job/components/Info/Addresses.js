import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import toast from 'react-hot-toast';
import EditAddress from './EditAddress';

const getAddresses = async (jobId) => {
  const res = await fetch(`/api/jobs/${jobId}/addresses`);
  const data = await res.json();
  return data.addresses;
};

function Addresses({ jobId }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const { data: addresses, mutate } = useSWR(
    `/api/jobs/${jobId}/addresses`,
    getAddresses(jobId),
  );
  const origin = addresses ? addresses.find((address) => address.isOrigin) : {};
  const destination = addresses
    ? addresses.find((address) => address.isDestination)
    : {};
  const pickups = addresses
    ? addresses.filter((address) => address.isPickup)
    : [];
  const dropoffs = addresses
    ? addresses.filter((address) => address.isDropoff)
    : [];

  const updateAddress = async (values, handleClose) => {
    setIsLoading(true);
    await fetch(`/api/jobs/${jobId}/addresses/${values.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error('Something went wrong');
          setIsLoading(false);
        } else {
          let newAddressArray = addresses.map((a) => {
            if (a.id === data.id) {
              return data;
            } else {
              return a;
            }
          });
          toast.success('Address updated');
          setIsLoading(false);
          mutate([...newAddressArray], false);
          handleClose();
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error('Something went wrong');
        setIsLoading(false);
      });
  };

  const addressComponent = (data) => {
    return (
      <Box display="flex" flexDirection="column">
        <Typography variant="body2" color="text.secondary">
          {data.address},{' '}
          <strong>
            {data.city} {data.state}, {data.zip}
          </strong>
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Apt# {data.apt}
          <span style={{ marginLeft: 10 }}>*{data.floor}</span>
        </Typography>
        <EditAddress
          address={data}
          updateAddress={updateAddress}
          isLoading={isLoading}
        />
      </Box>
    );
  };

  return (
    <>
      <Timeline sx={{ paddingX: 0 }}>
        {origin && (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ maxWidth: '115px', textAlign: 'initial' }}
              variant="body2"
            >
              {!destination ? 'Addresses' : 'Origin'}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
              {destination && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              sx={{ minWidth: '200px', padding: '6px 0px 16px 16px' }}
            >
              {addressComponent(origin)}
            </TimelineContent>
          </TimelineItem>
        )}
        {pickups &&
          pickups.length > 0 &&
          pickups.map((pickup, i) => {
            return (
              <TimelineItem key={i}>
                <TimelineOppositeContent
                  variant="body2"
                  sx={{ maxWidth: '115px', textAlign: 'initial' }}
                  color={'text.secondary'}
                >
                  Pickup
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ minWidth: '200px', padding: '6px 0px 16px 16px' }}
                >
                  {addressComponent(pickup)}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        {dropoffs &&
          dropoffs.length > 0 &&
          dropoffs.map((dropoff, i) => {
            return (
              <TimelineItem key={i}>
                <TimelineOppositeContent
                  variant="body2"
                  sx={{ maxWidth: '115px', textAlign: 'initial' }}
                  color={'text.secondary'}
                >
                  Dropoff
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ minWidth: '200px', padding: '6px 0px 16px 16px' }}
                >
                  {addressComponent(dropoff)}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        {destination && (
          <TimelineItem>
            <TimelineOppositeContent
              variant="body2"
              sx={{ maxWidth: '115px', textAlign: 'initial' }}
            >
              Destination
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent
              sx={{ minWidth: '200px', padding: '6px 0px 16px 16px' }}
            >
              {addressComponent(destination)}
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </>
  );
}

Addresses.propTypes = {
  jobId: PropTypes.number.isRequired,
};

export default Addresses;
