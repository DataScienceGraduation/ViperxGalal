import react from "react";
import Dropdown from './Dropdown';

import logo from '../Images/image.png'
import search from '../SVGs/search.svg'
import wishlist from '../SVGs/wishlist.svg'
import cart from '../SVGs/cart.svg'
import profile from '../SVGs/profile.svg'
import bars from '../SVGs/bars.svg'




// interface navprops{
//     color : string
// }


  const MenLinks = [
    { url: '#', text: 'Link1 ' },
    { url: '#', text: 'Link2 ' },
    { url: '#', text: 'Link3 ' }
  ];
  const womenLinks = [
    { url: '#', text: 'Link1 ' },
    { url: '#', text: 'Link2 ' },
    { url: '#', text: 'Link3 ' }
  ];
  const unisexLinks = [
    { url: '#', text: 'Link1 ' },
    { url: '#', text: 'Link2 ' },
    { url: '#', text: 'Link3 ' }
  ];

  const footwearLinks = [
    { url: '#', text: 'Link1 ' },
    { url: '#', text: 'Link2 ' },
    { url: '#', text: 'Link3 ' }
  ];


export const Nav = () =>
    {
        return(
        <nav className="flex justify-between items-center  top-0 left-0 fixed w-full bg-white p-5 h-20">
        {/* !-- OPEN SIDEBAR BUTTON & BRAND LOGO  -- */}
        <div className="flex">
          <button className="bg-slate-800"> 
          {/* button className="bg-slate-800" /*onClick="openSB" */}

            <img src={bars} alt="Bars Icon" />
          </button>

          <div className="hidden md:flex w-52">
            <a href="Homepage.html"
              ><img src={logo} alt="brand logo" />
            </a>
          </div>
        </div>
        <div className="w-52 md:hidden">
          <a href="Homepage.html"
            ><img src={logo} alt="brand logo" />
          </a>
        </div>
          {/* !-- END OF OPEN SIDEBAR BUTTON & BRAND LOGO -- */}

        {/* !-- CATEGROIES & PARTITIONS --   */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
        <Dropdown buttonText="Men" links={MenLinks} color='Black' />
        <Dropdown buttonText="Women" links={womenLinks} color='Black'/>
        <Dropdown buttonText="Unisex" links={unisexLinks} color='Black'/>
        <Dropdown buttonText="Footwear" links={footwearLinks} color='Black'/>
        </div>
          {/* !-- END OF CATEGROIES & PARTITIONS   */}

        {/* !-- UPPER RIGHT OPTIONS : SEARCH & CART & ACCOUNT   */}
        <div className="  w-30 h-30 flex space-x-1">
        <button> 
              <img src={search} alt="Search icon" />
        </button>
          <button>
          {/* button //onClick="openWish" */}
           <img src={wishlist} alt="Wishlist Icon" />
          </button>
          <button > 
          {/* button  //onClick="openCart" */}
           <img src={cart} alt="Cart icon" />
          </button>

            <button>
            <a href="Login.html"><img src={profile} alt="Profile Icon" />
            </a>
            </button>
      
        </div>
        {/* !-- END OF UPPER RIGHT OPTIONS  -- */}
        </nav>
        )
    }
    export default Nav;