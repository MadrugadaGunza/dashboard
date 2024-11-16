import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [open, setOpen] = React.useState(false);

    const openAndCloseSidebar = () => {
        setOpen(!open);
    }

    return (
        <GlobalContext.Provider value={{ open, openAndCloseSidebar }}>
            {children}
        </GlobalContext.Provider>
    )
}
