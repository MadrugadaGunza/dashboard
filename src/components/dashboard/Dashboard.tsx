import Grid from './Grid'
import TopBar from './TopBar'

export const Dashboard = () => {
    return (
        <div className='bg-white rounded-lg pb-4 shadow min-h-screen'>
            <TopBar />
            <Grid />
        </div>
    )
}
