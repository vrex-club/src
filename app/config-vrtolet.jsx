export const url = "https://buda.v-rex.club"
export const address = "Будапештская ул. 49к.1";
export const google = "https://maps.app.goo.gl/ewZJarUa1GbNRgBf7";
export const yandex = "https://yandex.ru/maps/-/CPWiuGoO";
export const ymap = "https://yandex.ru/map-widget/v1/?from=mapframe&ll=30.382828%2C59.852763&mode=search&oid=37862127276&ol=biz&z=18.58";
export const book = "https://api.v-rex.club/vrtolet";

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
            <span className="price">300р.</span>
          </td>
          <td>
            <span className="price">500р.</span>
          </td>
          <td>
            <span className="price">1000р.</span>
          </td>
          <td>
            <span className="price">1500</span>
          </td>
        </tr>
        <tr>
          <td>2 шлема</td>
          <td>
            <span className="price">600р.</span>
          </td>
          <td>
            <span className="price">1000р.</span>
          </td>
          <td>
            <span className="price">2000р.</span>
          </td>
          <td>
            <span className="price">3000</span>
          </td>
        </tr>
        <tr>
          <td>3 шлема</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">1500р.</span>
          </td>
          <td>
            <span className="price">3000р.</span>
          </td>
          <td>
            <span className="price">4500</span>
          </td>
        </tr>
        <tr>
          <td>4 шлема</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">2000р.</span>
          </td>
          <td>
            <span className="price">4000р.</span>
          </td>
          <td>
            <span className="price">6000</span>
          </td>
        </tr>
        <tr>
          <td>5 шлемов</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">2500р.</span>
          </td>
          <td>
            <span className="price">5000р.</span>
          </td>
          <td>
            <span className="price">7500</span>
          </td>
        </tr>
        <tr>
          <td>6 шлемов</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">3000р.</span>
          </td>
          <td>
            <span className="price">6000р.</span>
          </td>
          <td>
            <span className="price">9000</span>
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
            <span className="price">400р.</span>
          </td>
          <td>
            <span className="price">600р.</span>
          </td>
          <td>
            <span className="price">1600р.</span>
          </td>
          <td>
            <span className="price">1800</span>
          </td>
        </tr>
        <tr>
          <td> 2 шлема</td>
          <td>
            <span className="price">800р.</span>
          </td>
          <td>
            <span className="price">1200р.</span>
          </td>
          <td>
            <span className="price">2400р.</span>
          </td>
          <td>
            <span className="price">3600</span>
          </td>
        </tr>
        <tr>
          <td>3 шлема</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">1800р.</span>
          </td>
          <td>
            <span className="price">3600р.</span>
          </td>
          <td>
            <span className="price">5400</span>
          </td>
        </tr>
        <tr>
          <td>4 шлема</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">2400р.</span>
          </td>
          <td>
            <span className="price">4800р.</span>
          </td>
          <td>
            <span className="price">7200</span>
          </td>
        </tr>
        <tr>
          <td>5 шлемов</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">3000р.</span>
          </td>
          <td>
            <span className="price">6000р.</span>
          </td>
          <td>
            <span className="price">9000</span>
          </td>
        </tr>
        <tr>
          <td>6 шлемов</td>
          <td>
            <span className="price" />
          </td>
          <td>
            <span className="price">3500р.</span>
          </td>
          <td>
            <span className="price">7000р.</span>
          </td>
          <td>
            <span className="price">10500</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
