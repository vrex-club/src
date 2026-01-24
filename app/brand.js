import * as vrexConfig from "./config-vrex.jsx";
import * as vrtoletConfig from "./config-vrtolet.jsx";
import vrexGames from "./games-vrex.json" with { type: "json" };
import vrtoletGames from "./games-vrtolet.json" with { type: "json" };

const BRAND_FALLBACK = "vrex";
const rawBrand = (import.meta.env.VITE_BRAND || BRAND_FALLBACK).toLowerCase();
const brandKey = rawBrand === "vrt" ? "vrtolet" : rawBrand;

const brands = {
    vrex: {
        key: "vrex",
        config: vrexConfig,
        games: vrexGames,
        assets: {
            logo: "/img/logo-vrex.png",
            logoBlock2: "/img/logo-block2-vrex.png",
            footerLogo: "/img/lofo-footer-vrex.png",
        },
    },
    vrtolet: {
        key: "vrtolet",
        config: vrtoletConfig,
        games: vrtoletGames,
        assets: {
            logo: "/img/logo-vrt.png",
            logoBlock2: "/img/logo-block2-vrt.png",
            footerLogo: "/img/logo-footer-vrt.png",
        },
    },
};

const selected = brands[brandKey] ?? brands[BRAND_FALLBACK];

export const brand = selected.key;
export const config = selected.config;
export const games = selected.games;
export const category = selected.games.category;
export const assets = selected.assets;
