export const title = "V-rex";
export const description = "Клуб виртуальной реальности в СПб";
export const url = "http://localhost:5173";
export const phone = "+7-911-920-30-25";
export const telegram = "v_rex_club";
export const address = "Петергофское ш. 3к.3";
export const mode = "Пн-Вс с 11:00 до 22:00";
export const vk = "clubvrex";
export const google = "https://maps.app.goo.gl/ewZJarUa1GbNRgBf7";
export const yandex = "https://yandex.ru/maps/-/CLXCbNj2";
export const email = "vrex.club@yandex.ru"

export function PriceTable() {
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
