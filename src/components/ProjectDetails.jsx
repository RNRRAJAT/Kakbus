import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
  const { state } = useLocation();
  const [descriptionText, setDescriptionText] = useState('');

  useEffect(() => {
    if (state) {
      setDescriptionText(state.Description); 
    }
  }, [state]);

  if (!state) return <div className="text-white p-10">No project data available.</div>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10 mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">{state.Title}</h1>
      <div className="w-[70vw] container flex justify-between gap-20 mt-10">

      <img 
        src={state.Image}  
        alt={state.Title} 
        className="mb-6 h-60 w-[30vw]" 
        />
      <p className="text-xl whitespace-pre-line w-[30vw]">{descriptionText}</p>
        </div>
    </div>
  );
};

export default ProjectDetails;
