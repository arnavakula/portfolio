import React from 'react'
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const Skills = () => {
  return (
    <div className='flex flex-col h-[100vh] bg-[#ddd0c8]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e64e55"}}><ArrowBack sx={{color: "white"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-200 text-[#353c4a] mt-[2vh]'>Skills</h1>
          <OfflineBoltIcon className='mt-[2vh]' sx={{color: "#e64e55", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex mt-[10vh] h-[40vh] justify-around'>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[60vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh] text-slate-200'>Progamming Languages</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[3.5vw] drop-shadow-md' src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png'/>
                <h1 className='font-light text-xl'>Java</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'/>
                <h1 className='font-light text-xl'>C</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://logosdownload.com/logo/javascript-logo-big.png'/>
                <h1 className='font-light text-xl'>Javascript</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png'/>
                <h1 className='font-light text-xl'>HTML</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'/>
                <h1 className='font-light text-xl'>Python</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'/>
                <h1 className='font-light text-xl'>C++</h1>
              </div>

              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'/>
                <h1 className='font-light text-xl'>CSS</h1>
              </div>
              <div className='flex bg-cyan-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'/>
                <h1 className='font-light text-xl'>SQL</h1>
              </div>
            </div>
          </div>
        </Paper>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[60vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh] text-slate-200'>Web Dev.</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
                <h1 className=' font-light text-xl'>React.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'/>
                <h1 className='font-light text-xl'>Tailwind.css</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'/>
                <h1 className='font-light text-xl'>Express.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://try.direct/files/8400033b-cf2e-4fc4-ac91-45cadee082ed.svg'/>
                <h1 className='font-light text-xl'>FastAPI</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/240px-Nextjs-logo.svg.png'/>
                <h1 className='font-light text-xl'>Next.js</h1>
              </div>
            <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png'/>
                <h1 className=' font-light text-xl'>Node.js</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'/>
                <h1 className='font-light text-xl'>MongoDB</h1>
              </div>
              <div className='flex bg-lime-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/240px-Flask_logo.svg.png'/>
                <h1 className='font-light text-xl'>Flask</h1>
              </div>
            </div>
          </div>
        </Paper>
        <Paper sx={{bgcolor: "#353c4a"}} elevation={3} className='h-[60vh] w-[30vw] flex flex-col items-center'>
          <p className='font-sans text-2xl mt-[3vh] font-normal mb-[2vh] text-slate-200'>Data Sci/ML</p>
          <div className='flex justify-center gap-[1.5vw]'>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[3.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/600px-Pandas_logo.svg.png'/>
                <h1 className=' font-light text-xl'>Pandas</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png'/>
                <h1 className='font-light text-xl'>Scikit-learn</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png'/>
                <h1 className='font-light text-xl'>Keras</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://miro.medium.com/v2/resize:fit:1200/1*-PlFCd_VBcALKReO3ZaOEg.png'/>
                <h1 className='font-light text-xl'>Langchain</h1>
              </div>
            </div>
            <div className='w-[13vw] flex flex-col gap-[2vh]'>
            <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://avatars.githubusercontent.com/u/288276?v=4'/>
                <h1 className=' font-light text-xl'>Numpy</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/2560px-Tensorflow_logo.svg.png?20170429160244'/>
                <h1 className='font-light text-xl'>Tensorflow</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/PyTorch_logo_black.svg/976px-PyTorch_logo_black.svg.png'/>
                <h1 className='font-light text-xl'>PyTorch</h1>
              </div>
              <div className='flex bg-amber-200 w-[100%] h-[10vh] justify-center items-center gap-[1vw] shadow-md rounded-md'>
                <img alt='img' className='w-[2.5vw] drop-shadow-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/974px-OpenCV_Logo_with_text_svg_version.svg.png?20130608172504'/>
                <h1 className='font-light text-xl'>OpenCV</h1>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default Skills