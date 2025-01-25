import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ExternalApi = () => {
  const [message, setMessage] = useState('');
  const serverUrl = import.meta.env.VITE_BASE_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/private`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json"
          },
        },
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <h1>
      <button onClick={callSecureApi}>
        test me
        {message}
      </button>
    </h1>
  )
};

export default ExternalApi;