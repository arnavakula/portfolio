import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ open, setOpen }) => {
  const tab = useLocation().pathname;
  const links = [
    { route: '/', name: 'Home' },
    { route: '/about', name: 'About' },
    { route: '/projects', name: 'Projects' },
    // { route: '/experience', name: 'Experience' },
    { route: '/skills', name: 'Skills' },
  ]

  return (
    <>
      {/* <MenuRoundedIcon style={{color: 'white'}} onClick={() => setOpen(prev => !prev)}/>  */}
      <nav className='h-[8vh] font-poppins flex text-[#c4c4c4] gap-[4vw] pt-[2vh] justify-center lg:justify-start lg:pl-[5vw]'>
        {open && (
          <>
            {links.map((link, i) => (
              <div key={i} className='flex flex-col items-center'>
                <Link to={link.route}><h1 className={`${tab === link.route && 'text-white font-bold'}`}>{link.name}</h1></Link>
                {tab === link.route && (
                  <CircleRoundedIcon fontSize='small' className='scale-50 mt-[-0.5vh] text-[#F06543] hover:opacity-80' />
                )}
              </div>
            ))}
          </>
        )}
      </nav>
    </>
  )
}

export default NavBar