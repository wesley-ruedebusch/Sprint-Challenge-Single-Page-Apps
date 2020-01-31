import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {

    const Card = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: orange;
      margin: 4% 15%;
      border: solid 2px white;
      font-weight: 400;
      font-size: 20px;
      `
    const Header =styled.h2`
      font-size: 35px;
      `
    
  return (
    <Card>
      <Header>{props.name}</Header>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Location: {props.location}</p>
    </Card>
  )
}
