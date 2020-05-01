import React, { useContext } from 'react';
import SmurfContext from '../contexts/context';
import Smurf from './Smurf';


export default function SmurfTown() {
  const { smurfs } = useContext(SmurfContext);
  console.log("comp", smurfs);
  return (
    <div>
      <h1>Smurf Village Residents</h1>
      <>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </>
    </div>
  );
}