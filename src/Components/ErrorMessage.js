/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
 width: 100%vw;
 justify-content: center;
 display: flex;
`;

const Text = styled.span`
 color: ${props => props.color}
`

const ErrorMessage = ({color, text}) => {
    <Container>
      <Text color = {color}>{text}</Text>
    </Container>
}

ErrorMessage.propyTypes ={
    text : PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default ErrorMessage;