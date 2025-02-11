import React, { useState } from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fade } from 'react-awesome-reveal';

const FAQs = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const questions = [
    {
      question: 'What is a Content ID?',
      answer: 'Content ID is a system used by platforms like YouTube to automatically detect and manage copyrighted content in uploaded videos. It works by scanning videos against a database of registered works (such as music, videos, or images) and identifying matches. Once a match is found, copyright owners can choose to monetize the content, block it, or track its usage. It helps protect intellectual property and ensures creators and copyright holders get their fair share of revenue.',
    },
    {
      question: 'How to generate revenue on copyrighted content?',
      answer: 'If you hold the rights to the copyrighted content (e.g., music, videos, or images), you can register it with platforms like YouTube. Content ID will scan uploaded videos for matching content and automatically flag them.Once a match is found, you can choose to monetize the content through ads, allowing you to earn revenue every time someone views or interacts with the video containing your content.You can also track how often your content is being used, or block unauthorized uses.',
    },
    {
      question: 'What is Music Licensing & Distribution?',
      answer: 'Platforms like TuneCore or CD Baby can distribute your copyrighted music to digital platforms (Spotify, Apple Music, etc.). You earn royalties based on streams, downloads, and airplay.License your music or videos to other creators, advertisers, or filmmakers. This gives them legal permission to use your work for a fee, while you retain ownership.',
    },
    {
      question: 'How much you can earn from copyrighted content?',
      answer: 'There is no limitation in earning from copyrighted content.',
    },
    {
      question: 'Is DigiCube trusted?',
      answer: 'Yes, DigiCube is a trusted and reliable company in the digital content management industry. We have built a strong reputation by consistently providing high-quality services and support to content creators and businesses. Our focus on transparency, compliance with copyright laws, and commitment to maximizing revenue for our clients has earned us the trust of numerous creators and brands. With years of experience and a dedicated team, we prioritize protecting your content and ensuring you can confidently monetize and distribute it across platforms. Our satisfied clients and positive industry feedback are a testament to our trustworthiness and expertise.',
    },
  
    
  ];

  return (
    <Container id="faqs" maxWidth="md" sx={{ marginTop: '14rem', marginBottom: '2rem', textAlign:'center', color:'white'}}>
     
      <Fade cascade triggerOnce duration={500}>
      <Box sx={{display:'flex', alignItems:'center', justifyContent: 'center',}}>

        
              <Typography variant="h4" sx={{ fontWeight: '600', fontFamily:'Poppins', color:'#00c062', textTransform: 'uppercase'}}>
              FAQs
              </Typography>
              </Box>
              <br></br>
      
      <Typography variant="h2" sx={{fontFamily:'Poppins', color:'#c9c7c7'}}>
        We’ve got the answers
      </Typography>
      <br></br>
      <br></br>
      {questions.map((item, index) => (
        <Accordion
          key={index}
          expanded={selectedQuestion === index}
          onChange={() => handleQuestionClick(index)}
          sx={{ marginBottom: '1rem', backgroundColor: selectedQuestion === index ? '#212427' : 'transparent', border: selectedQuestion === index ? '1px solid #383839' : 'transparent', borderRadius:'25px', textAlign:'left'}}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography variant="h5" sx={{fontFamily:'Inter', color:'#c9c7c7', mb:'2rem'}}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{fontFamily:'Inter', color:'#c9c7c7'}}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <br></br>
      <br></br>
      <Typography variant="h5" gutterBottom  sx={{fontFamily:'Inter',color:'#c9c7c7'}}>
        Still have more question? <Link to='/contactUs' style={{color:'#00c062', textDecoration:'none'}}>Contact Us</Link>
      </Typography>
      </Fade>
    </Container>
  );
};

export default FAQs;
