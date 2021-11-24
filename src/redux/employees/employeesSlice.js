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
  reducers: {
    addEmployeeActiveId: (state, { payload }) => {
      if (!state.employeesActive.includes(payload))
        state.employeesActive.push(payload);
    },

    removeEmployeeActiveId: (state, { payload }) => {
      state.employeesActive = state.employeesActive.filter(
        (item) => item !== payload
      );
    },
  },
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
export const { addEmployeeActiveId, removeEmployeeActiveId } =
  employeesSlice.actions;

export default employeesSlice.reducer;
