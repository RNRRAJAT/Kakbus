import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
// import projectList from "public\projects.json"



const Projects = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        // Fetch the JSON file from the public folder
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => setProjectList(data));
    }, []);
    const navigate = useNavigate();

  const handleClick = (project, index) => {
    navigate(`/projects/${index}`, { state: project });
  };
    return (
        <>
            <div className="cardContainer pt-20 min-h-[100vh] bg-zinc-950 pb-20">
                {/* <div className=' card flex gap-10 mt-24 ml-40 '>
            <div className="cardLeft"><img src="public\Projects\projectImage1.jpg" className='h-52' alt="" /></div>
            <div className="cardRight flex flex-col gap-6 text-white">
                <div className="title text-5xl">Kakbus Flight Controller - 1</div>
                <div className='text-2xl'>Know more about this</div>
            </div>
            
        </div> */}
                {projectList.map((project, index) => (
                    <div key={index} onClick={() => handleClick(project, index)} className='card flex gap-10 mt-24 ml-40'>
                        <div className="cardLeft"><img src={`${project.Image}`} className='h-52 rounded-md' alt="" /></div>
                        <div className="cardRight cursor-pointer flex flex-col gap-6 text-white">
                            <div className="title text-5xl">{project.Title}</div>
                            <div className='text-2xl'>Know more about this</div>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

export default Projects
