import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H3 = styled.h3`
  font-size: 2.5em;
  margin-top: 3vh;
  
  @media (min-width: 250px) and (max-width: 400px) {
   font-size: 1.5em;   
  }
`;