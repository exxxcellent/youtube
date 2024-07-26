import { API_KEY } from '@/constants';
import Test from './Test';

export default function Home() {
    return (
        <div>
            <Test apiKey={API_KEY ? API_KEY : ''} />
        </div>
    );
}
