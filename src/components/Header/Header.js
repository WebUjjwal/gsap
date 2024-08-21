"use client";

import "./style.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const header_main = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MenuList = [
    {
      id: 1,
      path: "/",
      label: "Home",
    },
    {
      id: 2,
      path: "/about",
      label: "About",
    },
    {
      id: 3,
      path: "/service",
      label: "Service",
    },
    {
      id: 4,
      path: "/contact",
      label: "Contact",
    },
  ];

  const tl = useRef();

  useGSAP(() => {
    gsap.set(".header_main", { y: 0 }),
      ((tl.current = gsap
        .timeline({ paused: true })
        .to(".menu_overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
          ease: "power4.inOut",
        })
        .to(".header_main", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        })),
      { scope: header_main });
  });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  });

  return (
    <>
      <div ref={header_main} className="header_main">
        <div className="container">
          <div className="header_items">
            <div className="logo">
              <Link href="/">Logo</Link>
            </div>
            <div onClick={toggleMenu}>
              <p>Menu</p>
            </div>
          </div>

          <div className="menu_overlay">
            <div className="left">
              <div className="logo">
                <Link href="/">Logo</Link>
              </div>
              <div className="closeBtn" onClick={toggleMenu}>
                <p>close</p>
              </div>
            </div>
            <div className="right">
              <div className="menu_overlay_items">
                <ul className="menuLinkItems">
                  {MenuList.map(({ id, label, path }) => {
                    return (
                      <>
                        <li key={id}>
                          <Link href={path}>{label}</Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="button">
                <Link href="/">Learn More</Link>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
