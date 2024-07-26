export function formatViews(views: number) {
    if (views < 1_000) {
        return `${views}`;
    } else if (views < 1_000_000) {
        const count = Math.floor(views / 1_000);
        return `${count} тыс.`;
    } else if (views >= 1_000_000) {
        const count = Math.floor(views / 1_000_000);
        return `${count} млн.`;
    }
}
