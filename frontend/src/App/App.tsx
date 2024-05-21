import React from 'react';
import { Layout } from 'antd';

import styles from './App.module.css';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import { Route, Routes } from 'react-router-dom';
import EmployeesPage from '../pages/EmployeesPage/EmployeesPage';
import Lending from '../pages/Lending/Lending';
import CustomFooter from '../components/CustomFooter/CustomFooter';
const { Header, Footer, Content } = Layout;

const  App: React.FC = () => {
  return (
    <>
      <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <CustomHeader/>
        </Header>
        <Content className={styles.main_container}>
          <Routes>
            <Route path="/" element={<Lending/>} />
            <Route path="/employees" element={<EmployeesPage/>} />
          </Routes>
          <hr></hr>
        </Content>
        <Footer><CustomFooter/></Footer>
      </Layout>
    </>
  );
}

export default App;
