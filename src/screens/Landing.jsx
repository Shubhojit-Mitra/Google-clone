import { useState } from 'react'

export const Landing = () => {
  const [glow, setGlow] = useState(false);
  const [color, setColor] = useState('');
  const [appliedColor, setAppliedColor] = useState(''); // New state

  const handleClick = () => {
    if (color.toLowerCase() === 'google' || color.toLowerCase() === 'og') {
      window.open('http://www.google.com', '_blank'); // Open in new tab
    } else if (color.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
      setGlow(!glow);
      setAppliedColor(color); // Update appliedColor when button is clicked
    } else {
      window.open('http://' + color + '.com', '_blank'); // Open searched term as a URL in new tab
    }
  };

  return (
    <>
      <div style={{color: glow ? appliedColor : 'initial'}} className="text-3xl font-bold">
        <h1> MyGoogle </h1>
      </div>
      <div className='mt-20 w-50'>
        <div className="flex items-center mt-4"></div>
          <input
            type="text"
            placeholder="Search Here"
            className="rounded-l-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-50"
            onChange={(e) => setColor(e.target.value)}/>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full ml-2" onClick={handleClick}>
            Search
          </button>
      </div>
    </>
  )
}