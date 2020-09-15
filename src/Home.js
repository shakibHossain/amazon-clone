import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123123123"
            title="Unibelin Smart Interactive Cat Toy Ball- Pet Toy Self Rotation Rolling Ball USB Rechargeable Cat Light Toy Built-in LED Li..."
            price={8.99}
            image="https://m.media-amazon.com/images/I/61XR0cKpWEL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="123123124"
            title="AmazonBasics Cat Scratching Post and Hammock"
            price={26.99}
            image="https://m.media-amazon.com/images/I/91uOGK5bQ5L._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123123125"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price={559.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
            rating={3}
          />
          <Product
            id="123123126"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            price={421.5}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
            rating={4}
          />
          <Product
            id="123123127"
            title="Logitech MK270 Wireless Keyboard and Mouse Combo - Keyboard and Mouse Included, 2.4GHz Dropout-Free Connection, Long Battery Life (Frustration-Free Packaging)"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41YbqWfgo0L._AC_US160_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123123128"
            title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
            price={23.29}
            image="https://images-na.ssl-images-amazon.com/images/I/41QyeCl1kGL._AC_US160_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
