import React from 'react';
import data from '../data/data.js';
function Home(props) {
  return (

    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
<h2 className="title">Welcome to edarty</h2>

<p> with edarty you can get </p>



    </div>

   


  );
}
export default Home