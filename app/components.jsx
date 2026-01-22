import { title, description, url, phone, telegram, address, mode, vk, google, yandex, email, ymap } from './config';
import { category } from './games.json'

export function Head({ pageName = null }) {
    const pageTitle = pageName === null ? title : pageName+" | "+title
    return (
        <>
            <title>{pageTitle}</title>
            <meta charSet="UTF-8" />
            <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="preconnect" href="https://fonts.googleapis.com/" />
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
                rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com/" />
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="/thumbnail.png" />
            <meta name="vk:image" content="/thumbnail.png" />
            <meta name="fb:image" content="/thumbnail.png" />
            <meta name="twitter:image" content="/thumbnail.png" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
            />
            <link href="/animate.min.css" rel="stylesheet" type="text/css" />
            <link href="/bp.min.css" rel="stylesheet" type="text/css" />
            {/* <link
                rel="stylesheet"
                href="../../itchief.ru/examples/libs/chief-slider/chief-slider-with-prefixes.min.html"
            /> */}
            <link href="/mainshome.css" rel="stylesheet" type="text/css" />
            <style
                dangerouslySetInnerHTML={{
                __html:
                    'img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }'
                }}
            />
            {/* <meta name="robots" content="max-image-preview:large" />
            <meta name="author" content="Bond" />
            <meta name="generator" content="All in One SEO (AIOSEO) 4.9.1.1" /> */}
            <meta property="og:locale" content="ru_RU" />
            <meta
                property="og:site_name"
                content={title+" | "+description}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={pageTitle} />
            {/* <meta property="og:url" content={window.location.href} /> */}
            {/* <meta property="article:published_time" content="2021-09-02T22:07:34+00:00" />
            <meta property="article:modified_time" content="2024-04-24T17:28:23+00:00" /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={pageTitle} />
            {/* All in One SEO */}
            <link rel="dns-prefetch" href="http://fonts.googleapis.com/" />
            <link
                rel="stylesheet"
                id="twb-open-sans-css"
                href="https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C500%2C600%2C700%2C800&display=swap&ver=6.8.3"
                type="text/css"
                media="all"
            />
            {/* <link
                rel="stylesheet"
                id="twbbwg-global-css"
                href="/content/plugins/photo-gallery/booster/assets/css/global8a54.css?ver=1.0.0"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="sbi_styles-css"
                href="/content/plugins/instagram-feed/css/sbi-styles.minf7be.css?ver=6.10.0"
                type="text/css"
                media="all"
            />
            <style
                id="wp-emoji-styles-inline-css"
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n"
                }}
            />
            <link
                rel="stylesheet"
                id="wp-block-library-css"
                href="/wp-includes/css/dist/block-library/style.min32d4.css?ver=6.8.3"
                type="text/css"
                media="all"
            />
            <style
                id="classic-theme-styles-inline-css"
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    "\n/\n.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}\n"
                }}
            />
            <link
                rel="stylesheet"
                id="aioseo/css/src/vue/standalone/blocks/table-of-contents/global.scss-css"
                href="/content/plugins/all-in-one-seo-pack/dist/Lite/assets/css/table-of-contents/global.e90f6d473968.css?ver=4.9.1.1"
                type="text/css"
                media="all"
            />
            <style
                id="global-styles-inline-css"
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    "\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}\n:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}\n"
                }}
            />
            <link
                rel="stylesheet"
                id="DOPBSP-css-dopselect-css"
                href="/content/plugins/booking-system/libraries/css/jquery.dop.Select32d4.css?ver=6.8.3"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="bwg_fonts-css"
                href="/content/plugins/photo-gallery/css/bwg-fonts/fonts622c.css?ver=0.0.1"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="sumoselect-css"
                href="/content/plugins/photo-gallery/css/sumoselect.min9bf7.css?ver=3.4.6"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="mCustomScrollbar-css"
                href="/content/plugins/photo-gallery/css/jquery.mCustomScrollbar.minc6bd.css?ver=3.1.5"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="bwg_googlefonts-css"
                href="https://fonts.googleapis.com/css?family=Ubuntu&subset=greek,latin,greek-ext,vietnamese,cyrillic-ext,latin-ext,cyrillic"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="bwg_frontend-css"
                href="/content/plugins/photo-gallery/css/styles.minb594.css?ver=1.8.35"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="twentyfourteen-lato-css"
                href="http://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="genericons-css"
                href="/content/themes/vrex/genericons/genericons5b75.css?ver=3.0.2"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="twentyfourteen-style-css"
                href="/content/themes/vrex/style32d4.css?ver=6.8.3"
                type="text/css"
                media="all"
            />
            <link
                rel="stylesheet"
                id="fancybox-css"
                href="/content/plugins/easy-fancybox/fancybox/1.5.4/jquery.fancybox.min32d4.css?ver=6.8.3"
                type="text/css"
                media="screen"
            />
            <style
                id="fancybox-inline-css"
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    "\n#fancybox-outer{background:#ffffff}#fancybox-content{background:#ffffff;border-color:#ffffff;color:#000000;}#fancybox-title,#fancybox-title-float-main{color:#fff}\n"
                }}
            /> */}
            {/*
            <link rel="https://api.w.org/" href="../wp-json/index.html" />
            <link
                rel="alternate"
                title="JSON"
                type="application/json"
                href="../wp-json/wp/v2/posts/1613.json"
            />
            <link
                rel="EditURI"
                type="application/rsd+xml"
                title="RSD"
                href="../xmlrpc0db0.php?rsd"
            />
            <meta name="generator" content="WordPress 6.8.3" />
            <link rel="shortlink" href="../indexd350.html?p=1613" />
            <link
                rel="alternate"
                title="oEmbed (JSON)"
                type="application/json+oembed"
                href="../wp-json/oembed/1.0/embed68ec.json?url=https%3A%2F%2Fv-rex.club%2Fzomday%2F"
            />
            <link
                rel="alternate"
                title="oEmbed (XML)"
                type="text/xml+oembed"
                href="../wp-json/oembed/1.0/embed76f5?url=https%3A%2F%2Fv-rex.club%2Fzomday%2F&format=xml"
            />
            <meta
                name="generator"
                content="Elementor 3.33.3; features: additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-auto"
            />
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 1024px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 640px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"
                }}
            />
            <link
                rel="icon"
                href="/content/uploads/2020/02/cropped-VR-logo-original-03-32x32.png"
                sizes="32x32"
            />
            <link
                rel="icon"
                href="/content/uploads/2020/02/cropped-VR-logo-original-03-192x192.png"
                sizes="192x192"
            />
            <link
                rel="apple-touch-icon"
                href="/content/uploads/2020/02/cropped-VR-logo-original-03-180x180.png"
            />
            <meta
                name="msapplication-TileImage"
                content="/content/uploads/2020/02/cropped-VR-logo-original-03-270x270.png"
            />
            */}
            {/* Yandex.Metrika counter */}
            <noscript>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/67564069"
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                />
            </div>
            </noscript>
        </>
    );
}

