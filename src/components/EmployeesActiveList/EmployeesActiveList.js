import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getEmployeesAll,
  getEmployeesActive,
} from '../../redux/employees/employeesSelectors';

export default function EmployeesActiveList() {
  const employeesAll = useSelector(getEmployeesAll);
  const employeesActiveIds = useSelector(getEmployeesActive);

  const employeesActive = employeesAll.filter((el) =>
    employeesActiveIds.includes(el.id)
  );

  return (
    <div>
      <h2>Employees birthday</h2>
      {employeesActive.length > 0 ? (
        <ul>
          {employeesActive.map(({ id, firstName, lastName, dob }) => (
            <li key={id}>
              <h3>
                {firstName} {lastName}
              </h3>
              <p>{new Date(dob).toLocaleString('en-US', { month: 'long' })}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Employees List is empty</p>
      )}
    </div>
  );
}
