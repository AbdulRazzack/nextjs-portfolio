import Link from 'next/link'
import React from 'react'

function Menuoverlay() {
  return (
    <div>
      <ul class="h-full grid place-items-center py-20">
                    {/* <li><Link id="hlink" href="#home" class="hover:text-color-secondary ease-in duration-200">Home</Link></li> */}
                    <li><Link id="hlink" href="/components/about" class="hover:text-color-secondary ease-in duration-200">About me</Link></li>
                    <li><Link id="hlink" href="/components/project" class="hover:text-color-secondary ease-in duration-200">Projects</Link></li>
                    
                </ul>
    </div>
  )
}

export default Menuoverlay
