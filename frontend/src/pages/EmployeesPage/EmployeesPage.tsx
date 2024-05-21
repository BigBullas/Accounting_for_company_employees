import React, { useEffect, useState } from 'react';
import styles from './EmployeesPage.module.css';
import { mock_staff } from '../../mock_data/staff';
import FindBlock from '../../components/FindBlock/FindBlock';
import ListEmployeeCard from '../../components/ListEmployeeCard/ListEmployeeCard';
import { Employee } from '../../types';

console.log(styles);

const EmployeesPage: React.FC = () => {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [displayedEmployeeList, setDisplayedEmployeeList] = useState<Employee[]>(employeeList);

  const requestForGetEmployee = async () => {
    const response = await fetch('http://localhost:8085/get_employees',
    {
      method: 'GET',
    });

    if (response.status === 200 && response.body) {
      const staff = await response.json();

      setEmployeeList(staff);
      setDisplayedEmployeeList(staff);
    } else {
      setEmployeeList(mock_staff);
      setDisplayedEmployeeList(mock_staff);
    }
  }

  useEffect(() => {
    requestForGetEmployee();
  }, [])

  return (
    <div>
      <FindBlock/>
      <ListEmployeeCard employeeList = {displayedEmployeeList}/>
    </div>
  );
};

export default EmployeesPage;
