import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  min-width: 320px;
  padding: 0 10px 0 4rem;
  @media screen and (min-width: 679px) {
    min-width: 679px;
    padding: 0 20px 0 4rem;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    padding: 0 30px 0 4rem;
  }
`;
