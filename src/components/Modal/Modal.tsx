import React, { FC, useRef } from 'react';
import cl from "./Modal.module.scss";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface ModalProps {
    children: JSX.Element;
    onModalClose: () => void;
    isVisible: boolean;
}

const Modal: FC<ModalProps> = ({ children, isVisible, onModalClose }) => {
    const modalRef = useRef(null);

    //todo сделать чтобы открывался без stopPropagnation
    useOutsideClick(modalRef, onModalClose, isVisible);

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className={cl.wrapper}>
                <div ref={modalRef} className={cl.modal}>
                    <button
                        onClick={onModalClose}
                        className={cl.close}
                    >
                        Закрыть
                    </button>
                    {children}
                </div>
            </div>
            <div className={cl.background}>
            </div>
        </>
    );
};

export default Modal;