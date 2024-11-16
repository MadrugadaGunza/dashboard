import styles from './Header.module.css'
import React from 'react'
import avatar from '../../assets/avatar.jpg';
import { GlobalContext } from './../../contexts/GlobalContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// svg
import { ReactComponent as UserSetting } from '../../assets/svg/user-setting.svg'
import { ReactComponent as Admin } from '../../assets/svg/admin.svg'
import { ReactComponent as Out } from '../../assets/svg/out.svg'

const Header = () => {
    const [option, setOption] = React.useState(false);
    const { pathname } = useLocation();
    const { openAndCloseSidebar } = React.useContext(GlobalContext);
    const navigate = useNavigate();

    console.log(navigate);

    React.useEffect(() => {
        setOption(false);
    }, [pathname]);

    return (
        <header className={styles.header}>
            <button onClick={openAndCloseSidebar} className={styles.btnBurger}></button>
            <input type='text' name='search' id='search' placeholder='Faça a sua busca...' />
            <img src={avatar} alt='avatar' onClick={() => setOption(!option)} />

            {
                option && (
                    <div>
                        <ul>
                            <li>
                                <span><Admin />Madrugada de Carvalho</span>
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
