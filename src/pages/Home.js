import LaunchIcon from '@mui/icons-material/Launch';
import Headshot from '../assets/headshot.jpeg'
import CroppedHeadshot from '../assets/mid_headshot.jpeg'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
    <div className='flex flex-col h-[92vh] max-h-[92vh] text-[#c4c4c4] text-center lg:text-left lg:pl-[5vw] font-poppins gap-[4vh] lg:w-[52vw]'>
      <img src={CroppedHeadshot} alt='headshot' className='h-full mx-auto shadow-gray-800 opacity-60 hidden lg:block lg:absolute lg:top-0 lg:right-0 object-cover'
        style={{ width: '48vw' }} />
      <div className='font-playfair text-white text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold'>
        <h1 className='pt-[1vh] lg:pt-[12vh]'>Welcome!</h1>
        <h1 className='mt-[-2vh]'>I'm Arnav Akula</h1>
      </div>
      <img src={Headshot} width={'250rem'} alt='headshot' className='mx-auto rounded-full shadow-sm shadow-white opacity-70 lg:hidden' />
      <p className='w-[80%] sm:w-[60%] md:w-[50%] lg:w-[95%] max-w-[90%] mx-auto lg:mx-0 xl:text-[1.2rem] leading-relaxed'>
        I am a Computer Science and Statistics student, with experience in full-stack development and AI/ML.
        I am passionate about taking data-driven approaches to tackle real-world problems!
      </p>
      <a href='https://docs.google.com/document/d/1By9bOxQu49FmlzKNelTZoDBz5y3E2doFbLcCQQwYq0w/edit?usp=sharing'
        rel='noreferrer '
        target="_blank"
        className='mx-auto lg:mx-0 mt-[1vh] w-[180px] h-[60px] bg-[#676CDB] flex items-center justify-center text-white cursor-pointer gap-[5px] hover:opacity-80'>
        <LaunchIcon />
        <h1>Resume</h1>
      </a>
      <div className='w-[180px] mt-auto mx-auto lg:mx-0 flex justify-between pb-[3vh]'>
        <a href='https://www.instagram.com/arnav.akula/' target='_blank' rel='noreferrer'><InstagramIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
        <a href='http://www.linkedin.com/in/arnavakula/' target='_blank' rel='noreferrer'><LinkedInIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
        <a href='https://github.com/arnavakula/' target='_blank' rel='noreferrer'><GitHubIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
      </div>
    </div>

  )
}

export default Home