import React from 'react'
import styled from 'styled-components';

const SmurfContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 2px black;
    width: 30%;
    margin-left: 35%;
    background-color: white;
`

export default function Smurf(props) {
    return (
        <SmurfContainer>
            <h3>Name: {props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </SmurfContainer>
    )
}