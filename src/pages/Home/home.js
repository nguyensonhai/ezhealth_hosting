import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";
import ProductIOS from "../Products/ProductsIOS";
import ProductAndroid from "../Products/ProductAndroid";
import { ThemeContext } from "../../contexts/ThemeContext";
import Footer from "../../components/Footer/Footer";
class Home extends Component {
  state = {};
  static contextType = ThemeContext;
  render() {
    const { isHomepage, light, dark } = this.context;
    const theme = isHomepage ? dark : light;
    return (
      <div
        className="Home__container center"
        id="home"
        style={{ background: theme.hbg }}
      >
        <section className="Home__slider">
          <div className="Home__slider__left">
            <h1>Healthy living</h1>
            <h1>Simplified</h1>
            <p>
              Take control of your goals. Track calories, breadown ingredients,
              log activities and plan your healthy life cycle with Ez Health.
            </p>
            <a data-scroll href="#download">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="product__info__btnDownload "
                style={{ marginTop: "30px" }}
              >
                <i class="fa fa-arrow-down"></i>
                GET IT NOW
              </motion.button>
            </a>
          </div>
        </section>
        <section className="Home__products">
          <ProductAndroid />
        </section>
        <section className="Home__products">
          <ProductIOS />
        </section>
        <section className="Home__features"></section>
        <Footer />
      </div>
    );
  }
}

export default Home;
