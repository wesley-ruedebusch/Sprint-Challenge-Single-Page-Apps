import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Buttons = styled.button`
margin-left: 2%;
margin-top: 5%;
border-radius: 5px;
color: white;
background-color: orange;
border: solid 2px purple;
`

const Page = styled.section`
border: solid 2px black;
background-color: white;
border-radius: 5px;
display:flex;
justify-content:center;
`

const Img = styled.img`
border: solid 2px black;
border-radius: 5px;
margin-bottom: 25px;
margin-left: 15%;
margin-top: 5%;
`

export default function WelcomePage() {
  return (
    <Page className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/Characters"><Buttons>Characters</Buttons></Link>
        <Link to="/Search"><Buttons>Search</Buttons></Link>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </Page>
  );
}
