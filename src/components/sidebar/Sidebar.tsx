import AccountTogger from './AccountTogger'
import Plan from './Plan'
import { RouteSelect } from './RouteSelect'
import Search from './Search'

const Sidebar = () => {
    return (
        <aside>
            <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] px-2'>
                <AccountTogger />
                <Search />
                <RouteSelect />
            </div>

            <Plan />
        </aside>
    )
}

export default Sidebar
