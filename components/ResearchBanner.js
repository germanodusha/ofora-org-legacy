import { withState, compose } from "recompose";

const ResearchBanner = ({ isOpen, setOpen }) => (
  <div className="banner-pesquisa">
    <a href="https://escuta.ofora.org" target="_blank">
      <h2>Como você vive o lado de Fora?</h2>
      <h3>
        Clique aqui para
        <br />
        <a href="https://escuta.ofora.org">participar.</a>
      </h3>
      <h4>Pesquisa até dia 05/06</h4>
    </a>
    <a onClick={() => setOpen(false)} className="close">
      X
    </a>
    <style jsx>{`
      @media screen and (max-width: 600px) {
        .banner-pesquisa {
          display: none;
          visibility: hidden;
          height: 0;
          pointer-events: none;
          opacity: 0;
        }
      }
      a {
        text-decoration: none;
      }
      .banner-pesquisa {
        padding: 40px;
        background: white;
        box-shadow: -10px 10px 17px 0px rgba(0, 0, 255, 0.75);
        position: fixed;
        top: 70px;
        right: 50px;
        color: blue;
        font-family: "Source Sans Pro", sans-serif;
        width: 260px;
        transform: scale(0.8);
        display: ${isOpen ? "block" : "none"};
        z-index: 1000;
      }
      .banner-pesquisa h2 {
        font-size: 36px;
        font-weight: 900;
        margin-top: 0;
      }
      .banner-pesquisa h3 {
        font-size: 26px;
        font-weight: 600;
        font-style: italic;
      }
      .banner-pesquisa h3 a {
        box-shadow: inset 0px -4px 0px rgb(213, 213, 213);
        text-decoration: none;
        line-height: 29px;
        display: inline-block;
      }
      .banner-pesquisa h4 {
        margin-bottom: 0;
        font-weight: 300;
        font-size: 20px;
      }
      .close {
        position: absolute;
        top: -5px;
        right: -5px;
        padding: 1px 5px;
        font-size: 28px;
        text-decoration: none;
        background: blue;
        color: white;
        transform: translateX(100%) translateY(-100%);
      }
    `}</style>
  </div>
);

export default compose(withState("isOpen", "setOpen", true))(ResearchBanner);
