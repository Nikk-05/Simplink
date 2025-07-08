import CardComponent from '../components/CardComponent.tsx';
import IntroComponent from '../components/IntroComponent.tsx';
import Navbar from '../components/Navbar.tsx';

const Dashboard = () => {
    return (
        <div className='h-screen w-screen bg-gray-200' >
            <Navbar/>
        <div className="flex justify-center items-center mt-20">
            <div className="w-[80%] grid grid-cols-2 gap-2">
                <IntroComponent />
                <CardComponent />
            </div>
        </div>
        </div>
    )
}
export default Dashboard;