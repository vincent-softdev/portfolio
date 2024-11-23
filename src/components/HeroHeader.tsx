import { images, info } from '../constant/info';

const HeroHeader = () => {
  return (
    <div className="hero-header-container">
      <div className="hero-header__card">
        <div className="hero-header__name">
          <img
            src={images.arrow_src}
            className="hero-header__arrow"
            alt="arrow"
          />
          <p>
            Hello! I Am <span>{info.name}</span>
          </p>
        </div>
        <div className="hero-header__detail">
          <div className="hero-header__detail-avartar">
            <img src={images.hero_src} alt="hero avartar" />
          </div>
          <div className="hero-header__detail-cover">
            <p>A Full Stack Developer</p>
            <h1>
              Will Help you to turn your idea on the paper to real product...
            </h1>
            <p>I love coding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
