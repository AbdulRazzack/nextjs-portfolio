"use client"
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectData = [
    {
        id : 1,
        title : "Carfolio",
        description : "This website is about cars",
        image : "/images/projects/proj_carfolio.png",
        website : "https://abdulrazzack.github.io/carfoliofinal/index.html",
        gitlink : "https://github.com/AbdulRazzack/carfoliofinal",
        tag : ["All", "Web"],
    },
    {
        id : 1,
        title : "Carfolio",
        description : "This website is about cars",
        image :'/images/projects/proj_carfolio.png',
        website : "https://abdulrazzack.github.io/carfoliofinal/index.html",
        gitlink : "https://github.com/AbdulRazzack/carfoliofinal",
        tag : ["All", "Web"],
    },
    {
        id : 1,
        title : "Carfolio",
        description : "This website is about cars",
        image : "/images/projects/proj_carfolio.png",
        website : "https://abdulrazzack.github.io/carfoliofinal/index.html",
        gitlink : "https://github.com/AbdulRazzack/carfoliofinal",
        tag : ["All", "Web"],
    },
    {
        id : 1,
        title : "Carfolio",
        description : "This website is about cars",
        image : "/images/projects/proj_carfolio.png",
        website : "https://abdulrazzack.github.io/carfoliofinal/index.html",
        gitlink : "https://github.com/AbdulRazzack/carfoliofinal",
        tag : ["All", "Web"],
    },
    
]
const ProjectSection = () => {
  return (
    <div className='py-28'>
    <h2 className='font-bold text-4xl underline underline-offset-2 py-4'>My Projects</h2>
    <div className='py-4'>
    <div className='grid gap-8 md:grid-cols-3 md:gap-12'>{ProjectData.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitlink} prevUrl={project.website}/>)}</div>
    </div>

    </div>
  )
}

export default ProjectSection
