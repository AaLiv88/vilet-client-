import React, { FC, useState } from 'react';
import cl from "../AdminPage.module.scss";
import { Button, Form, Input } from "antd";
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../redux/actionCreators/UserActionCreators";

const AdminForm: FC = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("admin");
    const [password, setPassword] = useState("admin");

    const submit = () => {
        dispatch(login(name, password))
    }

    return (
        <div>
            <div className={cl.root}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={submit}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AdminForm;