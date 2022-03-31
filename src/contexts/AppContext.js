import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleLoginShow = () => {
        setShowRegister(!showRegister)
    }

    //every time we open/close modal reset showRegiser so we show Login page on next modal open
    useEffect(() => {
        setShowRegister(false);
    }, [isModalOpen])
    return <AppContext.Provider value={{
        isModalOpen,
        openModal,
        closeModal,
        showRegister,
        handleLoginShow
    }}>
        {children}
    </AppContext.Provider>
}


const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }