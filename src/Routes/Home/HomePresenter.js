/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import ErrorMessage from "Components/ErrorMessage";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
 padding: 0px 20px;

`

const HomePresenter =({nowPlaying, upcoming, popular, error, loading}) => (
    <>
    <Helmet><title>Movie | Hunlix</title></Helmet>
    {loading ? (<Loader/>) : (
    <Container>
    {nowPlaying && nowPlaying.length > 0 && (
        <Section title = "Now Playing">
         {nowPlaying.map(movie => <Poster 
             key={movie.id} 
             id={movie.id}
             title ={movie.original_title} 
             imageUrl={movie.poster_path} 
             rating= {movie.vote_average} 
             year ={movie.release_date.substring(0,4)} 
             isMovie ={true} 
             />)}
        </Section>
    )}
    {upcoming && upcoming.length > 0 && (
        <Section title = "Up Coming">
         {upcoming.map(willMovie => <Poster 
          key = {willMovie.id}
          id={willMovie.id}
          title ={willMovie.original_title}
          imageUrl ={willMovie.poster_path}
          rating = {willMovie.vote_average}
          year ={willMovie.release_date.substring(0, 4)}
          isMovie = {true}
         />)}
        </Section>
    )}
     {popular && popular.length > 0 && (
         <Section title = "Popular">
          {popular.map(fav => <Poster
           key ={fav.id}
           id= {fav.id}
           title ={fav.original_title}
           imageUrl ={fav.poster_path}
           rating= {fav.vote_average}
           year ={fav.release_date.substring(0, 4)}
           isMovie ={true}
          /> )}
         </Section>
     )}
      {error && <ErrorMessage color="#e74c3c" text ={error}/>} 
    </Container>
)}
    </>
)

HomePresenter.propTypes = {
     nowPlaying: PropTypes.array,
     upcoming: PropTypes.array,
     popular: PropTypes.array,
     error: PropTypes.string,
     loading: PropTypes.bool.isRequired

}

export default HomePresenter;