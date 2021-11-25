import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAllData } from '../../redux/employees/employeesOperations';
import {
  getEmployeesAllIsLoading,
  getEmployeesAllError,
  getEmployeesAllSorted,
} from '../../redux/employees/employeesSelectors';

import styles from './EmployeesAllList.module.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

export default function EmployeesAllList() {
  const dispatch = useDispatch();

  const employeesAllSorted = useSelector(getEmployeesAllSorted);

  useEffect(() => {
    dispatch(getEmployeesAllData());
  }, [dispatch]);

  return (
    <div className={styles.employeesAllListWrap}>
      <h1 className={styles.employeesAllListTitle}>Employees</h1>
      <ul className={styles.employeesAllList}>
        {employeesAllSorted.map(({ letter, employeesGroup }) => (
          <li key={letter} className={styles.employeesAllListItem}>
            <h2 className={styles.letterTitle}>{letter}</h2>
            {employeesGroup.length > 0 ? (
              <ul className={styles.employeesGroupList}>
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
