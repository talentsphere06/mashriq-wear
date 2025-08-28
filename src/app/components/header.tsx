
import { NavigationMenu,NavigationMenuContent,NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
function Header() {
  return (
    <div className='w-screen h-[65px] border-1 py-3 px-[40px] border-[#E5E8EB]   grid grid-flow-col'>
      {/* logo */}
      <a className='title place-items-center justify-center grid grid-flow-col gap-2 h-auto     w-fit' href="/">
        
            <div className="logo h-auto w-[23px] grid-flow-col grid">
                <Image
                src="/images/logo.png"
                alt='logo'
                height={16}
                width={16}
                />
            </div>
            <h1 className='w-[82px] h-[23px] text-[18px] font-bold '>StyleHub</h1>
        
        </a>
          {/* menu link for desktop */}
        <div className='hidden md:flex menu w-fill h-auto  grid-flow-col gap-5 place-items-center justify-center place-self-end'>
            <NavigationMenu>
          <NavigationMenuList className='w-fill h-auto grid grid-flow-col gap-5 place-items-center justify-center place-self-end text-[10px] font-medium '>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/newarrivals">New Arrivals</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/women">Women</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/men">Men</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/kids">kids</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/sale">Sale</NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuLink className="rounded-2 hover:font-semibold hover:bg-[#EDEDED] bg-[#EDEDDE] h-[40px] w-[40px] px-[8px]"  > 
               <Image
              src="/images/fav.png"
              alt='search'
              width={40}
              height={40}/>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="rounded-2 hover:font-semibold hover:bg-[#EDEDED] bg-[#EDEDDE]  h-[40px] w-[40px] px-[8px]" href="/fav">
              
              <Image
              src="/images/search.png"
              alt='fav'
              width={40}
              height={40}/>
              </NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuLink className="rounded-2 hover:font-semibold hover:bg-[#EDEDED] bg-[#EDEDDE]  h-[40px] w-[40px] px-[8px]" href="/cart">
              
              <Image
              src="/images/cart.png"
              alt='fav'
              width={40}
              height={40}/>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
          {/* side dropdown */}
        <div className='hidden md:flex'>  
                <NavigationMenu> 
                    <NavigationMenuList> 
                        <NavigationMenuItem>
                        <NavigationMenuTrigger className=' hover:font-semibold hover:bg-[#EDEDED] cursor-pointer'>more</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4 w-48 space-y-2">
                <li>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]' href="/contact">
                    Contact
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]' href="/pages/about">
                    About
                  </NavigationMenuLink>
                </li>
                  <li>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]' href="/pages/terms">
                    terms and conditions
                  </NavigationMenuLink>
                </li>
                  <li>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]' href="/pages/privacy">
                    privacy policy
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]' href="Profile">
                   Profile
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>   
         </NavigationMenuItem>
         </NavigationMenuList>   
       
      
        <NavigationMenuViewport />
      </NavigationMenu>

</div>


        </div>

      {/* menu links for mobile */}
          <div className="md:hidden grid-flow-col flex  place-items-end justify-end  place-content-center">
              
              <a className="rounded-2 hover:font-semibold hover:bg-[#EDEDED] bg-[#EDEDDE]  h-[25px] w-[25px] place-items-center" href="/">
              <Image
              src="/images/search.png"
              alt='fav'
              width={20}
              height={20}/>
              </a>
      
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className='w-full items-end text-2xl font-normal'>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col ">
                  

                      <NavigationMenuItem>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]'  href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                 <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/newarrivals">New Arrivals</NavigationMenuLink>
                </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/women">Women</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/men">Men</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/kids">Kids</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/sale">Sale</NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuLink  className='hover:font-semibold hover:bg-[#EDEDED]' href="/fav">fav</NavigationMenuLink>
            </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]'  href="./pages/about">About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]'  href="/pages/services">Services</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]'  href="/pages/contact">Contact</NavigationMenuLink>
                </NavigationMenuItem>
                
                {/* social link */}
                 <NavigationMenuItem className='grid grid-flow-col'>
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]'  >
                   <a className="rounded-2 hover:font-semibold h-[25px] w-[25px] place-items-center" href="/">
              <Image
              src="/images/fb.png"
              alt='fav'
              width={20}
              height={20}/>
              </a>
                  </NavigationMenuLink>

                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]'  >
                   <a className="rounded-2 hover:font-semibold h-[25px] w-[25px] place-items-center" href="/">
              <Image
              src="/images/ins.png"
              alt='fav'
              width={20}
              height={20}/>
              </a>
                  </NavigationMenuLink>

                  
                  <NavigationMenuLink className='hover:font-semibold hover:bg-[#EDEDED]'  >
                   <a className="rounded-2 hover:font-semibold h-[25px] w-[25px] place-items-center" href="/">
              <Image
              src="/images/linkedin.png"
              alt='fav'
              width={20}
              height={20}/>
              </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>



              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
      </div>
      
  )
}

export default Header