import React, { FC, useRef, useState } from 'react';
import { IWorkCategory } from "../../models/IWorkCategory";
import { useAppDispatch } from "../../hooks/redux";
import { setSelectedWorksCategory } from "../../redux/slices/worksCategoriesSlice";
import cl from "./Dropdown.module.scss";
import dropdownSvg from "./../../assets/images/dropdown.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface Dropdown {
    arr: IWorkCategory[];
    selectedItem: IWorkCategory;
}

const Dropdown: FC<Dropdown> = ({ arr, selectedItem }) => {
    const dispatch = useAppDispatch();
    const dropdownRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const onSelectItem = (item: IWorkCategory) => {
        return () => {
            dispatch(setSelectedWorksCategory(item));
            selectedItem = item;
            setIsVisible(false);
        }
    }

    const onDropdownClose = () => {
        setIsVisible(false);
    }

    useOutsideClick(dropdownRef, onDropdownClose, isVisible);

    return (
        <div ref={dropdownRef} className={cl.dropdown}>
            <div
                onClick={() => setIsVisible(!isVisible)}
                className={[cl.itemActive, cl.item].join(" ")}
            >
                <div className={cl.itemActiveText}>
                    {selectedItem.name}
                    <img
                        src={dropdownSvg}
                        className={[cl.dropdownSvg, isVisible ? cl.dropdownSvgActive : ""].join(" ")}
                        alt="" width={15}
                        height={15}
                    />
                </div>
            </div>
            {isVisible && arr.filter(item => item.id !== selectedItem.id).map(item =>
                <div
                    className={cl.item}
                    key={item.id}
                    onClick={onSelectItem(item)}
                >
                    <p className={cl.itemText}>
                        {item.name}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Dropdown;