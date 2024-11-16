import styles from './Dashboard.module.css';
import React from 'react'
import Sidebar from '../../components/dashboard/Sidebar';
import Content from '../../components/dashboard/Content';
import Head from '../../components/Head';

const Dashboard = () => {
    return (
        <section className={styles.dashboard}>
            <Head title='Dashboard' />
            <Sidebar />
            <Content />
        </section>
    )
}

export default Dashboard
