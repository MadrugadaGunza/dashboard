import styles from './Header.module.css'
import React from 'react'
import avatar from '../../assets/avatar.jpg';
import { GlobalContext } from './../../contexts/GlobalContext';
import { Link } from 'react-router-dom';
// svg
import { ReactComponent as UserSetting } from '../../assets/svg/user-setting.svg'
import { ReactComponent as Out } from '../../assets/svg/out.svg'
import useMedia from '../../hooks/useMedia';

const Header = () => {
    const [option, setOption] = React.useState(false);
    const { openAndCloseSidebar } = React.useContext(GlobalContext);
    const mobile = useMedia('(max-width: 40rem)');

    return (
        <header className={styles.header}>
            {!mobile && <button onClick={openAndCloseSidebar} className={styles.btnBurger}></button>}
            <input type='text' name='search' id='search' placeholder='Faça a sua busca...' />
            <img src={avatar} alt='avatar' onClick={() => setOption(!option)} />

            {
                option && (
                    <div>
                        <ul>
                            <li>
                                <span>Madrugada de Carvalho</span>
                            </li>
                            <li>
                                <Link to='/dashboard/profile'><UserSetting /> Perfil</Link>
                            </li>
                            <li>
                                <button><Out /> Saír</button>
                            </li>
                        </ul>
                    </div>
                )
            }
        </header>
    )
}

export default Header
