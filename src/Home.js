import React from 'react'
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Home = () => {


  return (
    <div className=' bg-[#ddd0c8] h-[calc(100vh)] flex-col'>
        <div className='ml-[5vw] h-[40vh] flex items-center justify-start'>
        <div className='mt-[20vh] h-[40vh] w-[50vw] flex flex-col '>
            <h1 className='font-sans text-[8vh] mx-auto text-[#252827] w-[32vw] font-medium'>Hi, I'm Arnav</h1>
            <h1 className='font-sans text-[4vh] mx-auto text-[#252827] w-[32vw] font-medium'><em>AI/ML & Full-Stack Developer</em></h1>
            <div className='mx-auto w-[32vw] mt-[2vh]'>
                <h1 className='text-[#252827] text-[2.5vh]'>Hello! My name is Arnav Akula, and I am a dedicated Computer Science & Statistics student with a passion for integrating AI/ML into full-stack web development.</h1>
            </div>
        </div>

        <div>
            <img alt='headshot' className='rounded-full h-[40vh] mt-[18vh]' src='headshot.jpeg' />
        </div>
        </div>
        <div className='flex h-[30vh] mt-[15vh] justify-center gap-[6vw]'>
            <Link to="/skills"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:scale-110'>
                <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Skills</h1>
                    <OfflineBoltIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
                
            </Paper>
            </Link>
            <Link to="/projects"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:scale-110'>
            <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Projects</h1>
                    <CodeIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
            </Paper>
            </Link>
            <Link to="/experience"><Paper elevation={3} sx={{height: "100%", width: "26vw", backgroundColor: "#7ba3b5"}} className='flex flex-col items-center hover:scale-110'>
            <div className=' m-auto flex gap-[1vw] items-center'>
                    <h1 className='text-4xl font-medium text-white'>Experience</h1>
                    <AccessTimeFilledIcon sx={{color: "#fff", fontSize: "8vh"}}/>
                </div>
            </Paper>
            </Link>
        </div>
    </div>
  )
}

export default Home