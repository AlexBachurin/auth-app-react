import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LoginForm from './Login/LoginForm';
import { useGlobalContext } from '../contexts/AppContext';
import Registration from './Register/Registration';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalLogin = () => {
    const { isModalOpen, closeModal, showRegister } = useGlobalContext();
    return (
        <Modal
            open={isModalOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {showRegister ? <Registration /> : <LoginForm />}
            </Box>
        </Modal>
    )
}

export default ModalLogin