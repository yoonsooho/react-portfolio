import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children, title }) => {
    // ESC 키를 눌렀을 때 모달 닫기
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener("keydown", handleEsc);

        // 모달이 열릴 때 스크롤 방지
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflowY = "auto";
        };
    }, [isOpen, onClose]);

    // 모달 외부 클릭 시 닫기 처리
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={classes.modalBackdrop}
                    onClick={handleBackdropClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className={classes.modalContent}
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        // transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className={classes.modalHeader}>
                            {title && <h3>{title}</h3>}
                            <button className={classes.closeButton} onClick={onClose}>
                                &times;
                            </button>
                        </div>
                        <div className={classes.modalBody}>{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
