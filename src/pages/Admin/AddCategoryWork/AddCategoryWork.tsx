import React, { FC, useState } from 'react';
import Modal from "../../../components/Modal/Modal";
import { $authHost } from "../../../http";
import { IWorkCategory } from "../../../models/IWorkCategory";
import cl from "./AddCategoryWork.module.scss";

const AddCategoryWork: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState("");

    const onSubmit = async () => {
        const response = await $authHost.post<IWorkCategory>("api/worksCategories", {
            name,
        });
        setIsVisible(false);
    }

    return (
        <>
            <button
                onClick={e => {
                    setIsVisible(true);
                    e.stopPropagation();
                }}
            >
                Добавить категорию работ
            </button>

            <Modal
                onModalClose={() => setIsVisible(false)}
                isVisible={isVisible}
            >
                <div className={cl.form}>
                    <input
                        type="text"
                        placeholder="название"
                        className={cl.formItem}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button
                        className={cl.formItem}
                        onClick={onSubmit}
                    >
                        Добавать
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default AddCategoryWork;