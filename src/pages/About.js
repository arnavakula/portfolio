import LaunchIcon from '@mui/icons-material/Launch';
import Headshot from '../assets/headshot.jpeg'
import CroppedHeadshot from '../assets/mid_headshot.jpeg'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AboutPic from '../assets/about_pic.png'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const About = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col h-[92vh] max-h-[92vh] text-[#c4c4c4] text-center lg:text-left lg:pl-[5vw] font-poppins gap-[3vh] lg:gap-[4vh] lg:w-[52vw]'>

        <div className='font-playfair text-white text-[3rem] lg:text-[5rem] font-bold'>
          <h1>About Me</h1>
        </div>
        <div>
          <img src={AboutPic} width={'250rem'} alt='headshot' className='mx-auto rounded-full shadow-sm shadow-white opacity-70 lg:hidden' />
          {/* <SportsBasketballIcon className='relative top-3 left-10 text-[#d4d4d4]' />
          <RestaurantMenuIcon className='relative bottom-4' /> */}
        </div>
        <p className='w-[80%] sm:w-[60%] md:w-[50%] lg:w-[95%] max-w-[90%] mt-[-4vh] lg: mt-[0vh] mx-auto lg:mx-0 xl:text-[1.2rem] leading-relaxed'>
          Right now, I’m a third year at UC Davis, double majoring in Computer Science and Statistics (Machine Learning track).
        </p>
        <p className='w-[80%] sm:w-[60%] md:w-[50%] lg:w-[95%] max-w-[90%] mx-auto lg:mx-0 xl:text-[1.2rem] leading-relaxed'>
          I have lots of experience in full-stack development and AI/ML. My main areas of interest are natural language processing and quantitative research, but I love exploring new things everyday!
        </p>
        <p className='w-[80%] sm:w-[60%] md:w-[50%] lg:w-[95%] max-w-[90%] mx-auto lg:mx-0 xl:text-[1.2rem] leading-relaxed'>
          In my free time, I love working out, playing sports (especially basketball and volleyball), cooking new foods, listening to music, playing the guitar and piano, and watching movies with friends!
        </p>
        <div className='w-[180px] mt-auto mx-auto lg:mx-0 flex justify-between pb-[3vh]'>
          <a href='https://www.instagram.com/arnav.akula/' target='_blank' rel='noreferrer'><InstagramIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
          <a href='http://www.linkedin.com/in/arnavakula/' target='_blank' rel='noreferrer'><LinkedInIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
          <a href='https://github.com/arnavakula/' target='_blank' rel='noreferrer'><GitHubIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
        </div>
      </div>
      <div className='h-[92vh] w-[50%] lg:flex lg:flex-col lg:justify-center hidden'>
        <img src={AboutPic} alt='headshot' className='mx-auto mb-[3vh]  xl:mb-[8vh] xl:w-[30rem] w-[25rem] rounded-3xl' />
      </div>
    </div>
  )
}

export default About