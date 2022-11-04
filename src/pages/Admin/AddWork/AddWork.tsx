import React, { FC, useEffect, useRef, useState } from 'react';
import { $authHost } from "../../../http";
import { IWork } from "../../../models/IWork";
import Modal from "../../../components/Modal/Modal";
import cl from "./AddWork.module.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { ErrorAndLoadingHandler } from "../../../utils/ErrorAndLoadingHandler";
import { WorksCategoriesActionCreator } from "../../../redux/actionCreators/worksCategoriesActionCreator";

const AddWork: FC = () => {
    const dispatch = useAppDispatch();

    const { categories, error, isLoading, selectedCategory } = useAppSelector(state => state.workCategories);

    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    // const [categoryId, setCategoryId] = useState(NaN);
    const [images, setImages] = useState<File[]>([]);

    useEffect(() => {
        dispatch(WorksCategoriesActionCreator.fetch());
    }, []);

    const createImages = async (image: File, id: number) => {
        const formData = new FormData();
        formData.append("img", image);
        formData.append("workId", `${id}`);
        const response = await $authHost.post("api/image", formData);
        console.log(response);
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        setImages(Array.from(e.target.files));
    }

    const onSubmit = async () => {
        const { data } = await $authHost.post<IWork>("api/work", {
            name,
            description,
            worksCategoryId: selectedCategory.id,
        });
        images.map(image => createImages(image, data.id));
        setIsVisible(false);
    }

    return ErrorAndLoadingHandler(!!isLoading, !!error,
        <>
            <button
                onClick={e => {
                    setIsVisible(true);
                    e.stopPropagation();
                }}
            >
                Добавить работу
            </button>

            <Modal
                onModalClose={() => setIsVisible(false)}
                isVisible={isVisible}
            >
                <div className={cl.form}>
                    <input
                        multiple={true}
                        type="file"
                        className={cl.formItem}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="название"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="описание"
                        placeholder="название"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Dropdown
                        arr={categories}
                        initialItem={categories[0]}
                    />
                    <button
                        onClick={onSubmit}
                        className={cl.formItem}
                    >
                        Cоздать
                    </button>
                </div>
            </Modal>
        </>
    )
};

export default AddWork;