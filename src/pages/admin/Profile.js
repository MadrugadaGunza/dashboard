import styles from './Dashboard.module.css'
import React from 'react'
import Head from '../../components/Head'
import Sidebar from '../../components/dashboard/Sidebar'
import Content from '../../components/profile/Content'

const Profile = () => {
    return (
        <section className={styles.dashboard}>
            <Head title='Perfil' />
            <Sidebar />
            <Content />
        </section>
    )
}

export default Profile
