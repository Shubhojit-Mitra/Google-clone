import { useState } from 'react'


export const Landing = () => {
  const [glow, setGlow] = useState(false);
  const [color, setColor] = useState('');
  const [appliedColor, setAppliedColor] = useState('');

  const handleClick = () => {
    if (color.toLowerCase() === 'google' || color.toLowerCase() === 'og') {
      window.open('http://www.google.com', '_blank');
    } else if (color.toLowerCase() === '') {
      setGlow(true);
      setAppliedColor('#ffffff');
    } else if (color.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
      setGlow(!glow);
      setAppliedColor(color);
    } else {
      window.open('http://' + color + '.com', '_blank');
    }
  };

  return (
    <>
      <div style={{color: glow ? appliedColor : 'initial'}} className="text-3xl font-bold">
        <h1> MyGoogle </h1>
      </div>
      <div className='mt-20 w-50 flex'> {/* Add flex here */}
        <input
          type="text"
          placeholder="Search Here"
          className="rounded-l-full py-4 px-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow"
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full ml-2" onClick={handleClick}>
          <img src={"/search.png"} alt="Search" />
        </button>
      </div>
    </>
  )
}