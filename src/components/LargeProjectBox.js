import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const LargeProjectBox = ({ proj, isOdd }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
            <div>
                <div className="relative overflow-hidden flex flex-col gap-[2vh]">
                    <a href={proj.repoUrl} target='_blank' rel='noreferrer' className='group overflow-hidden rounded-lg'>
                        <img src={proj.image} alt={proj.name} className="h-[30vh] w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75" />

                        <div className="absolute inset-0 flex gap-[2vw] items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className='text-[2rem] text-white'>open repo</h1>
                            <GitHubIcon style={{ fontSize: 48, color: 'white' }} />
                        </div>
                    </a>
                </div>
                <div className='py-[1.5vh] flex flex-col gap-[2vh] px-[1vw]'>
                    <div className=''>
                        <div className='flex text-[1.1rem] pl-[1vw] gap-[2vw]'>
                            <h2 className='text-[1.4rem] font-semibold'>{proj.name}</h2>
                            {proj.link && (
                                <a className='hover:opacity-60 bg-white bg-opacity-20 flex justify-center items-center gap-[0.75vw] border rounded-full w-fit px-[1.6vw]' href={proj.link} target='_blank' rel='noreferrer'>
                                    <OpenInNewIcon fontSize='small' />
                                    <span className='font-semibold'>Go to {proj.name}</span>
                                </a>
                            )}
                        </div>

                        <p className='italic pl-[1vw] pt-[0.5vh]'>{proj.desc}</p>
                    </div>

                    {isExpanded && (
                        <>
                            <div className='pl-[1vw] flex flex-wrap text-[0.8rem] gap-[1vw]'>
                                {proj.tags && proj.tags.map((tag, i) => (
                                    <div key={i} className='rounded-full border-2 p-[0.4rem] whitespace-nowrap bg-[#DB666C] brightness-125'>
                                        <h1 className='text-gray-800 font-semibold'>{tag}</h1>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h1 className='pl-[1vw] text-[1.1rem] font-semibold'>I Used ...</h1>
                                <div className='pt-[1vh] pl-[1vw] flex flex-wrap gap-[1.5vw] whitespace-nowrap '>
                                    {proj.tools && proj.tools.map((tool, i) => (
                                        <div key={i} className={`font-semibold shadow-sm shadow-black rounded-full items-center w-fit text-[0.9rem] p-[0.4rem] ${isOdd ? 'bg-[#676cdb] text-white border-black' : 'bg-[#ECE6E8] text-black border-black'}`}>
                                            {tool}
                                        </div>
                                    ))}

                                </div>
                                <p className='pl-[1vw]  pt-[2vh]'>{proj.desc2 && proj.desc2}</p>
                            </div>
                            <div className='pl-[1vw] font-thin italic'>
                                <p>{proj.type}</p>
                            </div>
                        </>
                    )}
                    <button onClick={() => setIsExpanded(prev => !prev)}>
                        <KeyboardArrowDownIcon className={`mr-[2vw] ${isExpanded ? 'transform rotate-180' : ''}`} />
                        <span className='sr-only'>{isExpanded ? 'Collapse' : 'Expand'}</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LargeProjectBox;
