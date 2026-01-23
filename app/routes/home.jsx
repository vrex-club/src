import { Head, LandHeader, Footer } from "../components";
import { certhour, phone, title, WeekdayPriceTable, WeekendPriceTable } from "../config";
import games from "../games.json" with { type: 'json' };

function Games() {
    let tabs = [];
    let id = 1;
    games.category.forEach((tab) => {
        let change_blocks = [];
        let cards = [];
        tab.games.forEach((game) => {
            const info = games.games[game];
            change_blocks.push(<div className="change__block" key={game}>
                <a href={"/game/"+game}>
                    <h3 className="change__ttile mintitle">{info.name}</h3>
                </a>
            </div>);
            cards.push(<div className="slider__item change__union" key={game}>
                <div className="change__bblock_foto">
                    <a href={"/game/"+game}><img src={info.thumb} className="change__img" alt="" decoding="async" /></a>
                </div>
                <div className="change__bblock">
                    <h3 className="posts__ttitle"><a href={"/game/"+game}>{info.name}</a></h3>
                    <div className="change__description description" dangerouslySetInnerHTML={{ __html: info.description.replace(/\n/g, '<br>') }} />
                    <a href={"/game/"+game} className="change__linck">Смотреть видео »</a>
                </div>
            </div>);
        });
        tabs.push(<div className="tab" key={tab.id}>
            <input type="radio" id={"tab"+id} name="tab-group" defaultChecked={tab.id === "for-everyone"} />
			<label htmlFor={"tab"+id} className="tab-title">{tab.name}</label>
            <section className="tab-content">
                <div className="change__info">
                    <div className="change__info_button">
                        <a className="changebtn" id={"changebtn__all"+id}>
                            <i className="fa fa-object-group" aria-hidden="true" />
                            Подробно
                        </a>
                        <a className="changebtn" id={"changebtn__list"+id}>
                            <i className="fa fa-bars" aria-hidden="true" />
                            Списком
                        </a>
                    </div>
                    <div className={"change__info_small change__info_small"+id}>
                        <div className="change__union">
                            {change_blocks}
                        </div>
                    </div>
                    <div className={"change__info__more change__info__more"+id}>
                        <div className={"slider"+(id != 1 ? id-1 : "")+" slidermt"}>
                            <div className="slider__wrapper">
                                <div className="slider__items">
                                    {cards}
                                </div>
                            </div>
                            <a className="slider__control slider__control_prev" href="#" role="button" data-slide="prev"></a>
                            <a className="slider__control slider__control_next" href="#" role="button" data-slide="next"></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>);
        id++;
    });
    return tabs;
}

