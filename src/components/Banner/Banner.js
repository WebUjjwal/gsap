"use client";

import { useGSAP } from "@gsap/react";
import "./style.css";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner = () => {
  const BannerRef = useRef();
  const img = useRef();
  const img_con = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".img_con", {
      height: "100vh",
      width: "100vw",
      scrollTrigger: {
        trigger: ".banner_main",
        pin: ".banner_main",
        start: "top top",
        scrub: 1,
        end: "+=600",
      },
    });
  });

  return (
    <>
      <div ref={BannerRef} className="banner_main">
        <div ref={img_con} className="img_con">
          <img ref={img} src="/banner.jpg" alt="" />
        </div>
        <div className="container">
          <div className="banner_inner_item">
            <div className="content">
              <h2>
                Design your life and <br />
                dreams
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="ggg"></div>
    </>
  );
};

export default Banner;
