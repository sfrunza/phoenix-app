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
import useSwr from 'swr';

function Addresses({ addresses }) {
  const origin = addresses?.find((address) => address.isOrigin);
  const destination = addresses?.find((address) => address.isDestination);
  const pickups = addresses?.filter((address) => address.isPickup);
  const dropoffs = addresses?.filter((address) => address.isDropoff);

  const { mutate } = useSwr(
    `/api/jobs/${origin.jobId}/addresses`,
  );

  const onSubmit = async () => {
    const values = {
      ...origin,
      address: '80 High st',
      city: 'Dedham',
      state: 'MA',
      zip: '02026',
      apt: '2',
      floor: '2',
      isOrigin: true,
      isDestination: false,
      isPickup: false,
      isDropoff: false,
    };

    await mutate([...addresses, values], false);
    await fetch(
      `/api/jobs/${origin.jobId}/addresses/${values.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
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
      </Box>
    );
  };

  return (
    <>
      <button onClick={onSubmit}>update</button>
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
        {pickups.length > 0 &&
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
        {dropoffs.length > 0 &&
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
  addresses: PropTypes.array.isRequired,
};

export default Addresses;
