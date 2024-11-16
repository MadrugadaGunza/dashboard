import styles from './Sidebar.module.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
// svg
import { ReactComponent as Dash } from '../../assets/svg/dashboard.svg'
import { ReactComponent as UserSetting } from '../../assets/svg/user-setting.svg'
import { ReactComponent as Admin } from '../../assets/svg/admin.svg'
import { ReactComponent as Setting } from '../../assets/svg/setting.svg'
import { ReactComponent as Suporte } from '../../assets/svg/suporte.svg'
import { ReactComponent as Out } from '../../assets/svg/out.svg'

const Sidebar = () => {
    const { open } = React.useContext(GlobalContext);

    return (
        <aside className={`${open ? styles.sidebar : styles.sidebarClose} ${styles.aside}`}>
            <nav>
                <h1><Link>M2CG{open && ' - Tech'}</Link></h1>

                <ul>
                    <li><NavLink to='/dashboard' end><Dash /> {open && 'Dashboard'}</NavLink></li>
                    <li><NavLink to='/central'><UserSetting /> {open && 'Central de Usuário'}</NavLink></li>
                    <li><NavLink to='/admin'><Admin /> {open && 'Administração'}</NavLink></li>
                    <li><NavLink to='/shop'><UserSetting /> {open && 'Loja'}</NavLink></li>
                    <li><NavLink to='/dashboard/setting'><Setting /> {open && 'Configurações'}</NavLink></li>
                    <li><NavLink to='/suport'><Suporte /> {open && 'Suporte'}</NavLink></li>
                </ul>

                <Link className={styles.out}><Out /> {open && 'Saír'}</Link>
            </nav>
        </aside>
    )
}

export default Sidebar
