import React from 'react'

const Head = ({ title }) => {
    React.useEffect(() => {
        document.title = 'M2CG | ' + title;
    }, [title]);

    return <></>
}

export default Head
