import stayle from "./Hero.module.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className={stayle.hero}>
      <div className={stayle["hero-left"]}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={stayle["hero-hand-icon"]}>
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={stayle["hero-right"]}>
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
