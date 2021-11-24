import { createSlice } from '@reduxjs/toolkit';
import { getEmployeesAllData } from '../employees/employeesOperations';

const initialState = {
  employeesAll: [],
  employeesAllLoading: false,
  employeesAllError: null,
  employeesActive: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  extraReducers: {
    [getEmployeesAllData.pending](state) {
      state.employeesAllLoading = true;
      state.employeesAllError = null;
    },
    [getEmployeesAllData.fulfilled](state, action) {
      state.employeesAll = action.payload;
      state.employeesAllLoading = false;
      state.employeesAllError = null;
    },
    [getEmployeesAllData.rejected](state, action) {
      state.employeesAllLoading = false;
      state.employeesAllError = action.payload;
    },
  },
});

export default employeesSlice.reducer;
