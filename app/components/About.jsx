"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA=[
    {
        title: "Skills",
        id : "skills",
        content : (
            <ul>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>Next.js</li>
                <li>Tailwind.css</li>
            </ul>
        )
    },
    {
        title: "Education",
        id : "education",
        content : (
            <ul>
                <li>St. Paul's High School</li>
                <li>St. Joeseph's Junior College</li>
                <li>Swami Vivekanada Institute Of Technology</li>
                
            </ul>
        )
    },
    {
        title: "Certification",
        id : "certification",
        content : (
            <ul>
                <li>Internship at DataPoint</li>
                <li>Udemy Python</li>
            </ul>
        )
    }
]

const About = ()=> {
    const [tab,setTab] = useState("skills");
    const [ispending ,startTransition] = useTransition();

    const handeTabChange = (id)=>{
        startTransition(()=>{
            setTab(id);
        });
    };

  return (
    <section className='container py-28'>
        <div className='items-center gap-8 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16'>
            <div className='flex items-center justify-center pr-0'>
               <Image src="/images/download.jpg" width={300} height={300} className='rounded-full '/> 
            </div>
            <div>
                <h1 className='text-4xl xl:text-6xl py-4 font-bold'>About Me</h1>
                <p className='text-relaxed py-4 text-[#ADB7BE] text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo tempore atque nobis maxime, laudantium alias totam repellat itaque, veritatis amet maiores magni ea dolorum quam cupiditate similique repellendus id dolorem, omnis dolor? Nam expedita asperiores quas, voluptatum unde dolor eius quaerat.</p>
                <div className="flex flex-row mt-8">
                    <TabButton 
                    selectTab={()=> handeTabChange("skills")} 
                    active={tab === 'skills'}
                    >
                        {" "}
                        Skill{" "}</TabButton>
                    <TabButton selectTab={()=> handeTabChange("education")} active={tab === 'education'}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={()=> handeTabChange("certification")} active={tab === 'certification'}>{" "}Certification{" "}</TabButton>
                </div>
                <div  className='mt-8'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
            </div>
        </div>
    </section>
  );
};

export default About;
