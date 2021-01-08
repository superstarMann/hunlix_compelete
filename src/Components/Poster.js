/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const Container = styled.div`
 font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
 font-size: 15px;
 position: absolute;
 bottom: 5px;
 right: 5px;
 transition: opacity 0.1s linear;
`;

const ImgContainer = styled.div`
 position: relative;
 &:hover {
     ${Image} {
         opacity: 0.3;
     }
     ${Rating} {
         opacity: 0.3;
     }
 }
 margin-bottom: 5px;
`;

const Title = styled.span`
 display : block;
 margin-bottom: 3px;
`;

const Year = styled.span`
 font-size: 10px;
 color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
    <Link to = {isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
        <ImgContainer>
         <Image bgUrl = {imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../noPoto/noPosterSmall.png")}/>  
         <Rating>
             <span role ="img" aria-label = "rating">
                 👍
             </span>{""}{rating}/10
         </Rating>
        </ImgContainer>
        <Title>{title.length > 18 ? `${title.substring(0, 15)}...` : title}
        </Title>
        <Year>{year}</Year>
    </Container>
    </Link>
)

Poster.propTypes ={
    id: PropTypes.number.isRequired,
    imgeUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster