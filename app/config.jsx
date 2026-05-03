import { config } from "./brand";

const fallbackWeekday = config.WeekdayPriceTable ?? config.WeekendPriceTable;
const fallbackWeekend = config.WeekendPriceTable ?? config.WeekdayPriceTable;
const emptyTable = () => null;

export const title = "V-Rex";
export const description = "Клуб виртуальной реальности в СПб";
export const url = config.url;
export const phone = "+7-911-920-30-25";
export const telegram = "v_rex_club";
export const address = config.address;
export const mode = "Пн-Вс с 11:00 до 22:00";
export const vk = "clubvrex";
export const google = config.google;
export const yandex = config.yandex;
export const email = "vrex.club@yandex.ru";
export const ymap = config.ymap;
export const certhour = "1000 руб. за час";
export const book = config.book;
// export const WeekdayPriceTable = fallbackWeekday ?? emptyTable;
// export const WeekendPriceTable = fallbackWeekend ?? emptyTable;
export function WeekdayPriceTable() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th> </th>
                    <th>30 мин</th>
                    <th>1 час</th>
                    <th>2 часа</th>
                    <th>3 часа</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 шлем</td>
                    <td>
                        <span className="price">400р.</span>
                    </td>
                    <td>
                        <span className="price">800р.</span>
                    </td>
                    <td>
                        <span className="price">1600р.</span>
                    </td>
                    <td>
                        <span className="price">2300</span>
                    </td>
                </tr>
                <tr>
                    <td>2 шлема</td>
                    <td>
                        <span className="price">800р.</span>
                    </td>
                    <td>
                        <span className="price">1600р.</span>
                    </td>
                    <td>
                        <span className="price">3000р.</span>
                    </td>
                    <td>
                        <span className="price">4400</span>
                    </td>
                </tr>
                <tr>
                    <td>3 шлема</td>
                    <td>
                        <span className="price" />
                    </td>
                    <td>
                        <span className="price">2300р.</span>
                    </td>
                    <td>
                        <span className="price">4500р.</span>
                    </td>
                    <td>
                        <span className="price">6600</span>
                    </td>
                </tr>
                <tr>
                    <td>4 шлема</td>
                    <td>
                        <span className="price" />
                    </td>
                    <td>
                        <span className="price">3000р.</span>
                    </td>
                    <td>
                        <span className="price">5800р.</span>
                    </td>
                    <td>
                        <span className="price">8500</span>
                    </td>
                </tr>
                <tr>
                    <td>5 шлемов</td>
                    <td>
                        <span className="price" />
                    </td>
                    <td>
                        <span className="price">3700р.</span>
                    </td>
                    <td>
                        <span className="price">7200р.</span>
                    </td>
                    <td>
                        <span className="price">10600</span>
                    </td>
                </tr>
                <tr>
                    <td>6 шлемов</td>
                    <td>
                        <span className="price" />
                    </td>
                    <td>
                        <span className="price">4400р.</span>
                    </td>
                    <td>
                        <span className="price">8600р.</span>
                    </td>
                    <td>
                        <span className="price">12500</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export function WeekendPriceTable() {
    return (
        <table className="table">
            <thead>
            <tr>
                <th> </th>
                <th>30 мин</th>
                <th>1 час</th>
                <th>2 часа</th>
                <th>3 часа</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1 шлем</td>
                <td>
                <span className="price">500р.</span>
                </td>
                <td>
                <span className="price">1000р.</span>
                </td>
                <td>
                <span className="price">2000р.</span>
                </td>
                <td>
                <span className="price">2900</span>
                </td>
            </tr>
            <tr>
                <td> 2 шлема</td>
                <td>
                <span className="price">1000р.</span>
                </td>
                <td>
                <span className="price">2000р.</span>
                </td>
                <td>
                <span className="price">3800р.</span>
                </td>
                <td>
                <span className="price">5500</span>
                </td>
            </tr>
            <tr>
                <td>3 шлема</td>
                <td>
                <span className="price" />
                </td>
                <td>
                <span className="price">2900р.</span>
                </td>
                <td>
                <span className="price">5600р.</span>
                </td>
                <td>
                <span className="price">8200</span>
                </td>
            </tr>
            <tr>
                <td>4 шлема</td>
                <td>
                <span className="price" />
                </td>
                <td>
                <span className="price">3800р.</span>
                </td>
                <td>
                <span className="price">7400р.</span>
                </td>
                <td>
                <span className="price">10900</span>
                </td>
            </tr>
            <tr>
                <td>5 шлемов</td>
                <td>
                <span className="price" />
                </td>
                <td>
                <span className="price">4700р.</span>
                </td>
                <td>
                <span className="price">9000р.</span>
                </td>
                <td>
                <span className="price">13000</span>
                </td>
            </tr>
            <tr>
                <td>6 шлемов</td>
                <td>
                <span className="price" />
                </td>
                <td>
                <span className="price">5600р.</span>
                </td>
                <td>
                <span className="price">10500р.</span>
                </td>
                <td>
                <span className="price">15000</span>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
