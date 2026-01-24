import { Head, Header, Footer } from "../components";
import { title } from "../config";

export async function loader() {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const galleryDir = path.resolve(process.cwd(), "public/content/uploads/photo-gallery");

    try {
        const entries = await fs.readdir(galleryDir, { withFileTypes: true });
        return entries
            .filter((entry) => entry.isFile())
            .map((entry) => entry.name)
            .sort((a, b) => a.localeCompare(b));
    } catch (_error) {
        return [];
    }
}

export default function GalleryComponent({ loaderData }) {
    return (
        <>
            <head>
                <Head pageName="Галерея" />
                <style>
                    {`body{
             width: 100%;
             background: url(../img/background-gallery.png);
             background-position: 0px 0px;
             background-size: cover;
             background-repeat: no-repeat;
             }
             .pageinfo{
             margin-top: -1230px;
             padding-top: 1450px;
             padding-bottom: 80px;
             position: relative;
             }
             .header__fon111{
             position: absolute;
             left: 0;
             top: 0;
             background: transparent;
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
             background: transparent;
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
             }
             .footer__gallery{
             display: none;
             }`}
                </style>
                <script src="https://code.jquery.com/jquery-latest.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/nanogallery2@3/dist/css/nanogallery2.min.css" rel="stylesheet" type="text/css" />
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/nanogallery2@3/dist/jquery.nanogallery2.min.js" />
            </head>
            <Header />
            <section class="pageinfo fadeInDown  wow animated" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                <div className="header__fon111" />
                <div class="container">
                    <h1 style={{ marginBottom: '20px' }}>Галерея | {title}</h1>
                    <div id="nanogallery2" class="pageinfo__content" data-nanogallery2='{
                            "itemsBaseURL": "/content/uploads/photo-gallery/",
                            "thumbnailWidth": "auto",
                            "thumbnailBorderVertical": 0,
                            "thumbnailBorderHorizontal": 0,
                            "thumbnailLabel": {
                              "position": "overImageOnBottom",
                              "display": false
                            },
                            "thumbnailAlignment": "center",
                            "thumbnailOpenImage": true
                          }'>
                        {loaderData.map((file) => (
                            <a href={file} data-ngthumb={`thumb/${file}`} key={file} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
