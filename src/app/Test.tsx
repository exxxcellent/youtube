'use client';

export default function Test({ apiKey }: { apiKey: string }) {
    console.log(apiKey);
    async function getVideos() {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos/?key=${apiKey}&part=snippet&chart=mostPopular`,
        )
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
    getVideos();
    return <h1>Test: {apiKey}</h1>;
}
