import { useSelector } from 'react-redux';
import { getEmployeesActiveSorted } from '../../redux/employees/employeesSelectors';

import styles from './EmployeesActiveList.module.css';

export default function EmployeesActiveList() {
  const employeesActive = useSelector(getEmployeesActiveSorted);

  return (
    <div className={styles.employeesActiveListWrap}>
      <h2 className={styles.employeesActiveListTitle}>Employees birthday</h2>
      <ul className={styles.employeesActiveList}>
        {employeesActive.map(({ month, employeesGroup }) => (
          <li key={month} className={styles.employeesActiveListItem}>
            <span className={styles.monthTitle}>{month}</span>
            {employeesGroup.length > 0 ? (
              <ul>
                {employeesGroup.map(({ id, firstName, lastName, dob }) => (
                  <li key={id} className={styles.employeesGroupItem}>
                    <p>
                      {firstName} {lastName} - {new Date(dob).getDate()}{' '}
                      {new Date(dob).toLocaleString('en-US', { month: 'long' })}
                      , {new Date(dob).getFullYear()} year
                    </p>
                  </li>
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
//Employees List is empty
