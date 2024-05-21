import React, { useEffect, useState } from 'react';
import styles from './EmployeeCard.module.css';
import { Employee } from '../../types';
import { Checkbox } from 'antd';

console.log(styles);

type Props = {
  employee: Employee;
  setActiveCardId: React.Dispatch<React.SetStateAction<number>>
}

const EmployeeCard: React.FC<Props> = ({employee, setActiveCardId}) => {
  const [checkedCheckbox, setCheckedCheckbox] = useState(false)

  const handleClickOnCard = () => {
    setActiveCardId(employee.id);
  }

  const handleClickOnCheckbox = (event: React.MouseEvent) => {
    event.stopPropagation();
  }

  const handleChangeCheckbox = () => {
    setCheckedCheckbox(!checkedCheckbox);
    console.log(`Checkbox with employee_id = ${employee.id} changed`);
  }

  useEffect(() => {
    const card = document.getElementById(String(employee.id));
    if (checkedCheckbox) {
      card?.classList.add(styles.card_checked);
    } else {
      card?.classList.remove(styles.card_checked);
    }
  }, [checkedCheckbox, employee.id]);

  return (
    <div
      className={styles.card}
      id={String(employee.id)}
      onClick={handleClickOnCard}
    >
      <div className={styles.card__checkbox_container}>
        <span onClick={handleClickOnCheckbox}>
          <Checkbox
            checked={checkedCheckbox}
            onChange={handleChangeCheckbox}>
          </Checkbox>
        </span>
      </div>
      <div>{employee.full_name}</div>
      {/* <div><UserOutlined style={{fontSize: '100px'}}/></div> */}
      <div className={styles.card__img_container}>
        <img alt='user_icon' src='employee_icon.png' style={{height: '200px'}} />
      </div>
      <div>{employee.group !== '' ? employee.group : 'Unmanaged'}</div>
      <div>{employee.phone}</div>
      {/* <div>{employee.email}</div> */}
    </div>
  );
};

export default EmployeeCard;
