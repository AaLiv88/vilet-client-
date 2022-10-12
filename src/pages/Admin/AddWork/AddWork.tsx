import React, { FC, useState } from 'react';
import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { $authHost } from "../../../http";


//todo переделывать !!!!

const AddWork: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<any>(null);

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("worksCategoryId", `${7}`);
        if (image) {
            formData.append("img", image);
        }
        const response = await $authHost.post("api/work", formData);
    }

    return (
        <>
            <button onClick={() => setIsVisible(true)}>
                добавить
            </button>
            <Modal
                open={isVisible}
                title="Добавить пример работ"
                footer={null}
                onCancel={() => setIsVisible(false)}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="название"
                        name="name"
                        rules={[{ required: true, message: 'Укажите название работы' }]}
                    >
                        <Input value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="описание"
                        name="description"
                        rules={[{ required: true, message: 'Укажите описание!' }]}
                    >
                        <Input value={name} onChange={e => setDescription(e.target.value)}/>
                    </Form.Item>

                    {/*<Upload>*/}
                    {/*    <Button icon={<UploadOutlined />}>Click to Upload</Button>*/}
                    {/*</Upload>*/}

                    <input type={"file"} onChange={e => setImage(e.target.files)}/>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};

export default AddWork;