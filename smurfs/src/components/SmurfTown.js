import React, { useContext } from 'react';
import SmurfContext from '../contexts/context';
import Smurf from './Smurf';
import styled from 'styled-components';

const VillageHeader = styled.h1`
    font-size: 1.8rem;
    color: white;
`

const SmurfBox = styled.div`
    padding: 3%;
`


export default function SmurfTown() {
  const { smurfs } = useContext(SmurfContext);
  console.log("comp", smurfs);
  return (
    <div>
      <VillageHeader>Smurf Village Residents</VillageHeader>
      <SmurfBox>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </SmurfBox>
    </div>
  );
}