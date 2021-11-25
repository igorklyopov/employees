import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  addEmployeeActiveId,
  removeEmployeeActiveId,
} from '../../redux/employees/employeesSlice';
import { getEmployeesActive } from '../../redux/employees/employeesSelectors';
import { useSelector } from 'react-redux';

import styles from './EmployeeCard.module.css';

export default function EmployeeCard({ data }) {
  const { id, firstName, lastName } = data;

  const dispatch = useDispatch();
  const employeesActive = useSelector(getEmployeesActive);
  const [employeeStatus, setEmployeeStatus] = useState('notActive');

  useEffect(() => {
    employeesActive.includes(id)
      ? setEmployeeStatus('active')
      : setEmployeeStatus('notActive');
  }, []);

  const onEmployeeStatusChange = (e) => {
    setEmployeeStatus(e.target.value);

    employeeStatus === 'notActive'
      ? dispatch(addEmployeeActiveId(id))
      : dispatch(removeEmployeeActiveId(id));
  };

  const classNames = [styles.employeeName];

  if (employeeStatus === 'active') classNames.push(styles.active);

  return (
    <li className={styles.employeeCard}>
      <h3 className={classNames.join(' ')}>
        {firstName} {lastName}
      </h3>
      <form>
        <label className={styles.employeeStatusBtnLabel}>
          <input
            type="radio"
            checked={employeeStatus === 'active'}
            name={`${id}_employeeStatus`}
            value="active"
            onChange={onEmployeeStatusChange}
          />
          <span>active</span>
        </label>
        <label className={styles.employeeStatusBtnLabel}>
          <input
            type="radio"
            checked={employeeStatus === 'notActive'}
            name={`${id}_employeeStatus`}
            value="notActive"
            onChange={onEmployeeStatusChange}
          />
          <span>not active</span>
        </label>
      </form>
    </li>
  );
}