function NavBar() {
    return (
        <>
        <div className="naw__fon">
        <div className="naw fadeInDown animated wow">
            <a href="/">
            <img
                src="/img/logo.png"
                alt="Logo"
                className="naw__logo"
            />
            </a>
            <div className="naw__union">
            <div className="naw__block">
                <ul className="naw__menu sk">
                <li>
                    <a href="/#offer">Главная</a>
                </li>
                <li>
                    <a href="/gallery">Фото</a>
                </li>
                <li className="linckgame">
                    <a href="/#game">Игры</a>
                    <div className="linckgame__block">
                    <div className="linckgame__arrow" />
                    <div className="menu-igry-container">
                        <ul id={14} className="menu">
                        {category.map((item) => (
                            <li key={item.id} className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href={`/category/${item.id}`}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </li>
                <li>
                    <a href="/#price">Цены</a>
                </li>
                <li>
                    <a href="#contacts">Контакты</a>
                </li>
                </ul>
                <div className="naw__social sk1">
                <a href={"whatsapp://send?phone="+phone}>
                    <img src="/img/whatsup.png" alt="whatsapp" />
                </a>
                <a href={"https://t.me/"+telegram}>
                    <img src="/img/telegram.png" alt="telegram" />
                </a>
                </div>
            </div>
            <div className="naw__block ">
                <a href="#" className="naw__adress sk2">
                {address}
                </a>
                <div className="naw__clock sk2">{mode}</div>
                <a href={"tel:"+phone} className="naw__phone sk3">
                {phone}
                </a>
            </div>
            </div>
            <a href="#" className="mobile_menu skk">
            <span />
            <span />
            <span />
            </a>
            {/* <button data-toggle="modal" className="btn" data-target="#callback">
            Обратный звонок
            </button> */}
        </div>
        </div>
        <div className="naw__mobile">
        <div className="menumobile">
            <div className="header__menu_tel ">
            <div className="mobile_menu_container">
                <div className="mobile_menu_content">
                <div className="mobile_menu_container">
                    <div className="mobile_menu_content">
                    <div className="mobile_menu_content_title">Меню</div>
                    <div className="mobile_menu_content_menu">
                        <div className="menu-pervoe-menyu-container">
                        <div className="menu-glavnoe-v-shapke-container">
                            <ul className="menu">
                            <li>
                                <a
                                href="/#offer"
                                className="mobilelink"
                                >
                                Главная
                                </a>
                            </li>
                            <li>
                                <a
                                href="/gallery"
                                className="mobilelink"
                                >
                                Фото
                                </a>
                            </li>
                            <li>
                                <a href="#" className="parent">
                                Игры
                                </a>
                                <ul>
                                <li>
                                    <a href="#" className="back" />
                                </li>
                                <div className="menu-igry-container">
                                    <div id="menu-igry" className="menu">
                                    {category.map((item) => (
                                        <li key={item.id} className="menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href={`/category/${item.id}`}>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                    </div>
                                </div>
                                </ul>
                            </li>
                            <li>
                                <a
                                href="/#price"
                                className="mobilelink"
                                >
                                Цены
                                </a>
                            </li>
                            <li>
                                <a
                                href="/#contacts"
                                className="mobilelink"
                                >
                                Контакты
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <a href={"tel:"+phone} className="naw__phone">
                        {phone}
                    </a>
                    </div>
                </div>
                <div className="mobile_menu_overlay" />
                </div>
            </div>
            <div className="mobile_menu_overlay" />
            </div>
        </div>
        </div>
        <script src="/js/menu.js" />
        <script src="/js/menugame.js"></script>
        </>
    )
}

export function LandHeader() {
    return (
    <header id="offer">
        <div className="header__fon" />
        <div className="container">
            <NavBar />
            <div className="offer">
            <h1 className="offer__title fadeInDown animated wow">
                Клуб виртуальной реальности
            </h1>
            <div className="offer__description pulse animated wow">
                Яркий праздник. Нескучный вечер вместо ресторана!
            </div>
            <a href="#gobooking" className=" offer__button btn">
                Забронировать онлайн
            </a>
            </div>
          </div>
          <script src="/js/menu.js" />
        </header>
    );
}

export function Header() {
    return (
        <header id="offer">
            <div className="container">
                <NavBar />
            </div>
        </header>
    );
}

export function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="section__header">
            <div className="section__union">
              <div className="section__description fadeInDown animated wow">
                Присоединяйтесь к нам в социальных сетях...
              </div>
            </div>
            <h2 className="change__about fadeInDown animated wow">
              <div className="beforetitle">Выбор</div>
              Хочешь больше узнать о <span> виртуальной реальности?</span>
            </h2>
          </div>
          <div className="footer__block">
            <div className="footer__iteames">
              <img
                src="/img/instagram.png"
                alt="instagram"
                className="footer__iteam_foto"
              />
              <div className="footer__iteam_union">
                <div className="footer__iteam_description description fadeInDown animated wow">
                  Подпишись на наш инстаграм. Мы публикуем только действительно
                  полезные и актуальные статьи, честные отзывы клиентов.{" "}
                  <a href="https://www.instagram.com/vrexclub/">
                    @vrexclub
                  </a>
                  .
                </div>
                <div className="footer__iteam_info fadeInDown animated wow">
                  Мы проводим вкусные акции!
                </div>
              </div>
            </div>
            <div className="footer__iteames">
              <img
                src="/img/vk.png"
                alt="vk"
                className="footer__iteam_foto"
              />
              <div className="footer__iteam_union">
                <div className="footer__iteam_description description fadeInDown animated wow">
                  Так же в нашем ВКонтакте можете прочитать последние новости и
                  новинки. Мы в <a href={"https://vk.com/"+vk}>ВКонтакте</a>
                </div>
                <div className="footer__iteam_info fadeInDown animated wow" id="foto">
                  Быть в курсе последних событий мира виртуальной реальности.
                </div>
              </div>
            </div>
          </div>
          <div className="footer__gallery">
            <div className="container"></div>
          </div>
          <div className="footer__reviews">
            <div className="section__header">
              <h2
                className="booking__about fadeInDown  wow  animated"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div className="beforetitle">Отзывы</div>О нас <span>Говорят</span>
              </h2>
              <div className="section__union" id="gobooking">
                <div className="section__description fadeInDown  wow  animated">
                  С момента открытия {/* в 2019 году*/}мы сумели завоевать доверие множества
                  благодарных клиентов...
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__iteames">
                <img
                  src="/img/google.png"
                  alt="google"
                  className="footer__iteam_foto"
                />
                <div className="footer__iteam_union">
                  <div className="footer__iteam_description description fadeInDown animated wow">
                    <a
                      href={google}
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                  <div className="footer__iteam_info fadeInDown animated wow">
                    Совершенно невероятных масштабов благодарность обрушилась на
                    головы наших дорогих посетителей, не поленившихся оставить свои
                    благосклонные отзывы о нашем скромном клубе!
                  </div>
                </div>
              </div>
              <div className="footer__iteames">
                <img
                  src="/img/yandex.png"
                  alt="yandex"
                  className="footer__iteam_foto"
                />
                <div className="footer__iteam_union">
                  <div className="footer__iteam_description description fadeInDown animated wow">
                    <a
                      href={yandex}
                      target="_blank"
                    >
                      Яндекс
                    </a>
                  </div>
                  <div
                    className="footer__iteam_info fadeInDown animated wow"
                    id="foto"
                  >
                    Не меньших масштабов благодарность и пожелания процветания, любви,
                    счастья и пятерок по всем предметам улетает всем тем великолепным
                    красавцам и красавицам, которые нас похвалили!
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <img
            src="/img/map.png"
            alt="Карта"
            className="footer__map fadeInDown animated wow"
            id="contacts"
          /> */}
          <iframe
            className="footer__map fadeInDown animated wow" id="contacts" style={{ position: "relative", overflow: "hidden", aspectRatio: "1170/455" }}
            src={ymap}
            frameBorder={1}
            allowFullScreen={true}
          />
          <div className="footer__contacts">
            <div className="footer__iteam footer__iteam1 fadeInDown animated wow">
              <h3 className="footer__iteam_ttile mintitle footer__iteam_a">
                Позвонить:
              </h3>
              <a href={"tel:"+phone}>{phone}</a>
            </div>
            <div className="footer__iteam footer__iteam2 fadeInDown animated wow">
              <h3 className="footer__iteam_ttile mintitle footer__iteam_a">Адрес:</h3>
              <a
                href={yandex}
                target="_blank"
              >
                {address}
              </a>
            </div>
            <div className="footer__iteam footer__iteam3 fadeInDown animated wow">
              <h3 className="footer__iteam_ttile mintitle footer__iteam_a">
                Написать:
              </h3>
              <a href={"mailto:"+email}>{email}</a>
            </div>
            <div className="footer__iteam footer__iteam4 fadeInDown animated wow">
              <h3 className="footer__iteam_ttile mintitle footer__iteam_a">
                Мы работаем:
              </h3>
              <a href="#">{mode}</a>
            </div>
          </div>
          <div className="footeriteamblock fadeInDown animated wow">
            <img
              src="/img/lofo-footer.png"
              alt="Лого в низу сайта"
              className="footeriteamblock__logo"
            />
            <div className="menu-v-futere-1-container">
              <ul id={3} className="footeriteamblock__ul">
                <li
                  id="menu-item-12"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-12"
                >
                  <a href="#gobooking">Забронировать игру</a>
                </li>
                <li
                  id="menu-item-13"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-13"
                >
                  <a href="#game">Выбери игру</a>
                </li>
                <li
                  id="menu-item-14"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-14"
                >
                  <a href="#contacts">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="menu-v-futere-2-container">
              <ul id={15} className="footeriteamblock__ul">
                <li
                  id="menu-item-1245"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-1245"
                >
                  <a href="#offer">Узнай о нас подробнее</a>
                </li>
                <li
                  id="menu-item-1246"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1246"
                >
                  <a href="/gallery">Фото галерея</a>
                </li>
                <li
                  id="menu-item-1247"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1247"
                >
                  <a href="/games-for-all">Игры для всех</a>
                </li>
              </ul>
            </div>{" "}
            <div className="footeriteamblock__description description">
              All Right Reserved © 2025 «{title}» — клуб виртуальной реальности
              <div className="footeriteamblock__social">
                <a href="https://www.instagram.com/vrexclub/">
                  <img src="/img/instagram.png" alt="instagram" />
                </a>
                <a href={"https://vk.com/"+vk}>
                  <img src="/img/vk.png" alt="vk" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