export default function Landing() {
    return <>
        <head>
            <Head />
            <script src="js/wow.min.js"></script>
		<script src="js/main.js"></script>
		<script defer src="js/simple-adaptive-slider.min.js"></script>
		<script dangerouslySetInnerHTML={{__html: `document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
            document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider1', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
            document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider2', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
			document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider3', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
			document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider4', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
			document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider5', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
			document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider6', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
			document.addEventListener('DOMContentLoaded', function () {
				var slider = new SimpleAdaptiveSlider('.slider7', {
					autoplay: false,
					interval: 5000,
					swipe: true,
				});
			});
			new WOW().init();`}} />
		{/* <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.js"></script>*/}
		<script src="js/bp.min-form.js"></script>
		<script src="js/main-form.js"></script>
        </head>
        <body>
            <LandHeader />
            <section className="about">
                <div className="container">
                <div className="section__header">
                    <h2 className="about__about fadeInDown animated wow">
                    <div className="beforetitle">Клуб</div>
                    Клуб виртуальной<span>реальности {title}</span>
                    </h2>
                    <div className="section__description fadeInDown animated wow"></div>
                </div>
                <div className="about__union">
                    <div className="about__rotateblock">
                    <div className="rotatefoto__union">
                        <div className="rotatefoto__block"></div>
                        <img
                        src="/img/logo-block2.png"
                        id="page-preloader"
                        className="circle animated offer-pic"
                        alt="Logo"
                        />
                    </div>
                    </div>
                    <div className="about__block">
                    <div className="about__block_info about__block_info_l about__block_info1 fadeInDown animated wow">
                        <h3 className="about__title mintitle fadeInDown animated wow">
                        Большие компании
                        </h3>
                        <div className="about__description description fadeInDown animated wow">
                        Можно приходить компаниями, зрители могут поддерживать игроков
                        прямо в зале, либо ждать своей очереди с приставкой xBox <br />
                        Другими словами, меняться можно.
                        </div>
                    </div>
                    <div className="about__block_info about__block_info_l about__block_info2 fadeInDown animated wow">
                        <h3 className="about__title mintitle fadeInDown animated wow">
                        Работаем по записи
                        </h3>
                        <div className="about__description description fadeInDown animated wow">
                        Придя внезапно вы рискуете, что свободных мест не окажется.
                        Забронировать игру можно онлайн на сайте или позвонив нам по
                        номеру <a href={"tel:"+phone}>{phone}</a>
                        </div>
                    </div>
                    </div>
                    <div className="about__block about__block2">
                    <div className="about__block_info about__block_info_r about__block_info3 fadeInDown animated wow">
                        <h3 className="about__title mintitle fadeInDown animated wow">
                        Менять игры
                        </h3>
                        <div className="about__description description fadeInDown animated wow">
                        Игры можно менять произвольно, для этого надо просто попросить
                        администратора.
                        </div>
                    </div>
                    </div>
                    <div className="about__block">
                    <div className="about__block_info about__block_info_r about__block_info4 fadeInDown animated wow">
                        <h3 className="about__title mintitle fadeInDown animated wow">
                        Возраст игроков
                        </h3>
                        <div className="about__description description fadeInDown animated wow">
                        Мы рекомендуем от 7 лет. Младше можно, но с риском, что у ребенка
                        может не получиться поиграть и он расстроится. А может и
                        получится, все дети разные!
                        </div>
                    </div>
                    <div className="about__block_info about__block_info_r about__block_info5 fadeInDown animated wow">
                        <h3 className="about__title mintitle fadeInDown animated wow">
                        Лаунж-зона
                        </h3>
                        <div className="about__description description fadeInDown animated wow">
                        Отдельная лаунж-зона специально для весёлых застолий и игры в
                        приставку xBox. Еду и напитки можно приносить с собой или заказать
                        доставку прямо в клуб.
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="why">
                <div className="container">
                <div className="section__header">
                    <h2 className="about__about fadeInDown animated wow">
                    <div className="beforetitle">Почему</div>
                    Почему стоит прийти <span>именно к нам</span>
                    </h2>
                    <div className="section__union">
                    <div className="section__description fadeInDown animated wow">
                        Погрузиться в захватывающий мир цифровой иллюзии сегодня может
                        каждый...
                    </div>
                    <a href="#gobooking" className="section__btn btn">
                        Забронировать онлайн
                    </a>
                    </div>
                </div>
                <div className="why__union why__union1">
                    <div className="why__block why__block1 fadeInDown animated wow">
                    <img src="/img/huge.png" alt="huge" className="why__img" />
                    <h3 className="why__title mintitle">Огромное разнообразие</h3>
                    <div className="why__description description">
                        В нашем арсенале множество игр и познавательных программ для детей и
                        взрослых, от 6 и до 160 лет.
                    </div>
                    </div>
                    <div className="why__block why__block2 fadeInDown animated wow">
                    <img src="/img/high.png" alt="high" className="why__img" />
                    <h3 className="why__title mintitle">Высокие технологии</h3>
                    <div className="why__description description">
                        Новейшее оборудование под управлением мощных современных
                        компьютеров. Все летает, ничто не мешает!
                    </div>
                    </div>
                    <div className="why__block why__block3 fadeInDown animated wow">
                    <img
                        src="/img/security.png"
                        alt="security"
                        className="why__img"
                    />
                    <h3 className="why__title mintitle">Безопастность и комфорт</h3>
                    <div className="why__description description">
                        Чтобы вам спокойно игралось, мы обеспечим безопасность, гигиену и
                        сохранность ваших личных вещей в реальном мире.
                    </div>
                    </div>
                </div>
                <div className="why__union">
                    <div className="why__block why__block4 fadeInDown animated wow">
                    <img src="/img/teame.png" alt="teame" className="why__img" />
                    <h3 className="why__title mintitle">Команды 2 - 6 человек</h3>
                    <div className="why__description description">
                        Вы можете играть один или компанией от 2-х до 6-ти человек, все
                        вместе, друг против друга или каждый в свою игру.
                    </div>
                    </div>
                    <div className="why__block why__block5 fadeInDown animated wow">
                    <img src="/img/fresh.png" alt="fresh" className="why__img" />
                    <h3 className="why__title mintitle">Свежий воздух</h3>
                    <div className="why__description description">
                        Система вентиляции позволит свободно дышать во время динамичных игр,
                        дающих вполне реальную фитнес-нагрузку.
                    </div>
                    </div>
                    <div className="why__block why__block6 fadeInDown animated wow">
                    <img
                        src="/img/steering.png"
                        alt="steering"
                        className="why__img"
                    />
                    <h3 className="why__title mintitle">Гоночный кокпит</h3>
                    <div className="why__description description">
                        Эксклюзив! Да, у нас есть гоночный кокпит! Кресло, руль и педали не
                        позволят ни на секунду усомниться в реальности вашего виртуального
                        авто!
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="change">
                <div className="container">
                <div className="section__header">
                    <div className="section__description fadeInDown animated wow">
                    Виртуальная реальность перестала быть фантастической мечтой.
                    Погрузиться в захватывающий мир цифровой иллюзии сегодня может каждый.
                    </div>
                    <h2 className="change__about fadeInDown animated wow" id="game">
                    <div className="beforetitle">Выбор</div>
                    Выбор игры <span>НА ЛЮБОЙ ВКУС</span>
                    </h2>
                </div>
                <div className="change__table fadeInDown animated wow">
                    <div className="tabs">
                        <Games />
                    </div>
                </div>
                <a href="#gobooking" className=" change__btn btn">
                    Записаться на игру
                </a>
                </div>
            </section>
            <section className="info">
                <div className="container">
                <div className="section__header">
                    <div className="section__union">
                    <div className="section__description fadeInDown animated wow">
                        О технологии VR или что вообще происходит...
                    </div>
                    <button data-toggle="modal" className="btn" data-target="#callback">
                        Узнать больше
                    </button>
                    </div>
                    <h2 className="change__about fadeInDown animated wow">
                    <div className="beforetitle">Погрузись</div>
                    Выбор игры на любой <span>вкус</span>
                    </h2>
                </div>
                <div className="info__union">
                    <div className="info__block fadeInLeft animated wow">
                    <div className="info__info">
                        <h3 className="info__ttile mintitle">Виртуальная реальность</h3>
                        <div className="info__description description">
                        Это мир, генерируемый мощным компьютером и передаваемый человеку
                        через его чувства, в нашем случае зрение слух и осязание.
                        Имитируется как воздействие, так и отклик на воздействие. <br />
                        <br />А если проще Надевая шлем вы полностью теряете связь с
                        реальностью, оказываетесь в гуще схватки с зомби, или на дне
                        океана, среди дельфинов.
                        </div>
                        <h3 className="info__ttile mintitle">А если проще </h3>
                        <div className="info__description description">
                        Надевая шлем вы полностью теряете связь с реальностью,
                        оказываетесь в гуще схватки с зомби, или на дне океана, среди
                        дельфинов.
                        </div>
                    </div>
                    </div>
                    <div className="info__block info__blocks fadeInRight animated wow">
                    <div className="info__infos">
                        <h3 className="info__ttile mintitle"> Полная иллюзия</h3>
                        <div className="info__description description">
                        В Иллюзия на столько полная, что если вы боитесь высоты, вы ни за
                        что не сможете пройти по доске между небоскребами, хотя в
                        реальности доска просто лежит на полу, а на американских горках
                        может укачать!
                        </div>
                        <h3 className="info__ttile mintitle"> Особенность </h3>
                        <div className="info__description description">
                        Ощущения, испытываемые в VR абсолютно не передаются ни на словах
                        ни на видео, но если попробуете, равнодушным не останетесь!
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="infos">
                <div className="container">
                <div className="section__header">
                    <div className="section__union">
                    <div className="section__description fadeInDown animated wow">
                        Мы гордимся тем, что делаем самые современные VR-технологии
                        доступными для каждого
                    </div>
                    <a href="#gobooking" className=" section__btn btn">
                        Забронировать онлайн
                    </a>
                    </div>
                    <h2 className="change__about fadeInDown animated wow">
                    <div className="beforetitle" id="price">
                        Выбор
                    </div>
                    Большой <span>выбор аттракционов</span> и доступные цены
                    </h2>
                </div>
                <div className="info__union">
                    <div className="info__block fadeInLeft animated wow">
                    <div className="info__info">
                        <h3 className="info__ttile info__ttile_m mintitle">Будние дни</h3>
                        <div className="info__table">
                        <WeekdayPriceTable />
                        </div>
                    </div>
                    </div>
                    <div className="info__block fadeInRight animated wow">
                    <div className="info__info">
                        <h3 className="info__ttile info__ttile_m mintitle">
                        Выходные дни
                        </h3>
                        <div className="info__table">
                        <WeekendPriceTable />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="info__blockinfo">
                    <div className="info__blockinfoblock fadeInLeft animated wow">
                    <img src="/img/sales.png" alt="Скидка" className="iimg" />
                    <h3 className="info__blockinfo_ttile mintitle">Акция! Скидка!</h3>
                    <div className="info__blockinfo_description description">
                        Каждый будний день <br /> до 17:00
                    </div>
                    <h3 className="info__blockinfo_salas mintitle">- 50р. за час</h3>
                    <div className="info__blockinfo_salas_description description">
                        *не действует в каникулы
                    </div>
                    </div>
                    <div className="info__blockinfoblock fadeInDown animated wow">
                    <img src="/img/salas2.png" alt="Скидка" className="iimg" />
                    <h3 className="info__blockinfo_ttile mintitle">Скидка за репост </h3>
                    <div className="info__blockinfo_description description">
                        За скриншот репоста из нашей Инсты или VK
                    </div>
                    <h3 className="info__blockinfo_salas mintitle">
                        - 10% (макс. 300р.)
                    </h3>
                    <div className="info__blockinfo_salas_description description">
                        *от 80 подписчиков
                    </div>
                    </div>
                    <div className="info__blockinfoblock fadeInRight animated wow">
                    <img src="/img/present.png" alt="Подарок" className="iimg" />
                    <h3 className="info__blockinfo_ttile mintitle">
                        Подарочный сертификат
                    </h3>
                    <div className="info__blockinfo_description description">
                        На любое количество часов игры
                    </div>
                        <h3 className="info__blockinfo_salas mintitle">{certhour}</h3>
                    </div>
                </div>
                </div>
            </section>
            <section className="booking">
                <div className="container">
                <div className="section__header">
                    <h2
                    className="booking__about fadeInDown  wow animated"
                    style={{ visibility: "visible", animationName: "fadeInDown" }}
                    >
                    <div className="beforetitle">Окунись</div>
                    Окунись в другую реальность <span>забронируй время игры</span>
                    </h2>
                    <div className="section__union" id="gobooking">
                    <div
                        className="section__description fadeInDown  wow animated"
                        style={{ visibility: "visible", animationName: "fadeInDown" }}
                    >
                        Вы можете прямо сейчас забронировать подходящее для Вас время на
                        игру...
                    </div>
                    </div>
                </div>
                <div className="booking__block fadeInDown animated wow">
    <iframe src="https://api.v-rex.club/vrex" width="100%" id="book-iframe" style={{ border: "none", display: "block", width: "100%" }} />
                    <script type="module" dangerouslySetInnerHTML={{ __html: `
    import { initialize } from "https://cdn.jsdelivr.net/npm/@open-iframe-resizer/core@latest/dist/index.js";

    initialize({}, "#book-iframe");` }} />
                </div>
                </div>
            </section>
            <Footer />
        </body>
    </>
}
