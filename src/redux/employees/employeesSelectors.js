const getEmployeesAll = (state) => state.employees.employeesAll;
const getEmployeesAllIsLoading = (state) => state.employees.employeesAllLoading;
const getEmployeesAllError = (state) => state.employees.employeesAllError;

export { getEmployeesAll, getEmployeesAllIsLoading, getEmployeesAllError };
