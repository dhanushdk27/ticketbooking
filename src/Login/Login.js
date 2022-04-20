import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useState } from 'react';

function Login(props) {

    const [loginemail, setLoginemail] = useState("");
    const [loginpassword, setLoginpassword] = useState("")

    const login = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
          auth,
          loginemail,
          loginpassword
           

            );
            console.log(user)
        } catch (error) {
            console.log(error.message);

        }

    };




    // const onFinish = (values: any) => {
    //     console.log('Received values of form: ', values);
    //   };

    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "7rem"
        }}>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input  
                    onChange=
                    {(event) => {
                        setLoginemail
                            (event.target.value)
                    }}
                    
                    prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    onChange=
                    {(event) => {
                        setLoginpassword
                            (event.target.value)
                    }}
                    
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button onClick={login} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/Register/">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;