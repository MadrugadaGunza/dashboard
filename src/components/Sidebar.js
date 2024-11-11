import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
import React from 'react'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <h1><Link>M2CG - Tech</Link></h1>

                <ul>
                    <li><Link>Dashboard</Link></li>
                    <li><Link>User Central</Link></li>
                    <li><Link>Admin</Link></li>
                    <li><Link>Sales</Link></li>
                    <li><Link>Shop</Link></li>
                    <li><Link>Setting</Link></li>
                    <li><Link>Suport</Link></li>
                </ul>

                <Link>Out</Link>
            </nav>
        </aside>
    )
}

export default Sidebar
