import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
import React from 'react'
// svg
import { ReactComponent as Dash } from '../assets/svg/dashboard.svg'
import { ReactComponent as UserSetting } from '../assets/svg/user-setting.svg'
import { ReactComponent as Admin } from '../assets/svg/admin.svg'
import { ReactComponent as Setting } from '../assets/svg/setting.svg'
import { ReactComponent as Suporte } from '../assets/svg/suporte.svg'
import { ReactComponent as Out } from '../assets/svg/out.svg'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <h1><Link>M2CG - Tech</Link></h1>

                <ul>
                    <li><Link><Dash /> Dashboard</Link></li>
                    <li><Link><UserSetting /> User Central</Link></li>
                    <li><Link><Admin /> Admin</Link></li>
                    <li><Link><UserSetting /> Shop</Link></li>
                    <li><Link><Setting /> Setting</Link></li>
                    <li><Link><Suporte /> Suport</Link></li>
                </ul>

                <Link className={styles.out}><Out /> Out</Link>
            </nav>
        </aside>
    )
}

export default Sidebar
