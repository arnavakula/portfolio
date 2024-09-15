import ProjectBox from "../components/ProjectBox"
import flourish from '../assets/images/flourish.png'
import volleyviz from '../assets/images/volleyviz.png'
import aident from '../assets/images/aident.png'
import campsage from '../assets/images/campsage.png'
import fantasychatbot from '../assets/images/fantasychatbot.png'
import mentalwellconnect from '../assets/images/mentalwellconnect.png'

const Projects = () => {
  const projects = [
    {
      name: 'Flourish',
      link: 'https://flourish-sepia.vercel.app/',
      desc: 'Garden Planner and Management Tool',
      image: flourish,
      repoUrl: 'https://github.com/arnavakula/flourish',
      tags: ['Full-Stack Web App', 'Generative AI', 'REST APIs'],
      tools: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'OpenAI API', 'AWS'],
      desc2: 'Flourish is a platform for first-time gardeners to create mock gardens, recieve customized gardening timelines, and get conversational advice on growing crops',
      type: 'Personal Project'
    },
    {
      name: 'VolleyViz',
      desc: 'Volleyball Analytical Simulator',
      image: volleyviz,
      repoUrl: 'https://github.com/AggieSportsAnalytics/volleyball-analysis',
      tags: ['Full-Stack App', 'Machine Learning', 'Data Visualization'],
      tools: ['React.js', 'Flask', 'NumPy', 'Pandas'],
      desc2: 'VolleyViz is a dashboard and simulator to view advanced college volleyball stats and predict/forecast user-inputted matchups',
      type: <p>Collaborative project for <span className="font-medium">Aggie Sports Analytics</span></p>
    },
    {
      name: 'aiDent',
      desc: 'Dental Disease Detector',
      image: aident,
      repoUrl: 'https://github.com/dev-rathod/aiDent',
      tags: ['Full-Stack App', 'Computer Vision', 'Deep Learning'],
      tools: ['Next.js', 'FastAPI', 'Streamlit', 'OpenCV', 'Keras', 'AWS'],
      desc2: 'aiDent is a platform that utilizes computer vision technology to detect abnormalities in dental x-rays, aiming to prevent misdiagnosis in India\'s dental industry. ',
      type: <p>Group startup project</p>
    },
    {
      name: 'CampSage',
      link: 'https://campsage.onrender.com',
      desc: 'Interactive camping platform',
      image: campsage,
      repoUrl: 'https://github.com/arnavakula/yelp-camp',
      tags: ['Full-Stack App', 'Web Development', 'REST APIs'],
      tools: ['HTML/CSS', 'EJS', 'MongoDB', 'Express.js', 'Node.js'],
      desc2: 'CampSage is a platform for users to discover, review, and rate campgrounds across the US.',
      type: <p>Personal project</p>
    },
    {
      name: 'HIKE',
      desc: 'Virtual Assistant for Fantasy Sports',
      image: fantasychatbot,
      repoUrl: 'https://github.com/AggieSportsAnalytics/FantasyChatbot',
      tags: ['Generative AI', 'Data Analysis', 'Time Series Analysis'],
      tools: ['Pandas', 'LangChain', 'Streamlit', 'OpenAI API', 'Statsmodels'],
      desc2: 'HIKE is an assistant that uses advanced data analytics and predictive modeling to provide conversational guidance on fantasy sports.',
      type: <p>Personal project</p>
    },
    {
      name: 'MentalWell Connect',
      desc: 'Mental Health Support Platform',
      image: mentalwellconnect,
      repoUrl: 'https://github.com/Krigupt/SacHacks',
      tags: ['Full-Stack Web App', 'Machine Learning', 'Network Programming'],
      tools: ['HTML/CSS', 'JS', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn'],
      desc2: 'MentalWell Connect is a user-centric platform that provides tailored mental health support for college students, leveraging AI-based technologies.',
      type: <p>Group hackathon project</p>
    }
  ]



  return (
    <div className='h-[85vh] w-full max-w-[90%] mx-auto p-[3vw] lg:p-0'>
      <div className='font-playfair text-white text-[3rem] font-bold mt-[-2vh] text-center  lg:text-left'>
        <h1>My Projects</h1>
      </div>
      <div className='flex flex-col lg:grid grid-cols-2 gap-[5vh] '>
        {projects.map((proj, i) => (
          <div key={i}
            className="w-[80vw] lg:w-[42.5vw] rounded-lg mx-auto even:bg-[#d9d9d9] even:text-black odd:bg-[#676cdb] odd:text-white even:border-white odd:border-black font-poppins overflow-hidden">
            <ProjectBox proj={proj} isOdd={i % 2 === 1} />
          </div>
        ))}
      </div>
    </div>
  )
  
}

export default Projects