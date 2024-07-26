export function formatDate(dimension: string) {
    if (dimension.includes('s')) {
        return `${parseInt(dimension)} сек.`;
    } else if (dimension.includes('m')) {
        return `${parseInt(dimension)} мин.`;
    } else if (dimension.includes('d')) {
        const count = parseInt(dimension);
        switch (count) {
            case 1:
                return `${count} день`;
            case 2 | 3 | 4:
                return `${count} дня`;
            case 5 | 6: {
                return `${count} дней`;
            }
        }
        return `${count} дней`;
    } else if (dimension.includes('w')) {
        return `${parseInt(dimension)} недель.`;
    }
}
