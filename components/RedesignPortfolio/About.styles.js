import styled from "styled-components"

export const AboutContainer = styled.div`
display : flex;
height: 600px;
align-items : center;
justify-content : center;
font-size : 20px;
background-color: #C4C4C4;
flex-direction : column;
gap: 10px;
`

export const AboutText = styled.div`
width : 75%;
font-family : "Motiva Sans";
`
export const AboutHeader = styled.h2`

`

export const ResumeText = styled.p`
  font-size: 18px;
  color: #333; /* Or your preferred text color */
  margin-top: 20px;
  line-height: 1.6;
`;

export const ResumeLink = styled.a`
  color: #2563eb; /* Using that Electric Blue we discussed */
  font-weight: 600;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #1d4ed8;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #2563eb;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;