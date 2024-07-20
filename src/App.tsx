import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [accessToken, setAccessToken] = useState('');

  // Redirect to Google OAuth 2.0 authorization URL
  const onSubmit = () => {
    const params = new URLSearchParams({
      client_id: '188746211812-9sd9umoffgm2b8nqdu6h9vpkt8ljigm7.apps.googleusercontent.com', // Replace with your actual client ID
      redirect_uri: 'https://deft-praline-a07c2c.netlify.app/', // Ensure this matches your registered redirect URI
      response_type: 'token', // Use 'token' for Implicit Grant Flow
      scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
      include_granted_scopes: 'true',
      state: 'pass-through value' // Optional
    });

    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

    // Redirect the user to the OAuth authorization URL
    window.location.href = oauthUrl;
  };

  // Extract access token from URL fragment
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the leading '#'
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');

    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <div>
      <button onClick={onSubmit}>Send</button>
      
    </div>
  );
}
export default App
