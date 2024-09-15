import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
    <div className='w-[180px] mt-auto mx-auto lg:mx-0 flex justify-between pb-[3vh]'>
        <a href='https://www.instagram.com/arnav.akula/' target='_blank' rel='noreferrer'><InstagramIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
        <a href='http://www.linkedin.com/in/arnavakula/' target='_blank'><LinkedInIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
        <a href='https://github.com/arnavakula/' target='_blank'><GitHubIcon className='hover:text-[#c4c4c4]' sx={{ color: 'white', fontSize: 35 }} /></a>
    </div>
)


export default Footer;