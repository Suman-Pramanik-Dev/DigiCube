import React, { useEffect } from 'react';
import { Box, Container, Typography,} from '@mui/material';
import { useDarkMode } from '../context/DarkModeContext';
import { Fade } from 'react-awesome-reveal';
import PartnerLogos from './PartnerLogos';





const About = () => {

  const { darkMode } = useDarkMode();
  

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach((element, index) => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          element.classList.add('reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* old co0lror #212427 */}
      <Box id="about" sx={{ backgroundColor: darkMode ? '#090808' : '#f6fbf6', color: darkMode ? 'white' : 'black', }}>

          <PartnerLogos/>
        <Container sx={{marginTop: '8em'}}>
    
          <br></br>
          <Box sx={{ textAlign: 'center' }}>
            <Fade cascade damping={0.1} duration={3000} >
              <Box sx={{display:'flex', alignItems:'center', justifyContent: 'center',}}>

              <Typography variant="h4" sx={{ fontWeight: '600', fontFamily:'Poppins', color:'#00c062', textTransform: 'uppercase'}}>
                About Us
              </Typography>
              </Box>
      
            </Fade>
          </Box>
          <br></br>
          <br></br>
          <Box sx={{ textAlign: 'center',}}>
            <Fade cascade duration={3000} >
            <Box sx={{ textAlign: 'center', width: {xs:'95%', md:'75%'} , margin:'auto'}}>
              <Typography variant="h4" sx={{ fontWeight: '400', fontFamily:'Inter',  color:'#555555'}}>
                <span className='spanTxt'>At DigiCube, </span> we are a leading Content Management Company dedicated to empowering creators and businesses in the digital space. Specializing in the creation and management of content IDs on YouTube, we offer a comprehensive suite of services designed to optimize revenue generation and ensure copyright protection for digital content. <span className='spanTxt'>Protecting Your Content, Maximizing Your Potential.</span> 
              </Typography>
            </Box>
            </Fade>
          </Box>
          <br></br>
          {/* {darkMode ?
          <Grid container spacing={3} justifyContent="left" alignItems="center" sx={logoContainerStyles}>
          {darkLogos.map((logo, index) => (
            <Grid item md={1.5} xs={4} key={index} className="scroll-animation">
              <Fade triggerOnce delay={index * 100} className="reveal">
                <img src={logo} alt={`Logo ${index + 1}`} 
                  style={{ ...logoStyles,  transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)', filter: 'grayscale(100%)'}} 
                  onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
                />
              </Fade>
            </Grid>
          ))}
        </Grid>
          :
          <Grid container justifyContent="center" alignItems="center" sx={logoContainerStyles}>
            {logos.map((logo, index) => (
              <Grid item md={2} xs={4} key={index} className="scroll-animation">
                <Fade triggerOnce delay={index * 100} className="reveal">
                  <img src={logo} alt={`Logo ${index + 1}`} style={logoStyles} />
                </Fade>
              </Grid>
            ))}
          </Grid>
          } */}
          
          <br />
  
        </Container>
      </Box>
      <br />
    </>
  );
};

export default About;
