import styles from './Card.module.css'
import React from 'react'

const Card = ({ data }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'AOA',
        }).format(value);
    };

    return (
        <article className={styles.card}>
            <h5>{data.name}</h5>
            <h1
                className={`
                    ${data.id === 0 && styles.positivo} 
                    ${data.id === 1 && styles.negativo}
                    ${data.id === 2 && styles.equilibrio}
                    `}
            >{formatCurrency(data.value)}</h1>
            <p>{data.description}</p>
        </article>
    )
}

export default Card
