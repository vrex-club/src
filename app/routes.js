import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("game/:game", "routes/game.jsx"),
    route("category/:category", "routes/category.jsx"),
    route("gallery", "routes/gallery.jsx"),
];
