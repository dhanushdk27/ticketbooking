import React from 'react';
import { Row } from 'reactstrap';
import './Nav.css';
import { StarOutlined, StarFilled, StarTwoTone, UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Search } = Input;

function HomeNav(props) {


    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                background: "rgb(51, 53, 69)",
                height: "4rem",
                alignItems: "center"
            }} >
                <Row lg={8} style={{
                    display: "flex",
                    justifyContent: "space-around",
                    background: "rgb(51, 53, 69)",
                    width: "70rem",
                    marginRight: "auto",
                    height: "4rem",
                    alignItems: "center"
                }} >
                    <img style={{ width: "10rem" }} src='https://v1.hdfcbank.com/htdocs/common/PayZapp/images/logo/movies/ticket_new1.png' />

                    <a href='Home'>Home</a>
                    <a href='Home'>About</a>
                    <a href='Home'>Contact</a>
                    
                    <Search style={{width:"20rem"}} placeholder="input search text"  enterButton />


                </Row>
                
                
                <UserOutlined  style={{color:"#fff",marginRight:"1rem"}} />

               <Link to={'/Login/'}> <button style={{
                    background: "rgb(248, 68, 100)",
                    borderColor: "rgb(248, 68, 100)",
                    width:"5rem",
                    height:"2rem",
                    color:"#fff",
                    borderRadius:"0.60rem",
                    marginRight:"4rem"
                    
                }}>Login</button></Link>
            </div>

        </>
    );
}

export default HomeNav;