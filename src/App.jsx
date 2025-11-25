import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/img/logo.svg'
import building from './assets/img/building.svg'
import aboutImg from "./assets/img/about.svg";  
import logo1 from "./assets/img/client/logo1.svg";
import logo2 from "./assets/img/client/logo2.svg";
import logo3 from "./assets/img/client/logo3.svg";
import logo4 from "./assets/img/client/logo4.svg";
import logo5 from "./assets/img/client/logo5.svg";
import logo6 from "./assets/img/client/logo6.svg";
import logo7 from "./assets/img/client/logo7.svg";
import logo8 from "./assets/img/client/logo8.svg";
import productImg from "./assets/img/product.svg";
import pict1 from "./assets/img/gallery/pict1.svg";
import pict2 from "./assets/img/gallery/pict2.svg";
import pict3 from "./assets/img/gallery/pict3.svg";

import ScrollVelocity from './blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import LogoLoop from './blocks/Animations/LogoLoop/LogoLoop';
import LightRays from './blocks/Backgrounds/LightRays/LightRays';
import gsap from "gsap";
import SplitText from "gsap/SplitText"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from './blocks/TextAnimations/CountUp/CountUp'

const techLogos = [
  { src: logo1, title: "#", href: "#" },
  { src: logo2, title: "#", href: "#" },
  { src: logo3, title: "#", href: "#" },
  { src: logo4, title: "#", href: "#" },
  { src: logo5, title: "#", href: "#" },
  { src: logo6, title: "#", href: "#" },
  { src: logo7, title: "#", href: "#" },
  { src: logo8, title: "#", href: "#" }
];

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // SPLIT TEXT
    const split = new SplitText(".split", {
      type: "words",
    });

    gsap.from(split.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: {
        each: 0.5
      },
    });

    // TIMELINE SCROLLTRIGGER HERO PERSON
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".s2",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(".person", {
      duration: 1,
      y: 0,
      ease: "power2.out",
    });

    // About Us
    const au = gsap.timeline({
      scrollTrigger:{
        trigger: ".au",
        start: "top center",
        end: "bottom center",
        // markers: true,
        // scrub: 1,
        toggleActions: "play reverse play reverse"
      }
    });

    au.to(".au-img", {
      duration: 1,
      x: 0,
      ease: "power2.out",
    })

    const AuSplit = new SplitText(".split-au",{
      type: "words"
    });

    const AuDescSplit = new SplitText(".split-au-desc",{
      type: "lines"
    });

    gsap.from(AuDescSplit.lines, {
      scrollTrigger: {
        trigger: ".au",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
        // markers: true,
        // scrub: 1,
      },
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: {
        each: 0.5
      },
    })

    gsap.from(AuSplit.words, {
      scrollTrigger: {
        trigger: ".au",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
        // markers: true,
        // scrub: 1,
      },
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: {
        each: 0.5
      },
    })

    // gsap.from(".au-social-icons > div", {
    //   x: -80,                // mulai dari kanan
    //   opacity: 0,           // fade in
    //   duration: 1,
    //   stagger: 0.15,        // muncul satu per satu
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: ".au",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    // product
    // const productDiv = gsap.timeline({
    //   scrollTrigger:{
    //     trigger: ".product-div",
    //     start: "top center",
    //     end: "bottom center",
    //     markers: true,
    //     // scrub: 1,
    //     toggleActions: "play reverse play reverse"
    //   }
    // });

    // productDiv.to(".product-grid", {
    //   duration: 1,
    //   x: 0,
    //   rotateY: 90,
    //   ease: "power2.out",
    // })

  }, []);

  return (
    <>
      {/* HERO MAIN */}
      <div className="hero-main">

        {/* NAVBAR */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <div
            className="flex flex-nowrap flex-row items-center justify-between navbar-main"
            style={{ padding: "1.5rem 4rem" }}
          >
            <img src={logo} alt="" />

            <ul className="flex flex-row items-center justify-center gap-8 ml-8 text-oswald text-white">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>PRODUCT</li>
              <li>PROJECT</li>
              <li>GALLERY</li>
              <li>FAQ</li>
              <li>CONTACT</li>
            </ul>

            <button
              className="text-oswald"
              style={{
                backgroundColor: "#FE5208",
                padding: "12px 30px",
                borderRadius: "100px",
                color: "white",
              }}
            >
              <i className="fa-brands fa-whatsapp"></i> HUBUNGI KAMI
            </button>
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="flex flex-col w-full h-full justify-center items-center">
          <span
            className="split"
            style={{
              fontSize: "160px",
              fontFamily: "Oswald",
              fontWeight: 500,
              color: "white",
            }}
          >
            PROFESSIONAL
          </span>

          <span
            className="s2 split"
            style={{
              fontSize: "125px",
              fontFamily: "Oswald",
              fontWeight: 500,
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            ARCHITECTURE SOLUTIONS
          </span>

          {/* DESCRIPTION + TEAM */}
          <div className="flex flex-row items-center justify-between gap-4 mt-16 px-8">
            <div className="flex-1">
              <span
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  color: "#BDBDBD",
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                Solusi kebutuhan Anda akan utilitas cahaya dan udara dalam aplikasi
                produk GRC Krawangan, GRC Relief, GRC Kubah, GRC Lisplang, Beton
                Pracetak Dekorati, Dll.
              </span>
            </div>

            <div className="flex-1"></div>

            {/* CLIENTS + TEAM */}
            <div className="flex-1 flex flex-row items-center justify-center gap-4 text-white">
              <div className="flex flex-col border-r border-white pr-4">
                <span
                  className="text-oswald text-white"
                  style={{ fontSize: "64px", fontWeight: 500 }}
                >
                  <CountUp
                    from={0}
                    to={200}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  /><span style={{ color: "#FE5208" }}>+</span>
                </span>
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    color: "#BDBDBD",
                    fontSize: "25px",
                    lineHeight: "24px",
                  }}
                >
                  CLIENTS
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "22px",
                    lineHeight: "24px",
                  }}
                >
                  JOIN OUR TEAM:
                </span>

                <div className="flex -space-x-2 overflow-hidden">
                  {[
                    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="inline-block size-10 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BUTTONS */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="flex flex-row items-center justify-center gap-4"
            style={{ position: "absolute", bottom: "100px", width: "100%" }}
          >
            <button
              style={{
                backgroundColor: "#4A4A4A",
                padding: "12px 30px",
                borderRadius: "100px",
                color: "white",
              }}
            >
              Read More
            </button>

            <div
              className="rounded-full w-12 h-12 flex items-center justify-center"
              style={{ backgroundColor: "#FE5208" }}
            >
              <i className="fa-solid fa-play" style={{ color: "white" }}></i>
            </div>
          </div>

          <img
            src={building}
            alt=""
            className="person"
            style={{ maxWidth: "100%", transform: "translateY(800px)" }}
          />
        </div>

        {/* DOUBLE MARQUEE */}
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: 0,
            width: "100%",
            height: "200px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            zIndex: 999,
          }}
        >
          {/* MARQUEE ONE */}
          <div
            className="py-3 marquee-one flex items-center marquee"
            style={{ overflow: "hidden" }}
          >
            <div
              className="text-oswald"
              style={{ fontSize: "70px", fontWeight: 500 }}
            >
              {/* PREMIUM GRC MATERIALS * PREMIUM GRC MATERIALS * PREMIUM GRC MATERIALS * */}
              <ScrollVelocity
                direction={"right"}
                texts={['PREMIUM GRC MATERIALS *']} 
                velocity={100} 
                className="custom-scroll-text"
              />
            </div>
          </div>

          {/* MARQUEE TWO */}
          <div className="py-3 marquee-two text-white flex items-center">
            <div
              className="text-oswald"
              style={{ fontSize: "70px", fontWeight: 500 }}
            >
              {/* STRUCTURAL STRENGTH */}
              <ScrollVelocity
                direction={"left"}
                texts={['STRUCTURAL STRENGTH *']} 
                velocity={100} 
                className="custom-scroll-text"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT US */}
      <div
        className="flex flex-row items-center justify-between gap-20 au"
        style={{ marginTop: "16rem", padding: "0 4rem", marginBottom: "8rem" }}
      >
        <div>
          <img
            src={aboutImg}
            alt=""
            className="au-img"
            style={{ transform: "translateX(-900px)" }}
          />
        </div>

        <div className="flex-1 flex flex-col gap-10">
          <span
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "30px",
              color: "#161616",
            }}
          >
            <span style={{ color: "#FE5208" }}>*</span>ABOUT US
          </span>

          <span
            className="split-au"
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "60px",
              lineHeight: "70px",
              color: "#161616",
            }}
          >
            PRODUSEN GRC PANEL TERBAIK DI INDONESIA
          </span>

          <span
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "24px",
              color: "#161616",
            }}
            className="split-au-desc"
          >
            GRC Artikon adalah lini bisnis PT. PJ ARTIKON yang fokus sebagai
            produsen dan supplier produk GRC/GFRC. Kami menangani seluruh proses
            mulai dari desain, produksi, pemasangan, hingga finishing. Kami
            memiliki workshop seluas ±3000 m² di Mojoagung, Jombang – Jawa Timur,
            yang memastikan proses produksi lebih optimal dan kualitas produk
            tetap terjaga.
            <br />
            <br />
            Dengan konsep “customized products”, kami mewujudkan kebutuhan desain
            Anda dengan cita rasa estetika tinggi. Sebagai salah satu produsen
            panel GRC terbaik di Indonesia, kami berkomitmen memberikan kualitas
            dan pelayanan terbaik tanpa batas.
          </span>

          <hr className="my-16 border-t border-[#161616] w-full" />

          <div className="flex flex-row justify-between">
            <button
              style={{
                backgroundColor: "#4A4A4A",
                padding: "12px 30px",
                borderRadius: "100px",
                color: "white",
              }}
            >
              Read More
            </button>

            <div className="flex flex-row gap-4 au-social-icons">
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: "#FE5208" }}
              >
                <i className="fa-brands fa-instagram" style={{ color: "white" }}></i>
              </div>

              <div
                className="rounded-full w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: "#FE5208" }}
              >
                <i className="fa-brands fa-twitter" style={{ color: "white" }}></i>
              </div>

              <div
                className="rounded-full w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: "#FE5208" }}
              >
                <i className="fa-brands fa-facebook-f" style={{ color: "white" }}></i>
              </div>

              <div
                className="rounded-full w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: "#FE5208" }}
              >
                <i className="fa-brands fa-youtube" style={{ color: "white" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR CLIENT */}
      <div
        style={{
          backgroundColor: "#000000",
          height: "13.125rem",
          width: "100%",
          padding: "3.5rem 4.125rem",
        }}
      >
        <div className="flex flex-row gap-4">
          <div
            className="basis-2/12 border-r border-white flex items-center justify-center"
            style={{ paddingRight: "1.5rem" }}
          >
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "30px",
                color: "#FFFFFF",
              }}
            >
              OUR MOST RECENT CLIENTS
            </span>
          </div>

          <div
            className="basis-10/12 flex flex-row items-center justify-between h-full gap-4"
            style={{ whiteSpace: "nowrap", overflow: "hidden" }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={79}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>

      {/* PRODUCT */}
      <div
        style={{
          backgroundColor: "#161616",
          padding: "3.5rem 4.125rem",
        }}
        className='product-div'
      >
        {/* Header */}
        <div className="flex flex-row gap-4 mb-8">
          <div className="basis-4/12">
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "30px",
                color: "#FFFFFF",
              }}
            >
              <span style={{ color: "#FE5208" }}>*</span>PRODUCT
            </span>
          </div>

          <div className="basis-4/12">
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "60px",
                color: "#FFFFFF",
              }}
            >
              GRC ARTIKON PRODUCTS
            </span>
          </div>

          <div className="basis-4/12 flex justify-end items-start">
            <button
              style={{
                backgroundColor: "#4A4A4A",
                padding: "12px 30px",
                borderRadius: "100px",
                color: "white",
              }}
            >
              Read More
            </button>
          </div>
        </div>

        {/* GRID PRODUCTS */}
        <div className="grid grid-cols-12 gap-4">

          {/* ITEM 1 - Black */}
          <div className="col-span-4 bg-[#1C1C1C] px-4 py-8 product-grid">
            <div className="flex flex-row justify-between gap-4">
              <span className="text-oswald text-white" style={{ fontSize: "30px", fontWeight: 500 }}>
                GRC <br /> KRAWANGAN
              </span>

              <div className="rounded-full bg-[#000000] w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-arrow-down" style={{ color: "#FE5208", rotate: "-45deg", fontSize: "xx-large" }}></i>
              </div>
            </div>

            <hr className="my-4 border-t border-[#4A4A4A] w-full" />

            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                color: "#BDBDBD",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              GRC krawangan, atau perforated GRC screen, adalah panel GRC (glassfiber reinforced cement)
              dengan desain berlubang yang berfungsi sebagai ventilasi udara dan cahaya.
            </span>

            <img src={productImg} className="mt-12 w-full" alt="" />
          </div>

          {/* ITEM 2 - Orange */}
          <div className="col-span-4 bg-[#FE5208] px-4 py-8 product-grid">
            <img src={productImg} className="mb-12 w-full" alt="" />

            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                color: "#FFFFFF",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              Fungsi GRC relief adalah untuk menghias. Motif GRC relief sangat beragam, meliputi batik,
              kaligrafi, ornamen geometris dan non-geometris, candi, romawi, alfabet, dan klasik.
            </span>

            <hr className="my-4 border-t border-[#4A4A4A] w-full" />

            <div className="flex flex-row justify-between gap-4">
              <span className="text-oswald text-white" style={{ fontSize: "30px", fontWeight: 500 }}>
                GRC <br /> RELIEF
              </span>
              <div className="rounded-full bg-[#000000] w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-arrow-down" style={{ color: "#FE5208", rotate: "-45deg", fontSize: "xx-large" }}></i>
              </div>
            </div>
          </div>

          {/* ITEM 3 - Black */}
          <div className="col-span-4 bg-[#1C1C1C] px-4 py-8 product-grid">
            <div className="flex flex-row justify-between gap-4">
              <span className="text-oswald text-white" style={{ fontSize: "30px", fontWeight: 500 }}>
                GRC <br /> KRAWANGAN
              </span>
              <div className="rounded-full bg-[#000000] w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-arrow-down" style={{ color: "#FE5208", rotate: "-45deg", fontSize: "xx-large" }}></i>
              </div>
            </div>

            <hr className="my-4 border-t border-[#4A4A4A] w-full" />

            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                color: "#BDBDBD",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              GRC krawangan, atau perforated GRC screen, adalah panel GRC dengan desain berlubang untuk ventilasi.
            </span>

            <img src={productImg} className="mt-12 w-full" alt="" />
          </div>

          {/* ITEM 4 - Orange */}
          <div className="col-span-4 bg-[#FE5208] px-4 py-8 product-grid">
            <img src={productImg} className="mb-12 w-full" alt="" />

            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                color: "#FFFFFF",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              Fungsi GRC relief adalah untuk menghias. Motif sangat beragam: batik, kaligrafi, ornamen,
              geometris hingga klasik.
            </span>

            <hr className="my-4 border-t border-[#4A4A4A] w-full" />

            <div className="flex flex-row justify-between gap-4">
              <span className="text-oswald text-white" style={{ fontSize: "30px", fontWeight: 500 }}>
                GRC <br /> RELIEF
              </span>
              <div className="rounded-full bg-[#000000] w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-arrow-down" style={{ color: "#FE5208", rotate: "-45deg", fontSize: "xx-large" }}></i>
              </div>
            </div>
          </div>

          {/* ITEM 5 - Black */}
          <div className="col-span-4 bg-[#1C1C1C] px-4 py-8 product-grid">
            <div className="flex flex-row justify-between gap-4">
              <span className="text-oswald text-white" style={{ fontSize: "30px", fontWeight: 500 }}>
                GRC <br /> KRAWANGAN
              </span>
              <div className="rounded-full bg-[#000000] w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-arrow-down" style={{ color: "#FE5208", rotate: "-45deg", fontSize: "xx-large" }}></i>
              </div>
            </div>

            <hr className="my-4 border-t border-[#4A4A4A] w-full" />

            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                color: "#BDBDBD",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              GRC krawangan digunakan untuk ventilasi udara dan cahaya.
            </span>

            <img src={productImg} className="mt-12 w-full" alt="" />
          </div>

          {/* ITEM 6 - Orange */}
          <div className="col-span-4 bg-[#FE5208] px-4 py-8 product-grid">
            <img src={productImg} className="mb-12 w-full" alt="" />

            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                color: "#FFFFFF",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              GRC relief digunakan untuk dekorasi dengan motif artistik dan estetis.
            </span>

            <hr className="my-4 border-t border-[#4A4A4A] w-full" />

            <div className="flex flex-row justify-between gap-4">
              <span className="text-oswald text-white" style={{ fontSize: "30px", fontWeight: 500 }}>
                GRC <br /> RELIEF
              </span>
              <div className="rounded-full bg-[#000000] w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-arrow-down" style={{ color: "#FE5208", rotate: "-45deg", fontSize: "xx-large" }}></i>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ACHIEVEMENT */}
      <div className="flex flex-row items-center gap-4 achivement-div">
        {/* LEFT TEXT */}
        <div className="basis-5/12 flex flex-col gap-4">
          <span
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "30px",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#FE5208" }}>*</span>ACHIEVEMENT
          </span>

          <span
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "60px",
              lineHeight: "70px",
              color: "#FFFFFF",
            }}
          >
            YOUR DREAM, OUR ACHIEVEMENT.
          </span>

          <span
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "24px",
              color: "#BDBDBD",
            }}
          >
            Kami terus berinovasi untuk memberikan solusi GRC yang lebih kuat, lebih
            indah, dan lebih efisien, sehingga setiap proyek dapat mencapai hasil
            terbaik.
          </span>
        </div>

        {/* RIGHT NUMBERS */}
        <div className="basis-7/12 flex flex-row gap-4 justify-end items-start">
          {/* Box 1 */}
          <div className="flex flex-col items-center">
            <span
              className="text-oswald text-white"
              style={{ fontSize: "64px", fontWeight: 500 }}
            >
              <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /><span style={{ color: "#FE5208" }}>+</span>
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#BDBDBD",
              }}
            >
              Complete Project
            </span>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center">
            <span
              className="text-oswald text-white"
              style={{ fontSize: "64px", fontWeight: 500 }}
            >
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /><span style={{ color: "#FE5208" }}>+</span>
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#BDBDBD",
              }}
            >
              Trusted by Clients
            </span>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center">
            <span
              className="text-oswald text-white"
              style={{ fontSize: "64px", fontWeight: 500 }}
            >
              <CountUp
                from={0}
                to={15}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /><span style={{ color: "#FE5208" }}>+</span>
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "24px",
                color: "#BDBDBD",
              }}
            >
              Years of Experience
            </span>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <div style={{position: "absolute", top: "0px", left: "0px", width: "100%", zIndex: -1, height: "1000px",}}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#FE5208"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
        </div>
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "0px",
            width: "100%",
            zIndex: 999,
            overflow: "hidden",
            height: "200px",
            whiteSpace: "nowrap",
          }}
        >
          {/* MARQUEE 1 */}
          <div className="py-3 marquee-one flex items-center">
            <div className="stb_line_single" id="track3">
              <div
                className="stb-item text-oswald"
                style={{ fontSize: "70px", fontWeight: 500 }}
              >
                <ScrollVelocity
                  direction={"right"}
                  texts={['DURABLE * AESTHETIC * PROFESSIONAL *']} 
                  velocity={100} 
                  className="custom-scroll-text"
                />
              </div>
            </div>
          </div>

          {/* MARQUEE 2 */}
          <div className="py-3 marquee-two text-white flex items-center">
            <div className="stb_line_single" id="track4">
              <div
                className="stb-item text-oswald"
                style={{ fontSize: "70px", fontWeight: 500 }}
              >
                <ScrollVelocity
                  direction={"left"}
                  texts={['GRC MADE FOR EXCELLENCE *']} 
                  velocity={100} 
                  className="custom-scroll-text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="flex flex-col items-center gap-4 my-8">
        <div
          className="mx-auto flex flex-col items-center gap-4"
          style={{ width: "50%" }}
        >
          <span
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "30px",
              color: "#161616",
            }}
          >
            <span style={{ color: "#FE5208" }}>*</span>
            WHY CHOOSE ARTIKON?
          </span>

          <span
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "60px",
              lineHeight: "70px",
              color: "#161616",
              textAlign: "center",
            }}
          >
            “THE STRENGTH BEHIND YOUR ARCHITECTURE.”
          </span>

          <span
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "26px",
              color: "#161616",
              textAlign: "center",
            }}
          >
            Setiap proyek membutuhkan mitra yang dapat diandalkan. Artikon memastikan
            setiap produk GRC tampil rapi, kuat, dan yang terbaik.
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4 px-8 py-8">
          {/* EXPERIENCE */}
          <div className="col-span-4">
            <div className="flex flex.row gap-4">
              <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                <i
                  className="fa-solid fa-arrow-down"
                  style={{
                    color: "#FFFFFF",
                    rotate: "-45deg",
                    fontSize: "xx-large",
                  }}
                ></i>
              </div>

              <div className="flex flex-col gap-2">
                <span
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 500,
                    fontSize: "30px",
                    color: "#161616",
                  }}
                >
                  EXPERIENCE
                </span>

                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#161616",
                  }}
                >
                  Kami berpengalaman dalam menyediakan material berkualitas untuk
                  berbagai proyek di seluruh Indonesia.
                </span>
              </div>
            </div>
          </div>

          {/* INNOVATION */}
          <div className="col-span-4">
            <div className="flex flex.row gap-4">
              <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                <i
                  className="fa-solid fa-arrow-down"
                  style={{
                    color: "#FFFFFF",
                    rotate: "-45deg",
                    fontSize: "xx-large",
                  }}
                ></i>
              </div>

              <div className="flex flex-col gap-2">
                <span
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 500,
                    fontSize: "30px",
                    color: "#161616",
                  }}
                >
                  INNOVATION
                </span>

                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#161616",
                  }}
                >
                  Kami terus berkembang dan berinovasi untuk meningkatkan kualitas
                  produk demi memberikan kepuasan bagi para pelanggan.
                </span>
              </div>
            </div>
          </div>

          {/* QUALITY */}
          <div className="col-span-4">
            <div className="flex flex.row gap-4">
              <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                <i
                  className="fa-solid fa-arrow-down"
                  style={{
                    color: "#FFFFFF",
                    rotate: "-45deg",
                    fontSize: "xx-large",
                  }}
                ></i>
              </div>

              <div className="flex flex-col gap-2">
                <span
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 500,
                    fontSize: "30px",
                    color: "#161616",
                  }}
                >
                  QUALITY
                </span>

                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#161616",
                  }}
                >
                  Produk GRC yang kami hasilkan merupakan perpaduan estetika,
                  fleksibilitas, dan kekuatan
                </span>
              </div>
            </div>
          </div>

          {/* PLANNING */}
          <div className="col-span-4">
            <div className="flex flex.row gap-4">
              <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                <i
                  className="fa-solid fa-arrow-down"
                  style={{
                    color: "#FFFFFF",
                    rotate: "-45deg",
                    fontSize: "xx-large",
                  }}
                ></i>
              </div>

              <div className="flex flex-col gap-2">
                <span
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 500,
                    fontSize: "30px",
                    color: "#161616",
                  }}
                >
                  PLANNING
                </span>

                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#161616",
                  }}
                >
                  Bikin rencana Anda, konsultasikan pada Kami, kemudian Kami tawarkan
                  solusi yang Anda butuhkan
                </span>
              </div>
            </div>
          </div>

          {/* ANALYSIS */}
          <div className="col-span-4">
            <div className="flex flex.row gap-4">
              <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                <i
                  className="fa-solid fa-arrow-down"
                  style={{
                    color: "#FFFFFF",
                    rotate: "-45deg",
                    fontSize: "xx-large",
                  }}
                ></i>
              </div>

              <div className="flex flex-col gap-2">
                <span
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 500,
                    fontSize: "30px",
                    color: "#161616",
                  }}
                >
                  ANALYSIS
                </span>

                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#161616",
                  }}
                >
                  Standard komposisi material adalah hasil proses riset dan analisa
                  bertahun-tahun, proses menjadikan hasil produk terbaik.
                </span>
              </div>
            </div>
          </div>

          {/* CUSTOM DESIGN */}
          <div className="col-span-4">
            <div className="flex flex.row gap-4">
              <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                <i
                  className="fa-solid fa-arrow-down"
                  style={{
                    color: "#FFFFFF",
                    rotate: "-45deg",
                    fontSize: "xx-large",
                  }}
                ></i>
              </div>

              <div className="flex flex-col gap-2">
                <span
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 500,
                    fontSize: "30px",
                    color: "#161616",
                  }}
                >
                  CUSTOM DESIGN
                </span>

                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#161616",
                  }}
                >
                  Kami tawarkan custom design dalam merealisasikan sepenuhnya
                  keinginan konsumen agar mendapatkan kepuasan maksimal.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div style={{ backgroundColor: "#161616", padding: "3.5rem 0" }}>
        <div 
          className="flex flex-row gap-4" 
          style={{ padding: "3.5rem 4.125rem" }}
        >
          {/* Left Title */}
          <div className="basis-3/12">
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "30px",
                color: "#FFFFFF"
              }}
            >
              <span style={{ color: "#FE5208" }}>*</span>
              GALLERY
            </span>
          </div>

          {/* Big Title */}
          <div className="basis-6/12">
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "60px",
                color: "#FFFFFF"
              }}
            >
              DOKUMENTASI HASIL PENGERJAAN GRC ARTIKON
            </span>
          </div>

          {/* Button */}
          <div className="basis-3/12 flex justify-end items-start">
            <button
              style={{
                backgroundColor: "#4A4A4A",
                padding: "12px 30px",
                borderRadius: "100px",
                color: "white"
              }}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="flex flex-row gap-4">
          <div className="flex flex-col flex-1 gap-2 items-center">
            <img src={pict1} alt="" />
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "30px",
                color: "#FFFFFF"
              }}
            >
              PROYEK RUMAH SURABAYA
            </span>
          </div>

          <div className="flex flex-col flex-1 gap-2 items-center">
            <img src={pict2} alt="" />
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "30px",
                color: "#FFFFFF"
              }}
            >
              PROYEK MASJID DIPONEGORO
            </span>
          </div>

          <div className="flex flex-col flex-1 gap-2 items-center">
            <img src={pict3} alt="" />
            <span
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                fontSize: "30px",
                color: "#FFFFFF"
              }}
            >
              RELIEF MASJID AL IKHLAS
            </span>
          </div>
        </div>

        {/* Indicators */}
        <div
          className="flex flex-row gap-2 items-center justify-center text-[#D5D4D1] pt-4 pb-8"
        >
          <i className="fa-solid fa-circle" style={{ color: "#FE5208" }}></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </div>
      </div>

      {/* FAQS */}
      <div style={{ padding: "3.5rem 4.125rem" }}>
        <div
          className="mx-auto flex flex-col items-center gap-4"
          style={{ width: "50%" }}
        >
          <span
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "30px",
              color: "#161616",
            }}
          >
            <span style={{ color: "#FE5208" }}>*</span>
            OUR FAQS
          </span>

          <span
            style={{
              fontFamily: "Oswald",
              fontWeight: 500,
              fontSize: "60px",
              lineHeight: "70px",
              color: "#161616",
              textAlign: "center",
            }}
          >
            FAQS MADE SIMPLE AND STRAIGHTFORWARD.
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-16">
          {/* LEFT COLUMN */}
          <div className="col-span-6 flex flex-col gap-4">
            
            <details className="overflow-hidden">
              <summary
                className="cursor-pointer px-4 py-2 list-none flex justify-between items-center bg-[#161616] text-white text-oswald"
                style={{ fontSize: "22px", fontWeight: 500 }}
              >
                APAKAH BISA REQUEST DESAIN CUSTOM?
                <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                  <i className="fa-solid fa-chevron-down" style={{ color: "#FFFFFF" }}></i>
                </div>
              </summary>
              <div
                className="p-4 text-[#161616]"
                style={{ fontSize: "20px", fontWeight: 400 }}
              >
                Bisa. Kami melayani pembuatan desain GRC custom sesuai kebutuhan proyek
                Anda, mulai dari desain, produksi, hingga pemasangan.
              </div>
            </details>

            <details className="overflow-hidden">
              <summary
                className="cursor-pointer px-4 py-2 list-none flex justify-between items-center bg-[#161616] text-white text-oswald"
                style={{ fontSize: "22px", fontWeight: 500 }}
              >
                BAGAIMANA PROSES PEMASANGANNYA?
                <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                  <i className="fa-solid fa-chevron-down" style={{ color: "#FFFFFF" }}></i>
                </div>
              </summary>
              <div
                className="p-4 text-[#161616]"
                style={{ fontSize: "20px", fontWeight: 400 }}
              >
                Tim kami dapat menangani seluruh proses pemasangan, atau Anda dapat
                menggunakan kontraktor sendiri. Kami juga menyediakan panduan pemasangan
                jika diperlukan.
              </div>
            </details>

            <details className="overflow-hidden">
              <summary
                className="cursor-pointer px-4 py-2 list-none flex justify-between items-center bg-[#161616] text-white text-oswald"
                style={{ fontSize: "22px", fontWeight: 500 }}
              >
                APAKAH WORKSHOP GRC BERADA DI LOKASI TERTENTU?
                <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                  <i className="fa-solid fa-chevron-down" style={{ color: "#FFFFFF" }}></i>
                </div>
              </summary>
              <div
                className="p-4 text-[#161616]"
                style={{ fontSize: "20px", fontWeight: 400 }}
              >
                Tim kami dapat menangani seluruh proses pemasangan, atau Anda dapat
                menggunakan kontraktor sendiri. Kami juga menyediakan panduan pemasangan
                jika diperlukan.
              </div>
            </details>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-6 flex flex-col gap-4">
            
            <details className="overflow-hidden">
              <summary
                className="cursor-pointer px-4 py-2 list-none flex justify-between items-center bg-[#161616] text-white text-oswald"
                style={{ fontSize: "22px", fontWeight: 500 }}
              >
                BERAPA LAMA WAKTU PRODUKSI?
                <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                  <i className="fa-solid fa-chevron-down" style={{ color: "#FFFFFF" }}></i>
                </div>
              </summary>
              <div
                className="p-4 text-[#161616]"
                style={{ fontSize: "20px", fontWeight: 400 }}
              >
                Tim kami dapat menangani seluruh proses pemasangan, atau Anda dapat
                menggunakan kontraktor sendiri. Kami juga menyediakan panduan pemasangan
                jika diperlukan.
              </div>
            </details>

            <details className="overflow-hidden">
              <summary
                className="cursor-pointer px-4 py-2 list-none flex justify-between items-center bg-[#161616] text-white text-oswald"
                style={{ fontSize: "22px", fontWeight: 500 }}
              >
                BAGAIMANA CARA MEMESAN PRODUK GRC?
                <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                  <i className="fa-solid fa-chevron-down" style={{ color: "#FFFFFF" }}></i>
                </div>
              </summary>
              <div
                className="p-4 text-[#161616]"
                style={{ fontSize: "20px", fontWeight: 400 }}
              >
                Tim kami dapat menangani seluruh proses pemasangan, atau Anda dapat
                menggunakan kontraktor sendiri. Kami juga menyediakan panduan pemasangan
                jika diperlukan.
              </div>
            </details>

            <details className="overflow-hidden">
              <summary
                className="cursor-pointer px-4 py-2 list-none flex justify-between items-center bg-[#161616] text-white text-oswald"
                style={{ fontSize: "22px", fontWeight: 500 }}
              >
                APAKAH KEUNGGULAN UTAMA PRODUK GRC ARTIKON?
                <div className="rounded-full bg-[#FE5208] w-12 h-12 flex items-center justify-center px-4">
                  <i className="fa-solid fa-chevron-down" style={{ color: "#FFFFFF" }}></i>
                </div>
              </summary>
              <div
                className="p-4 text-[#161616]"
                style={{ fontSize: "20px", fontWeight: 400 }}
              >
                Tim kami dapat menangani seluruh proses pemasangan, atau Anda dapat
                menggunakan kontraktor sendiri. Kami juga menyediakan panduan pemasangan
                jika diperlukan.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="bg-[#161616] text-white px-14 pt-16"
      >
        <div className="grid grid-cols-12 gap-8 mt-8">

          {/* Kolom 1 */}
          <div className="col-span-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <img src={logo} className="w-1/2" />
              <span className="text-footer">
                GRC Articon Indonesia adalah produsen dan supplier GRC dekoratif
                untuk berbagai kebutuhan bangunan arsitektural.
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-oswald text-[22px] leading-[22px] font-medium">
                SUBSCRIBE
              </span>
              <span className="text-footer">
                Masukkan email untuk mendapat informasi mengenai GRC Artikon Indonesia.
              </span>
              <input
                type="text"
                placeholder="Masukkan email"
                className="w-full p-2 rounded-full bg-white border border-white placeholder-gray-400 text-black"
              />
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="col-span-4 flex flex-col gap-4">
            <span className="text-oswald text-[22px] leading-[22px] font-medium">
              KONTAK
            </span>

            <div className="flex gap-2">
              <span className="text-footer">Telepon :</span>
              <div className="flex flex-col flex-1 text-footer">
                <span>0321-490505</span>
                <span>0321-490505</span>
                <span>(Online pada jam kerja)</span>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="text-footer">Email :</span>
              <span className="flex-1 text-footer">
                marketing@grcartikon.co.id
              </span>
            </div>

            <div className="flex gap-2">
              <span className="text-footer">Workshop :</span>
              <span className="flex-1 text-footer">
                Jl. Mojolegi Gg.Tegelan 99, Dukuh Mojo, Mojoagung, Jombang 61482, Jawa Timur.
              </span>
            </div>

            <div className="flex gap-2">
              <span className="text-footer">Office :</span>
              <span className="flex-1 text-footer">
                Jl. Mojolegi Gg.Tegelan 99, Dukuh Mojo, Mojoagung, Jombang 61482, Jawa Timur.
              </span>
            </div>
          </div>

          {/* Kolom 3 */}
          <div className="col-span-2 flex flex-col gap-4">
            <span className="text-oswald text-[22px] leading-[22px] font-medium">
              PAGES
            </span>

            <div className="flex flex-col">
              {["Home", "About Us", "Product", "Project", "Gallery", "FAQ", "Contact"].map(
                (item) => (
                  <div className="flex items-center gap-2" key={item}>
                    <i className="fa-solid fa-circle text-[5px]" />
                    <span className="text-footer flex-1">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Kolom 4 */}
          <div className="col-span-2 flex flex-col gap-4">
            <span className="text-oswald text-[22px] leading-[22px] font-medium">
              SOCIAL
            </span>

            <div className="flex flex-col">
              {["Instagram", "Facebook", "Youtube", "Tiktok"].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <i className="fa-solid fa-circle text-[5px]" />
                  <span className="text-footer flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Garis pemisah */}
        <hr className="my-8 border-t border-[#3F4A59] w-full" />

        {/* Footer bawah */}
        <div className="flex justify-between items-center pb-8">
          <span className="font-roboto text-[20px] leading-[22px]">
            © 2025 GRC Artikon Indonesia All rights reserved
          </span>

          <div className="flex gap-4">
            {["instagram", "twitter", "facebook-f", "youtube"].map((icon) => (
              <div
                key={icon}
                className="w-12 h-12 rounded-full bg-[#FE5208] flex items-center justify-center"
              >
                <i className={`fa-brands fa-${icon} text-white`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
