import styles from './Content.module.css'
import React from 'react'
import avatar from '../assets/avatar.jpg';
import { data } from '../data/top-card';
import Card from './Card';

const Content = () => {
    return (
        <div className={styles.content}>
            <header>
                <button></button>
                <input type='text' name='search' id='search' placeholder='Faça a sua busca...' />
                <img src={avatar} alt='avatar' />
            </header>
            <section>
                {data && data.map((item) => <Card key={item.id} data={item} />)}
            </section>
        </div>
    )
}

export default Content
