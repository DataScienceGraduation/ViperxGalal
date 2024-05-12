import { useState } from 'react';

function Dropdown({ buttonText, links, color }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonHover = () => {
    setShowDropdown(true);
  };

  const handleDropdownHover = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="dropdown relative" onMouseLeave={handleMouseLeave}>
      <button
        className={`dropbtn text-${color} font-bold py-2 px-4 rounded`}
        onMouseEnter={handleButtonHover}
      >
        {buttonText}
      </button>
      {showDropdown && (
        <div
          className="dropdown-content  absolute bg-gray-100 text-black rounded -mt-1"
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleMouseLeave}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className=" list-item list-none text-center py-2   hover:bg-gray-300"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
