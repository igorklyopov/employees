import axios from 'axios';
const BASE_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0';

axios.defaults.baseURL = BASE_URL;

async function fetchEmployeesAll() {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
}

const employeesAPI = {
  fetchEmployeesAll,
};

export default employeesAPI;
