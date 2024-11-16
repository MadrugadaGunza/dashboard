import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [open, setOpen] = React.useState(true);

    const openAndCloseSidebar = () => {
        setOpen(!open);
    }

    React.useEffect(() => {
        const changeMedia = () => {
            const { matches } = window.matchMedia('(max-width: 1200px)');
            if (matches) {
                setOpen(false);
            }
        }
        changeMedia();
        window.addEventListener('resize', changeMedia);
        return () => window.removeEventListener('resize', changeMedia);
    }, []);

    return (
        <GlobalContext.Provider value={{ open, openAndCloseSidebar }}>
            {children}
        </GlobalContext.Provider>
    )
}
