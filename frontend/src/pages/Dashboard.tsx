import CardComponent from '../components/CardComponent.tsx';
import IntroComponent from '../components/IntroComponent.tsx';
import Navbar from '../components/Navbar.tsx';
import { useState } from 'react'
import axios from 'axios';

const Dashboard = () => {
    const [inputURL, setInputURL] = useState('');
    const [shortenedURL, setShortenedURL] = useState('');
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true)
        try {
            const shortenUrl = await axios.post('https://backend.nikhilworkprofile.workers.dev/shorten', {
                url: inputURL
            });
            if (shortenUrl.data.status === 'success') {
                setShortenedURL(shortenUrl.data.shorten_url);
            } else {
                console.error('Error shortening URL:', shortenUrl.data.message);
            }
            setLoading(false)
        } catch (error) {
            console.error('Network or server error:', error);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-200 flex flex-col">
            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
                <div
                    className="w-full max-w-5xl grid gap-6 grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl shadow-lg p-6"
                >
                    <IntroComponent onButtonClick={handleButtonClick} loading = {loading} />

                    <CardComponent setInputURL={setInputURL} shortUrl={shortenedURL} />
                </div>
            </main>
        </div>
    )
}
export default Dashboard;