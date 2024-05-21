import React from 'react';
import './CustomFooter.css';

// console.log(styles);

const CustomFooter: React.FC = () => {
  return (
    <div className="site-footer">
       <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by
         <a href="https://bmstu.ru/">BMSTU</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="github" href="https://github.com/BigBullas/Accounting_for_company_employees">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="telegram" href="https://t.me/Vector102">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li><a className="wk" href="#"><i className="fa fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default CustomFooter;
