import React from 'react'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const About = () => {
  return (
    <div className='flex flex-col h-[100vh] bg-[#ddd0c8]'>
      <div className='flex mt-[5vh] h-[40vh] justify-center'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e64e55"}}><ArrowBack sx={{color: "white"}}/></Fab></Link>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[75vh] w-[65vw] flex items-center justify-around'>
          <div className='flex flex-col h-[100%] justify-start'>
            <h1 className='mx-auto text-[5vh] pt-[2vh] text-white'>About Me</h1>
            <div className='flex mt-[5vh] h-[40vh] justify-center'>
                <img alt='img' className='h-[50vh] rounded-xl shadow-md' src='bday.jpg'/>
                <div className='ml-[5vh] h-[50vh] w-[35vw] flex-col justify-around'>
                  <h1 className='text-md text-slate-200 text-[3vh]'>Hey there! I have lots of experience in AI/ML, deep learning, and full-stack development. My main areas of interest are natural language processing and generative AI, and I am currently working on a web app for <strong>transcript summarization</strong>.</h1>
                  <br />
                  <h1 className='text-md text-slate-200 text-[3vh]'>Outside of CS, I love to workout, play sports {'('}volleyball and basketball are my favorite{')'}, listen to music, play the guitar and piano, and exploring the outdoors!</h1>
                </div>
              </div>
          </div>
        </Paper>
        
      </div>
    </div>
  )
}

export default About