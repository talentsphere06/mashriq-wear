import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
   <div className=" overflow-x-hidden">
  <div className="w-[100%]  border-black border-t-2 justify-center gap-4 py-[40px] px-[20px] grid grid-rows-3">
    <div>
      <ul className="pages  grid grid-flow-col">
        <li>
          <a className="hover:font-semibold hover:bg-[#EDEDED]" href="/pages/contact">
            Contact
          </a>
        </li>
        <li>
          <a className="hover:font-semibold hover:bg-[#EDEDED]" href="/pages/about">
            About
          </a>
        </li>
        <li>
          <a className="hover:font-semibold hover:bg-[#EDEDED]" href="/pages/terms">
            Terms and Conditions
          </a>
        </li>
        <li>
          <a className="hover:font-semibold hover:bg-[#EDEDED]" href="/pages/privacy">
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>

    <div className="social pages place-items-center gap-6 grid grid-flow-col">
      {/* Social links */}
      <a href="/" className="hover:font-semibold hover:bg-[#EDEDED]">
        <Image src="/images/fb.png" alt="facebook" width={30} height={30} />
      </a>
      <a href="/" className="hover:font-semibold hover:bg-[#EDEDED]">
        <Image src="/images/ins.png" alt="instagram" width={30} height={30} />
      </a>
      <a href="/" className="hover:font-semibold hover:bg-[#EDEDED]">
        <Image src="/images/linkedin.png" alt="linkedin" width={30} height={30} />
      </a>
    </div>

    <div className="text pages place-items-center h-auto w-full grid grid-flow-col">
      <p className="text-[16px] font-normal text-[#737373]">
        © 2024 Fashion Forward. All rights reserved.
      </p>
    </div>
  </div>
</div>

  )
}

export default Footer