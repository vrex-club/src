export const title = "V-Rex";
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
export const ymap = "https://yandex.ru/map-widget/v1/?ll=30.208339%2C59.846813&mode=search&oid=18233034946&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZj5Dn7iOD5AEdwvn6wY7E1AEhIJtDnObcK9yD8RxZCcTNwqtD8iBgABAgMEBSgKOABAvq4HSAFqAnJ1nQHNzMw9oAEAqAEAvQEDM45fwgEFwpGY9kOCAgV2LXJleIoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=30.208339%2C59.846813&sspn=0.008905%2C0.003629&text=v-rex&z=17.44";
export const certhour = "1000 руб. за час";
export const book = "https://api.v-rex.club/vrtolet";

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
