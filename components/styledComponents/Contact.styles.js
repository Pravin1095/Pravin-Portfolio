import styled from "styled-components";

export const ContactButton = styled.button`
background-color: white;
display : flex;
align-items: center;
justify-content : center;
width: 25%;
transition : background-color 2s;
margin-top : 5%;

&:hover{
    background-color: yellow ;
}
`
export const ContactForm = styled.form`

display : flex !important;
flex-direction : column;
justify-content : center;
align-items: center;
`

export const ContactContainer = styled.div`
display : flex;
width : 100%;
flex-direction : column;
justify-content : center;
align-items: center;
`