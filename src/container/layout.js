import React from 'react';
import { Row, Col } from 'antd';
import { Aside, Content } from './style';
import Heading from '../components/heading/heading';
import SignIn from './signin';

const Layout = () => {
    return (
      <Row>
        <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
          <Aside>
            <div className="auth-side-content">
              <Content>
                <br />
                <br />
                <Heading as="h2">
                  Discover the world's top  <br />
                  Designers & Creatives
                </Heading>
              </Content>
            </div>
          </Aside>
        </Col>
        <Col xxl={16} xl={15} lg={12} md={16} xs={24}>
         <SignIn/>
        </Col>
      </Row>
    );
  
};

export default Layout;
