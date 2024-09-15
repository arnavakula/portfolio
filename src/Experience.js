import React from 'react'
import Fab from '@mui/material/Fab';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Link } from "react-router-dom";
import { ArrowBack } from '@mui/icons-material';

const Experience = (props) => {
  return (
    <div className='flex flex-col h-[120vh]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
      <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e64e55"}}><ArrowBack sx={{color: "white"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-slate-200 text-[#353c4a]'>Experience</h1>
          <AccessTimeFilledIcon sx={{color: "#e64e55", fontSize: "8vh"}}/>
        </div>
      </div>
      <iframe className='pdf mx-auto mt-[3vh]' src='ARNAV_AKULA_PORTFOLIO_RESUME.pdf' width='80%' height='60%'></iframe>
    </div>
  )
}

export default Experience

