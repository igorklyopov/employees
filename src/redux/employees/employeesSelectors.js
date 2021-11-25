import { createSelector } from 'reselect';

const getEmployeesAll = (state) => state.employees.employeesAll;
const getEmployeesAllIsLoading = (state) => state.employees.employeesAllLoading;
const getEmployeesAllError = (state) => state.employees.employeesAllError;
const getEmployeesActive = (state) => state.employees.employeesActive;

const alphabetEnglish = () => [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const getEmployeesAllSorted = createSelector(
  [getEmployeesAll, alphabetEnglish],
  (employees, alphabetEnglish) =>
    alphabetEnglish.reduce((acc, letter) => {
      const result = { letter, employeesGroup: [] };

      employees.forEach((employeesItem) => {
        if (employeesItem.firstName.at().toLowerCase() === letter)
          result.employeesGroup.push(employeesItem);
      });

      acc.push(result);

      return acc;
    }, [])
);

const months = () => [
  'November',
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
];

const getEmployeesActiveSorted = createSelector(
  [getEmployeesAll, months, getEmployeesActive],
  (employees, months, employeesActiveIds) =>
    months.reduce((acc, month) => {
      const result = { month, employeesGroup: [] };

      employees.forEach((employeesItem) => {
        const formattedBirthdayMonth = new Date(
          employeesItem.dob
        ).toLocaleString('en-US', { month: 'long' });

        if (
          employeesActiveIds.includes(employeesItem.id) &&
          formattedBirthdayMonth.toLowerCase() === month.toLowerCase()
        )
          result.employeesGroup.push(employeesItem);

        result.employeesGroup.sort((a, b) =>
          a.lastName.localeCompare(b.lastName)
        );
      });

      acc.push(result);

      return acc;
    }, [])
);

export {
  getEmployeesAll,
  getEmployeesAllIsLoading,
  getEmployeesAllError,
  getEmployeesActive,
  getEmployeesAllSorted,
  getEmployeesActiveSorted,
};
