import { Head, Header, Footer } from "../components";
import { vk } from "../config";

export default function Gallery() {
    return (
        <>
            <head>
                <Head pageName="Галерея" />
                <style>{`header:after {display: none;}
                    header {
                      min-height: 0!important;
                      padding-bottom: 0px!important;
                      display: flex;
                      align-items: center;
                      position: relative;
                      }`}</style>
            </head>
            <Header />
            <div id="primary" className="content-area">
              <div id="content" className="site-content" role="main">
                <div className="booking__block fadeInDown animated wow" style={{margin: '200px auto'}}>
                  <p style={{ color: "white" }}>
                    Сайт временно на реконструкции, приносим свои извинения.
                    <br />
                    <br />
                    Вы можете посмотреть фото на <a href={`https://vk.com/${vk}`} style={{color: '#0693e3'}}>нашей странице ВКонтакте</a>
                  </p>
                </div>
              </div>
              {/* #content */}
            </div>
            <Footer />
        </>
    );
}
