import axios from 'axios';
import { version } from '../../package.json';

const client = axios.create({
  baseURL: "https://s3-us-west-2.amazonaws.com/taboola-mobile-sdk/public",
  headers: {
    Accept: 'application/json',
    'X-App-Version': version,
    'Content-Type': 'application/json',
  },
});

export default client;
