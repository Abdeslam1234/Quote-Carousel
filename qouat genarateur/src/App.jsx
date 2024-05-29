import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const previous = () => sliderRef.current.slickPrev();
  const next = () => sliderRef.current.slickNext();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(240, 250, 249)",
        marginBottom: "50px",
        marginTop: "50px",
        height: "680px",
      }}
    >
      <div
        style={{
          paddingLeft: "360px",
          paddingRight: "360px",
          paddingTop: "80px",
        }}
      >
        <div>
          <svg
            width="62"
            height="61"
            viewBox="0 0 62 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "70px", width: "70px" }}
          >
            <path
              d="M61.8008 16.4971C61.8008 32.8545 53.5407 47.4622 37.0205 60.3203C37.0205 53.5658 36.9798 49.7816 36.8984 48.9678C36.5729 45.7126 35.4336 43.4339 33.4805 42.1318C34.5384 41.6436 36.2067 40.5856 38.4854 38.958C42.7171 34.8076 44.833 30.9421 44.833 27.3613C38.1598 25.571 34.8232 21.0137 34.8232 13.6895C34.8232 9.94596 36.0846 6.77214 38.6074 4.16797C41.1302 1.48242 44.2633 0.139648 48.0068 0.139648C52.4014 0.139648 55.86 1.80794 58.3828 5.14453C60.6615 8.1556 61.8008 11.9398 61.8008 16.4971ZM28.8418 16.4971C28.8418 32.8545 20.5817 47.4622 4.06152 60.3203C4.06152 53.5658 4.02083 49.7816 3.93945 48.9678C3.61393 45.7126 2.47461 43.4339 0.521484 42.1318C1.57943 41.6436 3.24772 40.5856 5.52637 38.958C9.75814 34.8076 11.874 30.9421 11.874 27.3613C5.20085 25.571 1.86426 21.0137 1.86426 13.6895C1.86426 9.94596 3.12565 6.77214 5.64844 4.16797C8.17122 1.48242 11.3044 0.139648 15.0479 0.139648C19.4424 0.139648 22.901 1.80794 25.4238 5.14453C27.7025 8.1556 28.8418 11.9398 28.8418 16.4971Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {quotes.map((quote, index) => {
            const author = quote.author
              ? quote.author.split(" ").slice(0, 2).join(" ")
              : "Unknown";
            return (
              <div key={index} style={{ fontSize: "40px" }}>
                <p>
                  <span style={{ color: "black", fontSize: "40px" }}>
                    {quote.text}
                  </span>
                  <br />
                  <br /> {author}
                </p>
              </div>
            );
          })}
        </Slider>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "35px" }}>
            <button
              style={{
                border: "1px solid black",
                borderRadius: "50px",
                height: "80px",
                width: "80px",
                fontSize: "30px",
                backgroundColor: "rgb(240, 250, 249)",
              }}
              onClick={previous}
            >
              {"<"}
            </button>
            <button
              style={{
                border: "1px solid black",
                borderRadius: "50px",
                height: "80px",
                width: "80px",
                fontSize: "30px",
                backgroundColor: "rgb(240, 250, 249)",
              }}
              onClick={next}
            >
              {">"}
            </button>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <p style={{ fontSize: "25px" }}>Share At:</p>
            <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cp"
              style={{
                height: "60px",
                width: "60px",
                position: "relative",
                top: "5px",
              }}
            >
              <title>Post this quote on Twitter!</title>
              <path
                d="M0 22.5532C0 34.7289 9.84974 44.5992 22 44.5992C34.1503 44.5992 44 34.7289 44 22.5532C44 10.3776 34.1503 0.507309 22 0.507309C9.84974 0.507309 0 10.3776 0 22.5532Z"
                fill="#1DA1F2"
              ></path>
              <path
                d="M33 15.6639C32.175 16.0772 31.35 16.215 30.3875 16.3528C31.35 15.8017 32.0375 14.9749 32.3125 13.8727C31.4875 14.4238 30.525 14.6994 29.425 14.9749C28.6 14.1482 27.3625 13.5971 26.125 13.5971C23.2375 13.5971 21.0375 16.3528 21.725 19.1086C18.0125 18.9708 14.7125 17.1795 12.375 14.4238C11.1375 16.4906 11.825 19.1086 13.75 20.4864C13.0625 20.4864 12.375 20.2109 11.6875 19.9353C11.6875 22.0021 13.2 23.9311 15.2625 24.4823C14.575 24.62 13.8875 24.7578 13.2 24.62C13.75 26.4113 15.4 27.7891 17.4625 27.7891C15.8125 29.0292 13.3375 29.7182 11 29.4426C13.0625 30.6827 15.4 31.234 17.4625 31.234C26.125 31.234 30.3875 24.8967 30.75 18.9708C31.875 18.145 32.9 17.1795 33.8125 16.0772L33 15.6639Z"
                fill="white"
              ></path>
            </svg>
            <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cp"
              style={{
                height: "60px",
                width: "60px",
                position: "relative",
                top: "5px",
              }}
            >
              <title>Post this quote on Facebook!</title>
              <path
                d="M0 22.5532C0 34.7289 9.84974 44.5992 22 44.5992C34.1503 44.5992 44 34.7289 44 22.5532C44 10.3776 34.1503 0.507309 22 0.507309C9.84974 0.507309 0 10.3776 0 22.5532Z"
                fill="#1877F2"
              ></path>
              <path
                d="M22.325 10.6684C19.5531 10.6684 17.3125 12.9765 17.3125 15.7289V18.6886H14.25V22.9243H17.3125V33.2307H22.5188V22.9243H26.3063L27.1563 18.6886H22.5188V16.1243C22.5188 15.482 23.0219 14.9765 23.65 14.9765H27.5V10.6684H22.325Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
