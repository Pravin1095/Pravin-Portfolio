import styled, {css} from "styled-components";

export const HomeContainer = styled.div`
display : flex;
height: 600px;
background-color: #C4C4C4;
@media (max-width: 768px) {
    flex-direction : column;
    width : 100%;
    height: 100%;
    gap : 50px;
  }
`

export const Hi = styled.div`
font-size : 32px;
`

export const Name = styled.div`
font-size : 48px;
font-weight : bold;
font-family : "Motiva Sans";
`

export const NameContainer = styled.div`
display : flex;
flex-direction : column;
align-items: center;
justify-content : center;
background-color: #C4C4C4;
width: 50%;
@media (max-width: 768px) {
    width : 100%;
  }


`
export const ImageContainer = styled.div`
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;
background: linear-gradient(135deg, #0f0f0f, #1a1a1a, #111827);
width: 50%;
clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
gap: 25%;
@media (max-width: 768px) {
    width: 100%;
    clip-path: none; 
  }
`
export const ImageDiv = styled.div`
display : flex;

border-radius : 100%;
width : 50%;
`
export const NavFields = styled.div`
display : flex;
justify-content: right;
width : 100%;
gap : 3%;
margin-top : 2%;
padding-right : 5%;
position : fixed;
right : 0;
top : 0;
z-index : 1000;
@media (max-width: 768px) {
    display : none;
  }

`

export const NavButtons = styled.div`
color: #2563eb;
cursor : pointer;
font-size : 26px;
&:hover, &:focus {
    color: #FFFFFF;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
${(props) => props.highlight && css`
background-color: white;
color : #000000;
    border: 1px solid #C4C4C4;
    border-radius : 25px;
    padding : 5px;
    &:hover, &:focus {
    background-color: #22c55e;
    border-color: #22c55e;
      color: #ffffff;
  }
`}

`
export const IconDiv = styled.div`
display : flex;
flex-direction : row;
gap : 15px;
cursor : pointer;
margin-top : 5%;
`