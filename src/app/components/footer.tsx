import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='w-screen h-[200px] place-items-center'>
      <div className='w-screen h-20% place-items-center border-black border-t-2 justify-center gap-6 py-[40px] px-[20x] grid grid-rows-3'>

        <div >
           <ul className="pages place-items-center h-auto w-screen grid grid-flow-col ">
                <li>
                  <a className='hover:font-semibold hover:bg-[#EDEDED]' href="pages/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className='hover:font-semibold hover:bg-[#EDEDED]' href="pages/about">
                    About
                  </a>
                </li>
                  <li>
                  <a className='hover:font-semibold hover:bg-[#EDEDED]' href="/pages/terms">
                    terms and conditions
                  </a>
                </li>
                  <li>
                  <a className='hover:font-semibold hover:bg-[#EDEDED]' href="/pages/privacy">
                    privacy policy
                  </a>
                </li>
              </ul>

        </div> 
        <div className="social pages place-items-center h-auto w-fill gap-6  grid grid-flow-col ">
          {/* social link */}                 
                  <div className='hover:font-semibold hover:bg-[#EDEDED]'  >
                   <a className="rounded-2 hover:font-semibold h-[25px] w-[25px] place-items-center" href="/">
              <Image
              src="/images/fb.png"
              alt='fav'
              width={30}
              height={30}/>
              </a>
                  </div>
                  <div className='hover:font-semibold hover:bg-[#EDEDED]'  >
                   <a className="rounded-2 hover:font-semibold h-[25px] w-[25px] place-items-center" href="/">
              <Image
              src="/images/ins.png"
              alt='fav'
              width={30}
              height={30}/>
              </a>
                  </div>                  
                  <div className='hover:font-semibold hover:bg-[#EDEDED]'  >
                   <a className="rounded-2 hover:font-semibold h-[25px] w-[25px] place-items-center" href="/">
              <Image
              src="/images/linkedin.png"
              alt='fav'
              width={30}
              height={30}/>
              </a>
                </div>
        </div>
        <div className="text pages place-items-center h-auto w-screen grid grid-flow-col ">
      <p className='text-[16px] font-normal text-[#737373]'>© 2024 Fashion Forward. All rights reserved.</p>
        </div>


      </div>
      

    </div>
  )
}

export default Footer