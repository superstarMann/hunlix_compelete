/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  font-size: 28px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export default () => <Container><span role = "img" aria-label = "Loading">🙇‍♂️</span></Container>