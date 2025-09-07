let BACKEND_URL = 'http://localhost:4000';

if (import.meta.env.MODE == 'production') {
  BACKEND_URL = 'http://217.196.51.135:4000';
}
export { BACKEND_URL };
