import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("game/:game", "routes/game.jsx"),
];
