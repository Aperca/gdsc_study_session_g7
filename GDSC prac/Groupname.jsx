import React from "react";
import './Groupname.css';

export const Groupmem = () => {
  const Gseven = ['Adey', 'Abel', 'Abduselam', 'Bemnet'];

  return (
    <div className='React7'>
      <h2>Group 7 React members</h2>
      <ul>
        {Gseven.map((member, idx) => (
          <li key={idx}>{member}</li>
        ))}
      </ul>

      <img
        className="img"
        src="sunset.jpg"
        alt="Sunset Image"
      />
     <p>This is sunset image!</p>

    </div>
  );
}

export default Groupmem;