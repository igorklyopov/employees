import { createAsyncThunk } from '@reduxjs/toolkit';

import employeesAPI from '../../services/employeesAPI';

const getEmployeesAllData = createAsyncThunk(
  'employees/getEmployeesAllData',
  async (_, { rejectWithValue }) => {
    try {
      const employeesAllData = await employeesAPI.fetchEmployeesAll();

      return employeesAllData;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export { getEmployeesAllData };
