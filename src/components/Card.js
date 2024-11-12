import styles from './Card.module.css'
import React from 'react'

const Card = ({ data }) => {
    console.log(data)
    return (
        <article className={styles.card}>
            <div>
                <h6>Serviços</h6>
            </div>
            <h1>{data.value}</h1>
            <p>{data.description}</p>
        </article>
    )
}

export default Card
