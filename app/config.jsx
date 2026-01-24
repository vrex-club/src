import { config } from "./brand";

const fallbackWeekday = config.WeekdayPriceTable ?? config.WeekendPriceTable;
const fallbackWeekend = config.WeekendPriceTable ?? config.WeekdayPriceTable;
const emptyTable = () => null;

export const title = config.title;
export const description = config.description;
export const url = config.url;
export const phone = config.phone;
export const telegram = config.telegram;
export const address = config.address;
export const mode = config.mode;
export const vk = config.vk;
export const google = config.google;
export const yandex = config.yandex;
export const email = config.email;
export const ymap = config.ymap;
export const certhour = config.certhour;
export const book = config.book;
export const WeekdayPriceTable = fallbackWeekday ?? emptyTable;
export const WeekendPriceTable = fallbackWeekend ?? emptyTable;
