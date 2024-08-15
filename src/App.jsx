import "./App.css";
import About from "./component/about";
import Contactus from "./component/contactUs";
import image1 from "./images/mobile 3d.gif";
import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(0);
  const arrayObject = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Contact Us",
    },
  ];
  return (
    <React.Fragment>
      <div className="header">
        {/* <div className="menu-left"> */}
        <ol className="menu">
          {arrayObject.map((item, i) => (
            <>
              <li
                style={{
                  color: active == i ? "#27a3a3" : "#000000",
                  listStyle: "none",
                }}
                onClick={() => {
                  setActive(i);
                }}
              >
                {item?.title}{" "}
              </li>
            </>
          ))}
        </ol>
        <a
          href="https://www.cyclingboutique.in/pages/search-results-page?collection=our-bike-collection"
          target="_blank"
        >
          {" "}
          {/* <button className="button"> Shop Now</button> */}
        </a>
      </div>
      {/* </div> */}
      <div>
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNlMmFkeGt2MXUwODIzMXpleHZ1Mm1lZXpoZHhueDdmMXRpdjF4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycMyB9MMSohHR6kOFe/giphy.webp"
          className="logo"
        ></img>
      </div>

      {arrayObject.map((item, i) =>
        (active == i) & (item.title == "About") ? (
          <About />
        ) : (active == i) & (item.title == "Contact Us") ? (
          <Contactus />
        ) : (active == i) & (item.title == "Home") ? (
          <div className="vis">
            <div className="">
              <div className="qwe">
                <img />
              </div>
              <div className="clipClass"> </div>
              <div>
                <img
                  src="https://www.cyclingboutique.in/cdn/shop/products/marin-bikes-mountain-mtb-marin-bikes-mountain-bikes-rift-zone-1-27-5-37428816773332_1200x.gif?v=1662199144"
                  className="cycle"
                />
                <div>
                  <img
                    className="kidscycle"
                    src="https://themewagon.github.io/Cycle/images/img-3.png"
                  ></img>
                  <h1 className="ki">KIDS CYCLE</h1>
                  <p className="ki1">
                    Discover our fantastic range of kids’ cycles, perfect for
                    little adventurers! Whether they're zooming down the
                    sidewalk or exploring the park, we have the perfect bike for
                    every child. Built for Safety : Our cycles come with sturdy
                    frames and safety features to keep your kids safe while they
                    ride.
                    {/* 🎉 Sizes for Every Age:Choose from a variety of sizes to ensure the perfect fit for your growing child!
                  🏆 Expert Advice:Not sure which bike to choose? Our friendly staff is here to help you find the perfect match! */}
                    Let’s get those wheels turning and make every ride an
                    adventure!
                  </p>
                  <img
                    className="kibutton"
                    src="https://t4.ftcdn.net/jpg/00/29/58/27/360_F_29582718_3DMKNW6frKn5DwZJXldWrFq9RlmB1FOv.jpg"
                  ></img>
                </div>
              </div>
              <div className="box">
                <h2 className="boxheading"> CYCLE FEATURES </h2>
                <p className="boxparagraph">
                  Comfortable Rides: Our bicycle feature ergonomic seats and
                  easy handling. Stylish Designs: Choose from a variety of
                  trendy colors and classic styles that suit your personality.
                  Durable & Reliable: Built to last, our casual cycles are
                  perfect for everyday use, rain or shine! Great for All Ages:
                  Whether you're a beginner or a seasoned rider, we have the
                  perfect bike for you..
                </p>
              </div>
              <div>
                <img
                  className="slide"
                  src="https://www.nzcyclingjournal.com/wp-content/uploads/2024/05/RYR23_MOVE_970x250_animated-1.gif"
                  alt=""
                />
              </div>
              <div className="box2">
                <h2 className="boxheading2">OFFERS IN CYCLE </h2>
                <p className="boxparagraph2">
                  🌟 Limited-Time Offers: 20% Off All Kids' Cycles! Perfect for
                  young adventurers! Buy One, Get One 50% Off on select casual
                  bikes! Bring a friend and ride together! Free Accessories
                  Bundle with every purchase of a new bike! Helmets, lights, and
                  more! <br></br>styles.
                </p>
              </div>

              <div className="cycle2">
                <img
                  src="https://themewagon.github.io/Cycle/images/img-4.png"
                  className="Cycle2"
                ></img>
                <h1 className="ci"> STYLISH </h1>
                <p className="c1">
                  {" "}
                                Discover our fantastic range of stylish cycles, perfect for little adventurers! 
                </p>
                <img
                  className="cibutton"
                  src="https://t4.ftcdn.net/jpg/00/29/58/27/360_F_29582718_3DMKNW6frKn5DwZJXldWrFq9RlmB1FOv.jpg"
                ></img>
              </div>

              <div className="cycle3">
                <img
                  src="https://themewagon.github.io/Cycle/images/img-5.png"
                  className="Cycle3"
                ></img>
                <h1 className="ci3"> MODERN </h1>
                <p className="c3">
                  {" "}
                  Our bicycle feature ergonomic seats and easy handling.
                </p>
                <img
                  className="cbutton"
                  src="https://t4.ftcdn.net/jpg/00/29/58/27/360_F_29582718_3DMKNW6frKn5DwZJXldWrFq9RlmB1FOv.jpg"
                ></img>
              </div>
              <div className="cycle4">
                <img
                  src="https://themewagon.github.io/Cycle/images/img-1.png"
                  className="Cycle4"
                ></img>
                <h1 className="ci4"> CASUAL</h1>
                <p className="c4">
                  {" "}
                  Discover our fantastic range of casual cycles, perfect for
                  little adventurers.
                </p>
                <img
                  className="cb4utton"
                  src="https://t4.ftcdn.net/jpg/00/29/58/27/360_F_29582718_3DMKNW6frKn5DwZJXldWrFq9RlmB1FOv.jpg"
                ></img>
              </div>
              <> {/* <button className="cardbt"> Contact US</button>{" "} */}</>
            </div>

            <div className="new">
              <div>
                {" "}
                <h1>NEW</h1>
                <h2>MODEL</h2>
                <h2>CYCLE</h2>
              </div>
              <div>
                <a href="http://localhost:3000/">
                  {" "}
                  <div>
                    <button class="button">Shop Now</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : null
      )}
    </React.Fragment>
  );
}

export default App;
