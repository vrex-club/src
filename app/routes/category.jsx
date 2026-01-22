import { Head, Header, Footer } from "../components";
import { title } from "../config";
import { category, games } from "../games.json" with { type: "json" }

export async function loader({ params }) {
    for (const cat of category) {
        if (cat.id === params.category) {
            return cat;
        }
    }
    throw new Error(`Category ${params.category} not found`);
}

export default function Category({ loaderData }) {
    const categoryStyles = `
#post-grid-1222 {
    display: none;
    padding: 10px;
}

.post-grid-lazy {
    text-align: center;
}

#post-grid-1222 .pagination .page-numbers {
    font-size: 16px;
    color: #fff;
    background: #646464;
}

#post-grid-1222 .pagination .page-numbers:hover,
#post-grid-1222 .pagination .page-numbers.current {
    background: #4b4b4b;
}

.layout-card {
    vertical-align: top;
}

.layout-card a {
    text-decoration: none;
}

.layout-card .media-frame {
    overflow: hidden;
}

.layout-card .media-frame img {
    max-width: 100%;
    height: auto;
}

.layout-card .card-content {
    margin: 10px;
    padding: 10px;
}

.layout-card .card-title,
.layout-card .card-title a {
    font-size: 18px;
    margin: 5px 0;
    text-align: left;
}

.layout-card .card-excerpt {
    font-size: 13px;
    margin: 0;
    text-align: left;
}

.layout-card .card-excerpt a {
    font-size: 13px;
}

#post-grid-1222 .item {
    padding: 0;
    background: #fff;
}

#post-grid-1222 .grid-items {
    display: grid;
    column-gap: 10px;
    row-gap: 10px;
}

@media only screen and (max-width: 767px) {
    #post-grid-1222 .grid-items {
        grid-template-columns: 1fr;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
    #post-grid-1222 .grid-items {
        grid-template-columns: 1fr 1fr;
    }
}

@media only screen and (min-width: 1024px) {
    #post-grid-1222 .grid-items {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.pageinfo {
    margin-top: -1230px;
    padding-top: 1450px;
    padding-bottom: 80px;
    position: relative;
}

.header__fon111 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: url(https://v-rex.club/fileshome/img/block5.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation-name: fonanimate;
    animation-timing-function: linear;
    color: #ffffff;
    transform-origin: bottom;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    height: 100%;
}

@keyframes fonanimate {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}

header {
    min-height: 0 !important;
    padding-bottom: 0 !important;
    display: flex;
    align-items: center;
    position: relative;
}

.footer {
    background: url(https://v-rex.club/fileshome/img/block8.png);
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 80px;
    margin-top: 0 !important;
    padding-top: 60px !important;
    position: relative;
}

.naw__fon {
    top: 10px !important;
}

.pageinfo__content {
    position: relative;
    z-index: 111;
    color: #ffffff;
}

.pageinfo h1 {
    position: relative;
    z-index: 111;
    font-size: 38px;
    color: #ffffff;
    font-weight: 600;
}

.item {
    background: #181f35 !important;
    margin-bottom: 32px !important;
    cursor: pointer;
    width: 31%;
}

.item:hover {
    opacity: 0.8;
}

.layer-content {
    padding: 20px 10px !important;
}

.layer-content {
    padding-top: 5px !important;
}

.card-title a {
    font-size: 21px;
    color: #9967e6;
    font-weight: 600;
}

.excerpt a {
    display: none;
}

.layer-content .excerpt {
    line-height: 20px !important;
}

.layer-content .title a {
    font-size: 22px !important;
    line-height: 20px !important;
    padding-top: 12px !important;
}

.post-grid .pagination {
    margin: 5px 0 !important;
}

.pagination .page-numbers {
    background: #2c3c5a !important;
}

.pagination .page-numbers:hover,
.page-numbers.current {
    background: #1e305d !important;
}

.grid-items {
    display: flex !important;
    margin-top: 15px !important;
    flex-wrap: wrap;
}

header:after {
    display: none;
}

@media only screen and (min-width: 1024px) {
    .media-frame {
        height: 200px !important;
    }
}

@media only screen and (max-width: 991px) {
    .item {
        width: 47% !important;
    }

    .post-grid .item .layer-media img {
        height: 200px;
    }
}

@media only screen and (max-width: 721px) {
    .item {
        width: 100% !important;
    }

    .item .layer-media img {
        height: auto !important;
    }

    .pageinfo h1 {
        position: relative;
        z-index: 111;
        font-size: 30px;
        color: #ffffff;
        font-weight: 600;
    }

    .pageinfo {
        padding-top: 1390px;
    }
}
`;
    const categoryGames = [];
    loaderData.games.forEach((_game) => {
        const game = games[_game];
        categoryGames.push(
            <div key={_game} className="item">
                {/* skin flat"> */}
                <div className="layer-wrapper layout-card">
                    <div className="layer-media">
                        <div className="media-frame">
                            <a target="_self" href={`/game/${_game}`}>
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={game.thumb}
                                    width={474}
                                    height={398}
                                    // className="attachment-large size-large wp-post-image"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="layer-content card-content">
                        <div className="title card-title">
                            <a target="_blank" href={`/game/${_game}`}>
                                {game.name}
                            </a>
                        </div>
                        <div className="excerpt card-excerpt">
                            {game.description.split(" ").splice(0, 20).join(" ")}
                            <a
                                target="_self"
                                href="../dark-forest-lost-story-vr/index.html"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <head>
                <Head pageName={loaderData.name} />
                <script src="https://code.jquery.com/jquery-latest.js"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
jQuery('#post-grid-lazy-1222').ready(function($) {
  $('#post-grid-lazy-1222').fadeOut();
  $('#post-grid-1222').fadeIn();
});
`
                    }}
                />
                <link rel='stylesheet' id='post-grid-shortcode-style-css' href='/content/plugins/post-grid/assets/css/post-grid-shortcode-style32d4.css' type='text/css' media='all' />
            </head>
            <body>
                <Header />
                <section className="pageinfo fadeInDown animated wow">
                    <div className="header__fon111" />
                    <div className="container">
                        <h1>{`Вы в разделе ${loaderData.name} | ${title}`}</h1>
                        <div className="pageinfo__content">
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{ __html: categoryStyles }}
                            />
                            <div id="post-grid-lazy-1222" className="post-grid-lazy">
                                <img decoding="async" alt="" src="#" />
                            </div>
                            <div
                                data-options='{"id":"1222","lazy_load":"yes","masonry_enable":"no","view_type":"grid"}'
                                id="post-grid-1222"
                                className="post-grid grid"
                            >
                                <div className="grid-items">{categoryGames}</div>
                                {/* <div className="pagination">
                                    <div className="paginate">
                                        <span aria-current="page" className="page-numbers current">
                                            1
                                        </span>
                                        <a className="page-numbers" href="page/2/index.html">
                                            2
                                        </a>
                                        <a className="next page-numbers" href="page/2/index.html">
                                            Следующая »
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </>
    );
}
