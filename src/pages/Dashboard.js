import styles from './Dashboard.module.css'
import React from 'react'
import Sidebar from './../components/Sidebar';
import Content from './../components/Content';

const Dashboard = () => {
    return (
        <section className={styles.dashboard}>
            <Sidebar />
            <Content />
        </section>
    )
}

export default Dashboard
