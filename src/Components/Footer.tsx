// import react from 'react'
import Dropdown from './Dropdown';
import facebook from '../SVGs/facebook.svg'
import instagram from '../SVGs/instagram.svg'
import twitter from '../SVGs/twitter.svg'

const Categories = [
  { url: '#', text: 'Men ' },
  { url: '#', text: 'Women ' },
  { url: '#', text: 'Unisex ' },
  { url: '#', text: 'Footwear ' }


];
const Orders_Services = [
  { url: '#', text: 'Help ' },
  { url: '#', text: 'Shippings ' },
  { url: '#', text: 'Return Policy  ' },
  { url: '#', text: 'Storefinder ' },
  { url: '#', text: 'Size Charts ' }
];

const Footer = () => {
  return (
    // !-- FOOTER --
    <footer className="md:flex md:justify-between md:bottom-0  left-0 w-full fixed   bottom-0 bg-black pt-4">
      {/* <!-- FOOTER LINKS BIG SCREEN --> */}
      <div className="hidden md:flex container m-10 justify-between">
        <div className="text-white">
          <b>Categories</b>
          <br />

          <a href="">Men</a> <br />

          <a href="">Women</a> <br />

          <a href="">Unisex</a> <br />

          <a href="">Footwear</a> <br />
        </div>
        <div className="text-white">
          <b>Orders & Services</b>
          <br />
          <a href="">Help</a>
          <br />
          <a href="">Shipping</a>
          <br />
          <a href="">Returns</a>
          <br />
          <a href="">Storefinder</a>
          <br />
          <a href="">Size Charts</a>
          <br />
        </div>
        <div className="text-white text-center">
          <b className="bold">Follow Us</b>
          <br />
          <button>
            <img src={facebook} alt="Facebook Icon" />
          </button>
          <br />
          <button>
            <img src={twitter} alt="Twitter Icon" />

          </button>
          <br />
          <button>
            <img src={instagram} alt="Instagram Icon" />

          </button>
          <br />
        </div>
      </div>
      {/* <!-- END OF FOOTER LINKS BIG SCREEN --> */}

      {/* <!-- FOOTER LINKS SMALL SCREEN --> */}
      <div className="md:hidden text-center text-xl">
        <Dropdown buttonText="Categories" links={Categories} color="white" />
        <Dropdown buttonText="Orders & Services" links={Orders_Services} color="white" />
        <div className="text-white">
          <b className="bold">Follow Us</b>
          <br />
          <button>
            <img src={facebook} alt="Facebook Icon" />
          </button>
          <br />
          <button>
            <img src={twitter} alt="Twitter Icon" />

          </button>
          <br />
          <button>
            <img src={instagram} alt="Instagram Icon" />

          </button>
          <br />
        </div>
      </div>
      {/* <!-- END OF FOOTER LINKS SMALL SCREEN --> */}

      {/* <!-- JOIN US + EMAIL --> */}
      <div className="p-10">
        <div className="flex pb-2 justify-center">
          <input
            className="h-10 rounded-lg text-l w-60"
            type="text"
            placeholder="Enter Email"
          />
          <button
            className="text-white rounded-lg text-l h-10 w-20 border-solid border-2 border-white"
          >
            Join Us
          </button>
        </div>
        <div className="justify-center flex">
          <p className="text-white text-xs w-80 text-left">
            By signing up, you consent to receive emails about Urban Thread's
            latest collections, offers, and news, as well as information on
            how to participate in Urban Thread events, competitions or
            promotions. You have certain rights under applicable privacy laws,
            and can withdraw your consent at any time.
          </p>
        </div>
      </div>
      {/* <!-- END OF JOIN US + EMAIL --> */}
    </footer>
    // <!-- END OF FOOTER -->
  )
}

export default Footer


