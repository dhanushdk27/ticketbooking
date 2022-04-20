import React, { useState } from 'react';
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from '../firebase-config';



function Register(props) {
    const [registeremail, setRegisteremail] = useState("");
    const [registerpassword, setRegisterpassword] = useState("")



    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
          auth,
          registeremail,
          registerpassword
           

            );
            console.log(user)
        } catch (error) {
            console.log(error.message);

        }

    };



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
                    <Input onChange=
                        {(event) => {
                            setRegisteremail
                                (event.target.value)
                        }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        onChange=
                        {(event) => {
                            setRegisterpassword
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
                    <Button onClick={register} type="primary" htmlType="submit" className="login-form-button">
                        register now!
                    </Button>

                </Form.Item>
            </Form>
        </div>
    );
}

export default Register;