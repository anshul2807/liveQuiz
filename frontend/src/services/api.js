// Dynamic API URL resolver
// When VITE_BACKEND_URL is set (e.g. deployed backend on Render / Heroku / VPS),
// it prepends that origin to API requests.
// In local development or unified server setups, it uses clean relative paths.

export const getBackendUrl = () => {
  const custom = import.meta.env.VITE_BACKEND_URL;
  if (custom && typeof custom === 'string') {
    return custom.trim().replace(/\/+$/, '');
  }
  return import.meta.env.PROD
    ? 'https://livequiz-backend-175868755890.asia-south1.run.app'
    : '';
};

export const getApiUrl = (endpoint) => {
  const base = getBackendUrl();
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${cleanEndpoint}`;
};

export default {
  getBackendUrl,
  getApiUrl
};
