import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const Projects = () => {
  return (
    <div className='flex flex-col h-[160vh] bg-[#ddd0c8]'>
      <div className='flex justify-between items-center h-[60px] mt-[1vh]'>
        <Link to="/"><Fab variant='extended' aria-label='back' sx={{marginLeft: "10px", backgroundColor: "#e64e55"}}><ArrowBack sx={{color: "white"}}/></Fab></Link>
        <div className=' justify-center m-auto flex gap-[1vw] items-center drop-shadow-lg rounded-xl w-[180px]'>
          <h1 className='text-4xl font-medium text-slate-200 text-[#353c4a]'>Projects</h1>
          <CodeIcon sx={{color: "#e64e55", fontSize: "8vh"}}/>
        </div>
      </div>
      <div className='flex flex-col mt-[3vh] h-[40vh] '>
      <div className='flex justify-around'>
        <div className='bg-[#353c4a] h-[72vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#728189] p-2 w-[30vw] justify-center'>
            <p className='text-[3.5vh] font-mono text-white'>VolleyViz</p>
            <a href='https://github.com/AggieSportsAnalytics/volleyball-analysis' target='_blank' rel='noreferrer'><IconButton><GitHubIcon sx={{ color: '#ffffff', fontSize: 30 }}/></IconButton></a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[2.75vh] font-medium'><em>Interactive, AI-based game simulator for college volleyball</em></p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[2vh]'>
              <ul style={{display: 'list-item'}}>
                <li className='mb-[10px]'>Developed VolleyViz, which acts as <strong>{'(1)'}</strong> a game simulator for volleyball fanatics and <strong>{'(2)'}</strong> a training tool for coaches</li>
                <li className='mb-[10px]'>Designed <strong>acccessible frontend</strong> to display <strong>interactive dashboard</strong> for player and game statistics</li>
                <li className='mb-[10px]'>Leveraged <strong>Random Forest Classifier</strong> to forecast game statline and make key insights on gameplay</li>
              </ul>
            </div>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>React.js, Flask, Pandas, Scikit-learn, Pickle</p>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>{'( Collaborative project for'} <strong>Aggie Sports Analytics </strong>{')'}</p> 
          </div>
        </div>
        <div className='bg-[#353c4a] h-[72vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#728189] p-2 w-[30vw] justify-center'>
            <p className='text-[3.5vh] font-mono text-white'>CampSage</p>
            <a href='https://github.com/arnavakula/yelp-camp' target='_blank' rel='noreferrer'><IconButton><GitHubIcon sx={{ color: '#ffffff', fontSize: 30 }}/></IconButton></a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[2.75vh] font-medium'><em>Online forum for discovering and reviewing campgrounds</em></p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[2vh]'>
              <ul style={{display: 'list-item'}}>
                <li className='mb-[10px]'>Hosted <a className='hover:text-blue' style={{textDecoration: 'underline'}} href='https://campsage.onrender.com/' target='blank' rel='noreferrer'>here!</a> {'(may take some time)'}</li>
                <li className='mb-[10px]'>Leveraged <strong>Mapbox API</strong> to display interactive cluster map of <strong>500+</strong> campgrounds</li>
                <li className='mb-[10px]'>Developed user system, maintaining <strong>session state</strong> and implementing secure role-based access control for data management</li>
                <li className='mb-[10px]'>Utilized <strong>Helmet</strong> to enhance web security</li>
                <li className='mb-[10px]'>Efficient storage of images using <strong>Cloudinary</strong></li>
              </ul>
            </div>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>HTML, CSS, EJS, Express, MongoDB-Atlas, Cloudinary, Mapbox API, Render</p>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>{'( Personal project )'}</p> 
          </div>
        </div>
        <div className='bg-[#353c4a] h-[72vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#728189] p-2 w-[30vw] justify-center'>
            <p className='text-[3.5vh] font-mono text-white'>FantasyChatbot</p>
            <a href='https://github.com/AggieSportsAnalytics/FantasyChatbot' target='_blank' rel='noreferrer'><IconButton><GitHubIcon sx={{ color: '#ffffff', fontSize: 30 }}/></IconButton></a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[2.75vh] font-medium'><em>AI-powered Fantasy Football assistant for strategic guidance</em></p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[2vh]'>
              <ul style={{display: 'list-item'}}>
                <li className='mb-[10px]'>Utilized <strong>LLMs</strong> through <strong>Retrieval Augmented Generation</strong> for natural language chatting and sentiment analysis on sports news and injury data</li>
                <li className='mb-[10px]'>Implement <strong>ARIMA</strong> model for in-depth time-series analysis, examining player/team trends throughout the season</li>
                <li className='mb-[10px]'>Designed clean, simple frontend using <strong>Streamlit</strong></li>
              </ul>
            </div>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>Pandas, Langchain, GPT-4, Streamlit, Statsmodels</p>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>{'( Collaborative project for'} <strong>Aggie Sports Analytics </strong>{')'}</p>
          </div>
        </div>
        </div>
        <div className='flex mt-[5vh] justify-around'>
        <div className='bg-[#353c4a] h-[72vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#ae848b] p-2 w-[30vw] justify-center'>
            <p className='text-[3.5vh] font-mono text-white'>MentalWell Connect</p>
            <a href='https://github.com/Krigupt/SacHacks' target='_blank' rel='noreferrer'><IconButton><GitHubIcon sx={{ color: '#ffffff', fontSize: 30 }}/></IconButton></a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[2.75vh] font-medium'><em>User-centric platform for mental health support</em></p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[2vh]'>
              <ul style={{display: 'list-item'}}>
                <li className='mb-[10px]'>Utilized <strong>SVMs</strong> to personalized treatment based on questionnaire outcome</li>
                <li className='mb-[10px]'>Implemented a <strong>blog</strong> and <strong>TCP/IP</strong> chatroom for users to communicate</li>
                <li className='mb-[10px]'>Optimized a <strong>Friend-Finder</strong> using a <strong>KNN-clustering</strong> model {'(~97% accuracy</li)'}</li>
                <li className='mb-[10px]'>Designed secure user registration system for interaction between users</li>
                <li className='mb-[10px]'>Checkout our DevPost <a className='hover:text-blue' style={{textDecoration: 'underline'}} href='https://devpost.com/software/mentalwell-connect' target='blank' rel='noreferrer'>here!</a></li>
              </ul>
            </div>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>HTML, CSS, JS, Flask, Pandas, Numpy, Scikit-learn</p>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>{'( Collaborative hackathon project)'}</p>
          </div>
        </div>
        <div className='bg-[#353c4a] h-[72vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#ae848b] p-2 w-[30vw] justify-center'>
            <p className='text-[3.5vh] font-mono text-white'>AIDent</p>
            <a href='https://github.com/dev-rathod/aiDent' target='_blank' rel='noreferrer'><IconButton><GitHubIcon sx={{ color: '#ffffff', fontSize: 30 }}/></IconButton></a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[2.75vh] font-medium'><em>AI-powered orthodontist for disease detection via X-rays</em></p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[2vh]'>
              <ul style={{display: 'list-item'}}>
                <li className='mb-[10px]'>Utilized <strong>Yolov8</strong> model to segment X-ray into 16 fragments</li>
                <li className='mb-[10px]'>Developed <strong>CNN</strong> to classify disease on teeth fragments </li>
                <li className='mb-[10px]'>Designed user-friendly interface to submit X-rays and receive feedback</li>
                <li className='mb-[10px]'>Utilized <strong>knowledge distillation</strong> to reduce models for integration with frontend</li>
                <li className='mb-[10px]'>Checkout our DevPost <a className='hover:text-blue' style={{textDecoration: 'underline'}} href='https://devpost.com/software/aident' target='blank' rel='noreferrer'>here!</a></li>
              </ul>
            </div>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>Next.js, Streamlit, Flask, Scikit-learn, Yolov8, Keras</p>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>{'( Collaborative hackathon project)'}</p>
          </div>
        </div>
        <div className='bg-[#353c4a] h-[72vh] w-[30vw] flex flex-col items-center'>
          <div className='h-[14vh] flex items-center pt-[2vh] gap-[1vw] bg-[#ae848b] p-2 w-[30vw] justify-center'>
            <p className='text-[3.5vh] font-mono text-white'>Song Composer</p>
            <a href='https://github.com/arnavakula/song-writer' target='_blank' rel='noreferrer'><IconButton><GitHubIcon sx={{ color: '#ffffff', fontSize: 30 }}/></IconButton></a>
          </div>
          <div className='text-[#FFFAF3] w-[27vw] h-[47vh] mt-[3vh] p-2 flex-col flex items-center'>
            <div className='flex-col flex justify-center w-[90%]'>
            <p className='text-[2.75vh] font-medium'><em>Generation of song lyrics matching a certain artist's style</em></p>
            </div>
            <div className='w-[23vw] mt-[2vh] text-[2vh]'>
              <ul style={{display: 'list-item'}}>
                <li className='mb-[10px]'>Utilized <strong>Genius API</strong> and <strong>BeautifulSoup</strong> to web-scrape song lyrics for a certain artist</li>
                <li className='mb-[10px]'>Developed <strong>RNN</strong> to dynamically generate song lyrics given scraped lyrics and user-selected theme</li>
                <li className='mb-[10px]'>Leveraged <strong>NLTK</strong> to organize song lyrics into hook, verses, and melody</li>
                <li className='mb-[10px]'>Used <strong>transfer learning</strong> to combine artists and mock features</li>
              </ul>
            </div>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>BeautifulSoup, Pandas, Genius API, Spotify API, Tensorflow, Keras, NLTK</p>
            <p className='text-[1.75vh] font-thin mt-[1.5vh] w-[24vw]'>{'( Personal Project )'}</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects