/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import ErrorMessage from "Components/ErrorMessage";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
 padding : 0px 20px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => (
    <>
    <Helmet><title>Show | Hunlix</title></Helmet>
    {loading ? (<Loader/>) : (
    <Container>
        {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title = "Popular Shows">
                {popular.map(show => <Poster
                key ={show.id}
                id ={show.id}
                imageUrl ={show.poster_path}
                title ={show.original_name}
                rating ={show.vote_average}
                year = {show.first_air_date.substring(0, 4)}
                />)}
            </Section>
        )}
        {airingToday && airingToday.length >0 && (
            <Section title = "Airing Today">
                {airingToday.map(show => <Poster
                key ={show.id}
                id= {show.id}
                imageUrl = {show.poster_path}
                title = {show.original_name}
                rating = {show.vote_average}
                year = {show.first_air_date.substring(0, 4)}
                />)}
            </Section>
        )}
        {error && <ErrorMessage color = "#f1c40f" text ={error}/>}
    </Container>
)}
    </>
)

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default TVPresenter;