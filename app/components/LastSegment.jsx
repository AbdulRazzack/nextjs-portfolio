import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const LastSegment = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-white'>
      <div>
        <h2 className='underlined text-xl'>Let's Connect</h2>
        <div className='flex flex-row gap-4 my-3'>
        <FontAwesomeIcon icon={faGithub} color='white'/>
        <FontAwesomeIcon icon={faLinkedin} color='white'/></div>
      </div>
      <div>
        <h2 className='underlined text-xl sm:text:md'>Contact Me</h2>
          <p className='text-[#ADB7BE] text-md sm:text:sm'>Ph: 6309583580</p>
          <p className='text-[#ADB7BE] text-md sm:text:sm' >Email: <a href='https://mail.google.com/mail/u/6/#inbox?compose=CllgCJNqLCQkdBRjTRsgdDwWLcsZPvrnDtHRlwDCrdnQpktjlxrmlFvtvtVNGxRnJpBbRqMVNpg'>mohammedabdulrazzack4@gmail.com</a></p>
      </div>
    </div>
  )
}

export default LastSegment

