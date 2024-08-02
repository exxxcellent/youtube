// widgets
import VideoResults from '@/widgets/VideoResults/VideoResults';

interface ResultsProps {
    searchParams: {
        query: string;
    };
}

export function generateMetadata({ searchParams }: ResultsProps) {
    return {
        title: `(number) ${searchParams.query}`,
    };
}

export default function Results({ searchParams }: ResultsProps) {
    return (
        <>
            <VideoResults query={searchParams.query} />
        </>
    );
}
