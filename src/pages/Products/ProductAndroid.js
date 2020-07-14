import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img from "../../features_img/home/home_android.png";
import img1 from "../../features_img/challenges/challenges_android.png";
import img2 from "../../features_img/fitness/fitness_android.png";
import img3 from "../../features_img/sleepy/sleepy_android.png";
import img4 from "../../features_img/search/search_android.png";
import "./Products.css";
import { ThemeContext } from "../../contexts/ThemeContext";
const ProductAndroid = () => {
  const { isHomepage, light, dark } = useContext(ThemeContext);
  const theme = isHomepage ? dark : light;
  return (
    <div className="product" id="download">
      <div className="product__info">
        <h1 style={{ color: theme.text_h }}>Ez Health for Android</h1>
        <p style={{ color: theme.text_p, textAlign: "justify" }}>
          Healthy is something that is on everyone’s mind at some point. Better
          health can lead to lower hospital bills, feeling better, and doing
          more things. Thankfully, there are a ton of applications on
          smartphones and tablets that can assist you in living better, eating
          better, and exercising more frequently. Most of the useful ones are
          either exercise apps, calorie counters, activity tracking apps, or
          some combination of all three. Let’s take a look at the best health
          apps for Android! We put a bit of a focus on eating, fitness and plan
          your healthy life cycle with this one. We have more colorful style
          features for you.
        </p>
        <a href="https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/android%2Fezhealth-v.1.0.0.apk?alt=media&token=450f0d1e-7ba2-4ae3-ac5e-b944b515cf9b">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="product__info__btnDownload"
          >
            <i class="fa fa-arrow-down"></i> DOWNLOAD
          </motion.button>
        </a>
      </div>
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
    </div>
  );
};

export default ProductAndroid;
