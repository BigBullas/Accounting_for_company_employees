import React from 'react';
import { SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';

import styles from './CustomHeader.module.css';
import { useNavigate } from 'react-router-dom';

const CustomHeader: React.FC = () => {
  const navigate = useNavigate();

  const hanldeClickOnHomePage = () => {
    navigate('/');
  }

  const hanldeClickOnEmployeeListPage = () => {
    navigate('/employees');
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__container_left}>
          <div className={styles.header__logo}>
            <div className='header__logo_icon'><SafetyCertificateOutlined style={{ fontSize: '20px' }}/></div>
            <div className={styles.header__logo_name}>Your company</div>
          </div>
          <div className={styles.header__menu}>
            <div onClick={hanldeClickOnHomePage} className={styles.header__menu_elem}>Главная</div>
            <div onClick={hanldeClickOnEmployeeListPage} className={styles.header__menu_elem}>Список сотрудников</div>
          </div>
        </div>
        <div className={styles.header__container_right}>
          <div className='header__user_icon'><UserOutlined style={{fontSize: '18px'}}/></div>
          <div className='header__user_name'>Your username</div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
