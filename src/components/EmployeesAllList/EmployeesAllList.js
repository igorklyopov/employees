import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployeesAllData } from '../../redux/employees/employeesOperations';

const alphabetEnglish = [
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
  'i',
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

export default function EmployeesAllList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesAllData());
  }, [dispatch]);

  return (
    <ul>
      <li></li>
    </ul>
  );
}
