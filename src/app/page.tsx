import Test from './Test';

export default function Home() {
    const API_KEY = process.env.API_KEY;
    return (
        <div>
            <Test apiKey={API_KEY ? API_KEY : ''} />
        </div>
    );
}
