import styles from './Dashboard.module.css'
import React from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import Content from '../../components/setting/Content'
import Head from '../../components/Head'

const Setting = () => {
    return (
        <section className={styles.dashboard}>
            <Head title='Configurações' />
            <Sidebar />
            <Content />
        </section>
    )
}

export default Setting
