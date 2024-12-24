import styled from "styled-components";


export const LogoDiv = styled.div`
  text-align: center;
`;

export const MenuContainer = styled.div`
  background-color: #0d0200;
  margin:0;
`;

export const MenuSection = styled.div`
  height: 100vh;
  position: left;
  background-color: #1b0905;
  padding-top: 5vh;
  box-sizing: border-box;
  font-size: 1.2em;
  border-right: 2px solid #0d0200;
  &::after {
    content: '';
    top: 0;
    margin-left: 18vw;
    width: 3px;
    background-color: rgb(7, 57, 60);
  }
  h1 {
    margin: auto; /* Removed quotes */
  }
  ul {
    list-style-type: none; /* Removed quotes */
  }
  li {
    margin-top: 5vh; /* Removed quotes */
  }

  @media (min-width: 250px) and (max-width: 600px) {
    margin-left: 15vw;
    border-right: 2px solid #0d0200;
  }
`;

export const MenuItem = styled.li`
  list-style-type: none;
  border: 0px solid black;
  border-radius: 8px;
  transition: background-color 0.3s;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin: auto;
  margin-left: -1.4vw;
  &:hover {
    background-color: rgba(7, 57, 60, 0.3);
  }

  @media (min-width: 250px) and (max-width: 600px) {
      width: 10vw;
      font-size: 1.2em;
  }
`;

export const SelectedMenuItem = styled.li`
  list-style-type: none;
  border: 0px solid black;
  border-radius: 8px;
  transition: background-color 0.3s;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin: auto;
  margin-left: -1.4vw;
  background: rgba(7, 57, 60, 0.3);

  @media (min-width: 250px) and (max-width: 600px) {
      width: 10vw;
      font-size: 1.2em;
  }
`;

export const H4 = styled.h3`
  color: #941b05;
  font-size: 1.9em;
  margin-top: 3vh;
`;

export const MenuLogo = styled.h5`
  font-size: 1.6em;
  color: #fa826d;
  margin: auto;
  margin-bottom: 2vh;
  @media (min-width: 250px) and (max-width: 600px) {
    font-size: 1.4em;
  }
`;

export const HIDE = styled.h5`
  color: #fdd2cf;
  font-size: 0.7em;
  margin-top: -2vh;

  @media (min-width: 250px) and (max-width: 600px) {
    display: none;
  }
`;

export const GridDiv = styled.div`
  margin-top: 0vh;
  height: 100vh;
  width: 70vw;
  margin-left: -20vw;
`;

export const ToolBar = styled.div`
  background: #fdd2cf;
  width: 15vw;
  margin-left: -23.5vw;
  height:100vh;
  border-left: 2px solid #0d0200;
  padding-top: 10vh;
`;

export const ProcessOption = styled.div`
  width: 150px;
  background: #5AAA95;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  font-size: 1em;
  font-weight: bold;
  color: #fdd2cf;
  border-radius: 4px;
  margin-bottom: 15vh;
`;

export const DecisionOption = styled.div`
  width: 70px;
  height: 70px;
  background: #697A21;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  font-size: 0.8em;
  font-weight: bold;
  color: #000;
  transform: rotate(45deg);
  border: 1px solid #697A21;
  border-radius: 5px;
  margin:auto;
  margin-top: 5vh;
`;

export const ShapesTitle = styled.h5`
  color: #0d0200;
  font-size: 1.3em;
  margin: auto;
  text-align: center;
  margin-bottom: 5vh;
`;