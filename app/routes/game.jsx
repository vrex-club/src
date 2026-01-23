import { Head, Header, Footer } from "../components";
import games from "../games.json" with { type: "json" }

export async function loader({ params }) {
    const game = games.games[params.game];
    return game;
}

export default function Game({ loaderData }) {
    return (
        <>
            <head>
                <Head pageName={loaderData.name} />
                <style dangerouslySetInnerHTML={{
                    __html: `
                       .pageinfo{
                       margin-top: -1230px;
                       padding-top: 1450px;
                       padding-bottom: 100px;
                       position: relative;
                       }
                       .header__fon111{
                       position: absolute;
                       left: 0;
                       top: 0;
                       width: 100%;
                       background: url(../img/block5.png);
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
                       0%   { transform: translateY(0); }
                       50%  { transform: translateY(-10px); }
                       100% { transform: translateY(0); }
                       }
                       header {
                       min-height: 0!important;
                       padding-bottom: 0px!important;
                       display: flex;
                       align-items: center;
                       position: relative;
                       }
                       .footer {
                       background: url(../img/block8.png);
                       background-position: 0px 0px;
                       background-size: cover;
                       background-repeat: no-repeat;
                       padding-bottom: 80px;
                       margin-top: 0!important;
                       padding-top: 60px!important;
                       position: relative;
                       }
                       .naw__fon{
                       top: 10px!important;
                       }
                       .pageinfo__content{
                       position: relative;
                       z-index: 111;
                       color: #ffffff;
                       }
                       .pageinfo h1{
                       position: relative;
                       z-index: 111;
                       font-size: 38px;
                       color: #ffffff;
                       font-weight: 600;
                       }
                       .item {
                       background: #181f35!important;
                       margin-bottom: 32px!important;
                       cursor: pointer;
                       width: 31%;
                       }
                       .item:hover{
                       opacity: 0.8;
                       }
                       .layer-content {
                       padding: 20px 10px!important;
                       }
                       .layer-content {
                       padding-top: 5px!important;
                       }
                       .element_1587187895341 a {
                       font-size: 21px;
                       color: #9967e6;
                       font-weight: 600;
                       }
                       .excerpt  a{
                       display: none;
                       }
                       .layer-content .excerpt {
                       line-height: 20px!important;
                       }
                       .layer-content .title a{
                       font-size: 22px!important;
                       line-height: 20px!important;
                       padding-top: 12px!important;
                       }
                       .post-grid .pagination {
                       margin: 5px 0!important;
                       }
                       .pagination .page-numbers {
                       background: #2c3c5a!important;
                       }
                       .pagination .page-numbers:hover, .page-numbers.current {
                       background: #1e305d!important;
                       }
                       .grid-items {
                       display: flex!important;
                       margin-top: 15px!important;
                       flex-wrap: wrap;
                       }
                       header:after{
                       display: none;
                       }
                       .gamepost{
                       display: flex;justify-content: space-between;
                       margin-top: 20px;
                       }
                       .gamepost__foto {
                       width: 49%;
                       }
                       .gamepost__foto img{
                       width: 100%;
                       height: auto;
                       }
                       .gamepost__block{
                       width: 49%;
                       }
                       .gamepost__title .entry-title{
                       margin-bottom: 3px;
                       }
                       .gamepost__description {
                       line-height: 26px;
                       height: 145px;
                       overflow-x: scroll;
                       margin-bottom: 20px;
                       }
                       .gamepost__description::-webkit-scrollbar {
                       width: 5px;
                       background: transparent;
                       height: 0;
                       }
                       .gamepost__description::-webkit-scrollbar-thumb {
                       background-color: #2d3651;
                       }
                       .gamepost__link{
                       color: #fff;
                       border: 1px solid rgb(208 206 206 / 43%);
                       padding: 10px 25px;
                       position: relative;
                       z-index: 111111;
                       margin-top: 8px;
                       }
                       @media only screen and (min-width: 1024px){
                       .element-media {
                       height: 200px!important;
                       }
                       }
                       @media only screen and (max-width: 991px){
                       .item {
                       width: 47%!important;
                       }
                       .post-grid .item .layer-media img {
                       height: 200px;
                       }
                       .gamepost {
                       flex-wrap: wrap;
                       justify-content: space-around;
                       }
                       .gamepost__foto {
                       width: 45%;
                       }
                       .gamepost__block{
                       width: 45%;
                       }
                       }
                       @media only screen and (max-width: 721px){
                       .item {
                       width: 100%!important;
                       }
                       .item .layer-media img {
                       height: auto!important;
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
                       .gamepost {
                       flex-direction: column;
                       margin-top: 23px;
                       }
                       .gamepost__foto {
                       width: 100%;
                       }
                       .gamepost__block{
                       width: 100%;
                       }
                       .gamepost__title .entry-title {
                       margin-top: 12px;
                       }
                       .gamepost__description {
                       line-height: 26px;
                       height: 250px;
                       font-size: 15px;
                       overflow-x: scroll;
                       }
                       }
                    `
                }} />
            </head>
            <body>
                <Header />
                    <div id="primary" className="content-area">
                    <div id="content" className="site-content" role="main">
                        <article
                            // id="post-1504"
                            // className="post-1504 post type-post status-publish format-standard has-post-thumbnail hentry category-igry-dlya-vsekh"
                        >
                        <div className="pageinfo fadeInDown animated wow">
                            <div className="header__fon111" />
                            <div className="container">
                            <div className="pageinfo__content">
                                <div className="gamepost">
                                <div className="gamepost__foto">
                                    <div className="post-thumbnail">
                                    <img
                                        fetchPriority="high"
                                        src={loaderData.thumb}
                                        // className="attachment-twentyfourteen-full-width size-twentyfourteen-full-width wp-post-image"
                                        alt=""
                                        decoding="async"
                                        // srcSet="https://v-rex.club/wp-content/uploads/2020/07/Audica-1038x576.png 1038w, https://v-rex.club/wp-content/uploads/2020/07/Audica-672x372.png 672w"
                                        // sizes="(max-width: 1038px) 100vw, 1038px"
                                    />
                                    </div>
                                </div>
                                <div className="gamepost__block">
                                    <div className="gamepost__title">
                                    <h1 className="entry-title">{loaderData.name}</h1>
                                    </div>
                                    <div className="gamepost__description">
                                        <p dangerouslySetInnerHTML={{ __html: loaderData.description.replace(/\n/g, '<br>') }} />
                                    </div>
                                    <a
                                    href={loaderData.video}
                                    className="gamepost__link"
                                    target="_blank"
                                    >
                                    Смотреть видео
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </article>
                        {/* #post-## */}
                    </div>
                    {/* #content */}
                    </div>
                <Footer />
            </body>
        </>
    );
}
