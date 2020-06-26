import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { motion } from "framer-motion";
import img from "../../features_img/home/home_ios.png";
import img1 from "../../features_img/challenges/challenges_ios.png";
import img2 from "../../features_img/fitness/fitness_ios.png";
import img3 from "../../features_img/sleepy/sleepy_ios.png";
import img4 from "../../features_img/search/search_ios.png";
import "./Products.css";
import { ThemeContext } from "../../contexts/ThemeContext";
const ProductIOS = () => {
  const { isHomepage, light, dark } = useContext(ThemeContext);
  const theme = isHomepage ? dark : light;
  return (
    <div className="product">
      <div className="productandroid__slider">
        <OwlCarousel className="owl-theme" items={1} loop autoplay>
          <div className="item__">
            <img src={img} alt="" />
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img1} alt="" />
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img2} alt="" />
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img3} alt="" />
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img4} alt="" />
          </div>
        </OwlCarousel>
      </div>
      <div className="product__info product__info__IOS">
        <h1 style={{ color: theme.text_h }}>Ez Health for IOS</h1>
        <p style={{ color: theme.text_p }}>
          Ez Health is something that is on everyone’s mind at some point.
          Better health can lead to lower hospital bills, feeling better, and
          doing more things. Thankfully, there are a ton of applications on
          smartphones and tablets that can assist you in living better, eating
          better, and exercising more frequently. Most of the useful ones are
          either exercise apps, calorie counters, activity tracking apps, or
          some combination of all three. Let’s take a look at the best health
          apps for Android! We put a bit of a focus on eating healthy with this
          one. We have more health style app lists linked up just below and
          throughout the article.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="product__info__btnDownload"
        >
          <i class="fa fa-arrow-down"></i>
          SOON
        </motion.button>
      </div>
    </div>
  );
};

export default ProductIOS;
