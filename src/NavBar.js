import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=' drop-shadow-lg bg-[#353c4a] h-[80px] flex justify-between items-center'>
        <div className='w-[30vw] mr-[5vw] flex justify-start gap-[5vw] ml-[2vw]'>
          <Link to="/"><h1 className='font-sans text-black text-2xl text-white font-medium'><em>Home</em></h1></Link>
          <Link to="/about"><h1 className='font-sans text-black text-2xl text-white font-medium'><em>About Me</em></h1></Link>
        </div>

        <div className='flex items-center gap-[20px]'>
          <div className='w-[20vw] mr-[5vw] flex justify-around'>
              <a href='https://www.instagram.com/arnav.akula/' target='_blank' rel='noreferrer'><IconButton ><InstagramIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
              <a href='http://www.linkedin.com/in/arnavakula/' target='_blank'><IconButton ><LinkedInIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
              <a href='https://github.com/arnavakula/' target='_blank'><IconButton ><GitHubIcon sx={{ color: '#FFF', fontSize: 30 }}/></IconButton></a>
          </div>
        </div>
    </div>
    
  )
}

export default NavBar