// next
import Link from 'next/link';

export default function ErrorPage() {
    return (
        <div className="error">
            <h1>404</h1>
            <span>Упс! Страницы по данному адресу не существует :(</span>
            <Link href="/">Вернуться на главную</Link>
        </div>
    );
}
