import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';
import mapStyles from './mapStyles';
import useSWR from 'swr';
import toast from 'react-hot-toast';

const getCityState = (addresses, type) => {
  let cityState = null;
  if (type === 'origin') {
    let origin = addresses.find((a) => a.isOrigin);
    if (origin) {
      cityState = origin.address + ' ' + origin.city + ', ' + origin.state + ', ' + origin.zip;
    }
  } else if (type === 'destination') {
    let destination = addresses.find((a) => a.isDestination);
    if (destination) {
      cityState =
        destination.address + ' ' + destination.city + ', ' + destination.state + ', ' + destination.zip;
    }
  }
  return cityState;
};

const center = { lat: 42.36, lng: -71.06 };

const getAddresses = async (jobId) => {
  const res = await fetch(`/api/jobs/${jobId}/addresses`);
  const data = await res.json();
  return data.addresses;
};

const Map = ({ jobId }) => {
  const { data: addresses, mutate } = useSWR(
    `/api/jobs/${jobId}/addresses`,
    getAddresses(jobId)
  );
  const [libraries] = useState(['places']);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState('');
  const [marker, setMarker] = useState(null);
  const [error, setError] = useState(false);

  /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef();
  useEffect(() => {
    if (isLoaded && addresses) {
      calculateRoute();
    }
  }, [isLoaded, addresses]);

  async function calculateRoute() {
    // if (originRef.current.value === '' || destiantionRef.current.value === '') {
    //   return;
    // }
    const o = getCityState(addresses, 'origin');
    const d = getCityState(addresses, 'destination');

    // let extraPickupArrObj = addresses.addresses.filter((addres) => addres.isPickup);
    // let extraDropoffArrObj = addresses.addresses.filter((addres) => addres.isDropoff);

    // let waypts = [];

    // for (let i = 0; i < extraPickupArrObj.length; i++) {
    //   let a = extraPickupArrObj[i];

    //   let extraPickup = a.address + ' ' + a.city + ', ' + a.state;
    //   waypts.push({
    //     location: extraPickup,
    //     stopover: true,
    //   });
    // }
    // for (let i = 0; i < extraDropoffArrObj.length; i++) {
    //   let a = extraDropoffArrObj[i];
    //   let extraDropoff = a.address + ' ' + a.city + ', ' + a.state;
    //   waypts.push({
    //     location: extraDropoff,
    //     stopover: true,
    //   });
    // }

    if (d) {
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: o,
        destination: d,
        // waypoints: waypts,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      });
      console.log(results);
      if (results.status === 'OK') {
        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);
      } else {
        setError(true);
      }
    } else if (o && !d) {
      const geocoder = new google.maps.Geocoder();
      await geocoder.geocode({ address: o }, function (results, status) {
        if (status === 'OK') {
          setMarker(results[0].geometry.location);
        } else {
          alert(
            'Geocode was not successful for the following reason: ' + status
          );
        }
      });
    }
  }

  if (!isLoaded) return null;
  if (error) return null;

  return (
    <div
      style={{
        height: '300px',
        width: '100%',
        marginTop: '32px',
      }}
    >
      <GoogleMap
        center={directionsResponse ? center : marker}
        zoom={directionsResponse ? 12 : 17}
        defaultOptions={{ styles: mapStyles }}
        mapContainerStyle={{
          height: '30vh',
          width: '100%',
          margin: 'auto',
        }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          styles: mapStyles,
        }}
        onLoad={(map) => setMap(map)}
      >
        {directionsResponse ? (
          <DirectionsRenderer directions={directionsResponse} />
        ) : (
          <Marker position={marker} />
        )}
      </GoogleMap>
      {directionsResponse && (
        <p style={{ textAlign: 'center', margin: 0 }}>
          {distance} ({duration})
        </p>
      )}
    </div>
  );
};

Map.propTypes = {
  jobId: PropTypes.number.isRequired,
};

export default Map;
