import React, { useEffect, useState } from 'react';
import './Ticket.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Card, Col, Row } from 'antd';
import { collection, getDocs } from "firebase/firestore";
import { ShoppingCartOutlined  } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import db from '../firebase-config';

const { Header, Content, Footer } = Layout;


function Ticket(props) {



  const [getdata, setGetdata] = useState([])
  const [handcal,setHandcal] = useState([])
  const [handcal1,setHandcal1] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const querySnapshot = await getDocs(collection(db, "Ticket"));
      let totaldata = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        totaldata.push(doc.data());
      });
      setGetdata(totaldata)
    };
    getdata();

  }, [])


  return (
    <div>
      <Layout>
        <Header style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%'
        }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Link to={'/Allmoviedetails'} > <Menu.Item key="1" style={{ color: "rgb(248, 68, 100)" }}>back</Menu.Item></Link>
            <Menu.Item key="2">HOME</Menu.Item>

          </Menu>


        </Header>
        <Content className="site-layout" style={{
          padding: '0 50px',
          marginTop: 64
        }}>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="site-card-wrapper">
              <Row
                gutter={16}>
                <Col span={8}>
                  <div style={{

                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '86rem',
                    height: '7rem'
                  }}>
                    {getdata.map(e => (
                      <Card style={{ width: "15rem" }} title={e.ticket} bordered={false}>
                        <h4>{e.price}</h4>
                        <div>
                          <Button type="primary">-</Button>
                          <Button type="primary">Book</Button>
                          <Button type="primary">+</Button>
                          
                        </div>
                      </Card>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default Ticket;