import React, { useEffect, useState } from 'react';
import styles from './ListEmployeeCard.module.css';
import { Employee } from '../../types';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { Modal } from 'antd';

console.log(styles);

type Props = {
  employeeList: Employee[];
}

const ListEmployeeCard: React.FC<Props> = ({employeeList}) => {
  const [activeCardId, setActiveCardId] = useState(0);
  const [activeCard, setActiveCard] = useState<Employee | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeCardId === 0) {
      return
    }

    employeeList.forEach((value) => {
      if (value.id === activeCardId) {
        setActiveCard(value);
      }
    })
  }, [activeCardId, employeeList]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (activeCardId === 0) {
      return;
    }
    showModal();
  }, [activeCard, activeCardId]);

  const handleCancel = () => {
    setIsModalOpen(false);
    setActiveCard(undefined);
    setActiveCardId(0);
  };

  return (
    <div>
      <div className={styles.list__container}>
        {employeeList.map((value) => {
          return <EmployeeCard
              key={value.id}
              employee={value}
              setActiveCardId={setActiveCardId}
            />
        })}
      </div>
      <Modal title={activeCard?.full_name} open={isModalOpen} onCancel={handleCancel} footer={null}>
        <p className={styles.modal__p}>
          <span>Account:</span>
          <span>{activeCard?.account}</span>
        </p>
        <p className={styles.modal__p}><span>Group:</span> <span>{activeCard?.group}</span></p>
        <p><span>Phone number:</span> <span>{activeCard?.phone}</span></p>
        <p><span>Email:</span> <span>{activeCard?.email}</span></p>
      </Modal>
    </div>
  );
};

export default ListEmployeeCard;
