import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import SplitText from './blocks/TextAnimations/SplitText/SplitText';
import Galaxy from './blocks/Backgrounds/Galaxy/Galaxy';
import LightRays from './blocks/Backgrounds/LightRays/LightRays';
import GradientBlinds from './blocks/Backgrounds/GradientBlinds/GradientBlinds';
import GooeyNav from './blocks/Components/GooeyNav/GooeyNav';
import LogoLoop from './blocks/Animations/LogoLoop/LogoLoop';
import RotatingText from './blocks/TextAnimations/RotatingText/RotatingText';
import GradientText from './blocks/TextAnimations/GradientText/GradientText';
import ModelViewer from './blocks/Components/ModelViewer/ModelViewer';
import CardSwap, { Card } from './blocks/Components/CardSwap/CardSwap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faGlobe, faAddressBook, faChartLine, faBuildingUser } from "@fortawesome/free-solid-svg-icons";

function Example() {
  // const [count, setCount] = useState(0)
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const imageLogos = [
    { src: "/img/BLP2.png", alt: "Company 1", href: "#" },
    { src: "/img/Graphic1.png", alt: "Company 1", href: "#" },
    { src: "/img/HK4.png", alt: "Company 1", href: "#" },
    { src: "/img/mhi4.png", alt: "Company 1", href: "#" },
    { src: "/img/ppp3.png", alt: "Company 1", href: "#" },
    { src: "/img/raka.png", alt: "Company 1", href: "#" },
    { src: "/img/sasmito2.png", alt: "Company 1", href: "#" },
  ];

  // console.log jika ada scroll down atau up
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        {/* <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          lightDirection="left"
          blindsAngle={20}
          noise={0.5}
          blindMinWidth={16}
          minBlindW={60}
          spotlightRadius={0.5}
          distortAmount={0}
          mouseDampening={0.15}
          angle={30}
        /> */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',}}>
                <div className="flex flex-col gap-4">
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-4xl font-semibold text-center"
                    tag="h1"
                  >
                    GRC Artikon
                  </GradientText>
                  <SplitText text="penyedia solusi GRC" className="text-2xl font-semibold text-center" tag="h2" />  
                </div>
            </div>
      </div>
      
      <div className="flex flex-row gap-4 pl-10 justify-center items-center">
        <div className="flex-1">
          <SplitText text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, ut vero accusantium aliquam esse accusamus eum laudantium fugiat incidunt necessitatibus recusandae optio alias reprehenderit deserunt impedit numquam. Non, quia ipsa?" className="text-2xl font-semibold mb-4" tag="h2" textAlign="left" splitType="words" />
        </div>
        <div className="flex-1" style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
          <CardSwap
            cardDistance={30}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            skewAmount={12}
          >
            <Card>
              <div style={{borderBottom: '1px solid #fff'}} className='flex flex-row items-center gap-2 p-2'>
                <FontAwesomeIcon icon={faUsers} />
                <h3>Experience</h3>
              </div>
              <div className='p-2'>
                <p>Kami telah berpengalaman dalam mensuplai material yang berkualitas untuk kebutuhan proyek-proyek di banyak tempat seluruh Indonesia.</p>
              </div>
            </Card>
            <Card>
              <div style={{borderBottom: '1px solid #fff'}} className='flex flex-row items-center gap-2 p-2'>
                <FontAwesomeIcon icon={faStar} />
                <h3>Quality</h3>
              </div>
              <div className='p-2'>
                <p>Produk GRC (Glassfibre Reinforced Concrete) yang kami hasilkan merupakan perpaduan estetika, fleksibilitas dan kekuatan.</p>
              </div>
            </Card>
            <Card>
              <div style={{borderBottom: '1px solid #fff'}} className='flex flex-row items-center gap-2 p-2'>
                <FontAwesomeIcon icon={faGlobe} />
                <h3>Innovation</h3>
              </div>
              <div className='p-2'>
                <p>Kami terus berkembang dan melakukan inovasi untuk meningkatkan kualitas produk-produk kami demi kepuasan para konsumen.</p>
              </div>
            </Card>
            <Card>
              <div style={{borderBottom: '1px solid #fff'}} className='flex flex-row items-center gap-2 p-2'>
                <FontAwesomeIcon icon={faAddressBook} />
                <h3>Planning</h3>
              </div>
              <div className='p-2'>
                <p>Kami terus berkembang dan melakukan inovasi untuk meningkatkan kualitas produk-produk kami demi kepuasan para konsumen.</p>
              </div>
            </Card>
            <Card>
              <div style={{borderBottom: '1px solid #fff'}} className='flex flex-row items-center gap-2 p-2'>
                <FontAwesomeIcon icon={faChartLine} />
                <h3>Analysis</h3>
              </div>
              <div className='p-2'>
                <p>Kami terus berkembang dan melakukan inovasi untuk meningkatkan kualitas produk-produk kami demi kepuasan para konsumen.</p>
              </div>
            </Card>
            <Card>
              <div style={{borderBottom: '1px solid #fff'}} className='flex flex-row items-center gap-2 p-2'>
                <FontAwesomeIcon icon={faBuildingUser} />
                <h3>Custom Design</h3>
              </div>
              <div className='p-2'>
                <p>Kami terus berkembang dan melakukan inovasi untuk meningkatkan kualitas produk-produk kami demi kepuasan para konsumen.</p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>


      <div className="text-2xl font-semibold text-center p-10">Klien Kami</div>
      {/* Basic horizontal loop */}
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000ff"
          ariaLabel="Technology partners"
        />
      </div>
      <div className="flex flex-row items-center p-10">
        <div className="flex-1">
          <SplitText text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, ut vero accusantium aliquam esse accusamus eum laudantium fugiat incidunt necessitatibus recusandae optio alias reprehenderit deserunt impedit numquam. Non, quia ipsa?" className="text-2xl font-semibold mb-4" tag="h2" textAlign="left" splitType="words" />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <ModelViewer
            url="/img/wooden_floor_panels.glb"
            width={400}
            height={400}
            defaultRotationY={45}
            defaultRotationX={30}
            enableMouseParallax={false}
            enableHoverRotation={false}
            // maxZoomDistance={1}
            enableManualZoom={false}
            autoRotate={true}
            showScreenshotButton={false}
          />
        </div>
      </div>
    </>
  )
}

export default App
