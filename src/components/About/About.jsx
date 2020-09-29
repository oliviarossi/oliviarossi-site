// import React, { useContext, useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
// import { Container, Row, Col } from 'react-bootstrap';
// import Title from '../Title/Title';
// import PortfolioContext from '../../context/context';

// const About = () => {
//   const { about } = useContext(PortfolioContext);

//   const [isDesktop, setIsDesktop] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth > 769) {
//       setIsDesktop(true);
//       setIsMobile(false);
//     } else {
//       setIsMobile(true);
//       setIsDesktop(false);
//     }
//   }, []);

//   return (
//     <section id="about">
//       <Container>
//         <Row className="about-wrapper">
//           <Col md={4} sm={12}>
//             <Title title="About"/>
//           </Col>
//           <Col md={6} sm={12} className="about-wrapper__info">
//             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
//               <p className="about-wrapper__info-text">I have always had an eye for design. But my passion for design goes beyond that which we see—there is beauty in efficiency, in progression, and in a well-oiled machine.</p>
//               <p className="about-wrapper__info-text">As a child, I wanted to be an architect, a scientist, and later a mechanical engineer. Since then, I realized that a well-designed strategy and an efficient team are what truly are at the core of every successful product.</p>
//               <p className="about-wrapper__info-text">My goal is to utilize my engineering mindset to develop products that boast functional and practical design features while meeting customer needs. I bring over 3 years of multi-disciplinary experience in both the public and private sectors to find innovative solutions to complex problems. I am a skilled communicator, adept at delivering presentations, and leading trainings for various audiences. I am also an avid supporter of Women in Technology and Women in Product.</p>
//               <p className="about-wrapper__info-text">Currently, I lead the Lighting Design team at RTE. I gather feedback and outline requirements, coordinate large-scale lighting projects, and follow best practices to exceed client expectations. I am forever curious and seeking new challenges in a product role in the tech industry that allows me to think strategically, design for efficiency, and bring creative ideas to life.</p>
//             </Fade>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default About;
