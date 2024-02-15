import React from 'react'
import axios from "axios";
const REST_API_BASE_URL='http://localhost:8080/addJobDetails/get/job';
const Postservics = () => {
  return axios.get(REST_API_BASE_URL);
}

export default Postservics