import axios from 'axios';

import { DISNEY_API } from "./constants";

export async function getDisneyData() {
  return await axios.get(DISNEY_API)
    .then(res => {
      console.log('getDisneyData', res.data.data);
      return res.data.data;
    });
};
