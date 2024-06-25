import Header from "@/components/Header/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Главная | YouTube"
}

export default function HomePage() {
    return <>
        <Header />
    </>
}