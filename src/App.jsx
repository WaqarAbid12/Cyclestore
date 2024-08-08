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
        <div className="menu-left">
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
            <button className="button"> Shop Now</button>
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNlMmFkeGt2MXUwODIzMXpleHZ1Mm1lZXpoZHhueDdmMXRpdjF4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycMyB9MMSohHR6kOFe/giphy.webp"
          className="logo"
        ></img>
      </div>
      {/* {arrayObject.map((item, i) =>
        
      )} */}

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
                {" "}
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters
                  </p>
                  <img
                    className="kibutton"
                    src="https://t4.ftcdn.net/jpg/00/29/58/27/360_F_29582718_3DMKNW6frKn5DwZJXldWrFq9RlmB1FOv.jpg"
                  ></img>
                </div>
              </div>
              <div className="box">
                <h2 className="boxheading">New Model Cycle </h2>
                <p className="boxparagraph">
                  We Provided a latest model and best quality cycle<br></br> in
                  the world . All models of cycles are available in <br></br>
                  very cheap prices. We have variety of sizes and variety{" "}
                  <br></br>styles.
                </p>
              </div>
<div>
  <img className="slide" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjI3Mjk0bzVmenU2OXFndXE5cmg2aWEyY2c3NTl0MDI4OGV5YjA4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bylHGDdQJRnjj7oAAh/200.webp" alt="" />
</div>
              <div className="box2">
                <h2 className="boxheading2">New Model Cycle </h2>
                <p className="boxparagraph2">
                  We Provided a latest model and best quality cycle<br></br> in
                  the world . All models of cycles are available in <br></br>
                  very cheap prices. We have variety of sizes and variety{" "}
                  <br></br>styles.
                </p>
              </div>

              <div className="cycle2">
                <img
                  src="https://themewagon.github.io/Cycle/images/img-1.png"
                  className="Cycle2"
                ></img>
                <h1 className="ci"> CYCLE</h1>
                <p className="c1">
                  {" "}
                  it has a more-or-less normal distribution of letters
                </p>
                <img
                  className="cibutton"
                  src="https://t4.ftcdn.net/jpg/00/29/58/27/360_F_29582718_3DMKNW6frKn5DwZJXldWrFq9RlmB1FOv.jpg"
                ></img>
              </div>

              <>
                <a href="https://www.propertywallet.pk/pricing-agency">
                  {" "}
                  {/* <button className="cardbt"> Contact US</button>{" "} */}
                </a>
              </>
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
                  <button className="but1">
                    <img
                      className="img1"
                      src="https://www.nicepng.com/png/detail/443-4433749_buy-audio-download-now-green-buy-now-button.png"
                    ></img>
                  </button>
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
