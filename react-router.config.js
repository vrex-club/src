import games from './app/games'

export default {
    // Config options...
    // Server-side render by default, to enable SPA mode set this to `false`
    async prerender() {
        let urls = ['/', '/gallery'];
        games.category.forEach(category => {
            urls.push(`/category/${category.id}`);
        });
        Object.keys(games.games).forEach(key => {
            urls.push(`/game/${key}`);
        });
        return urls;
    },
};
