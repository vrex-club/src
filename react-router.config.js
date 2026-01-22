import games from './app/games.json' with { type: 'json' };

export default {
    // Config options...
    // Server-side render by default, to enable SPA mode set this to `false`
    async prerender() {
        let urls = ['/'/* , '/gallery' */];
        Object.keys(games.games).forEach(key => {
            urls.push(`/game/${key}`);
        });
        return urls;
    },
};
