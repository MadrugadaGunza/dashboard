import React from 'react'

const useMedia = (media) => {
    const [macth, setMacth] = React.useState(null);

    React.useEffect(() => {
        const changeMedia = () => {
            const { matches } = window.matchMedia(media);
            setMacth(matches);
        }
        changeMedia();
        window.addEventListener('resize', changeMedia);
        return () => window.removeEventListener('resize', changeMedia);
    }, [media]);

    return macth
}

export default useMedia
