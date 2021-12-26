import React from 'react';
import data from '../data/data.js';
function Home(props) {
  return (
   <h1>hello {data[1].fisrtname} {data[1].lastName}</h1>
  );
}
export default Home