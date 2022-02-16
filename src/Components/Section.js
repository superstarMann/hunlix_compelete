/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
`;

const Title = styled.span`
 font-size: 20px;
 font-weight: bold;
 `;

const Grid = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(auto-fill, 125px);
grid-gap: 25px;
@media screen and (max-width: 32rem) {
    grid-template-columns: repeat(2, 1fr);
    padding: 5px;
 }
`;

const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>    
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;