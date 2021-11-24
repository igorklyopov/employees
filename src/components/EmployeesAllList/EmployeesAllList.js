import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAllData } from '../../redux/employees/employeesOperations';
import {
  getEmployeesAll,
  getEmployeesAllIsLoading,
  getEmployeesAllError,
  getEmployeesAllSorted,
} from '../../redux/employees/employeesSelectors';

import EmployeeCard from '../EmployeeCard/EmployeeCard';

export default function EmployeesAllList() {
  const dispatch = useDispatch();

  const employeesAllSorted = useSelector(getEmployeesAllSorted);

  useEffect(() => {
    dispatch(getEmployeesAllData());
  }, [dispatch]);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employeesAllSorted.map(({ letter, employeesGroup }) => (
          <li key={letter}>
            <h2>{letter}</h2>
            {employeesGroup.length > 0 ? (
              <ul>
                {employeesGroup.map((employeesItem) => (
                  <EmployeeCard key={employeesItem.id} data={employeesItem} />
                ))}
              </ul>
            ) : (
              <p>No Employees</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
