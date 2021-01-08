/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";
import ErrorMessage from "Components/ErrorMessage";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
 padding: 0px 20px;
`
const Form = styled.form`
 margin-bottom: 20px;
 width: 100%; 
`

const Input = styled.input`
 all: unset;
 font-size: 20px;
 width: 100%;
`;

 
const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm }) =>  (
        <>
        <Helmet><title>Search | Hunlix</title></Helmet>
        {(<Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? (<Loader />) : (<>
            {movieResults && movieResults.length > 0 && (
                <Section title="Movie Results">
                    {movieResults.map(show =><Poster
                    key = {show.id}
                    id = {show.id}
                    imageUrl ={show.poster_path}
                    title ={show.original_title}
                    rating ={show.vote_average}
                    year ={show.release_date.substring(0,4)} 
                    isMovie ={true}
                    />)}
                </Section>
            )}
            {tvResults && tvResults.length > 0 && (
                <Section title="TV Results">
                    {tvResults.map(show => 
                    <Poster
                    key = {show.id}
                    id = {show.id}
                    imageUrl ={show.poster_path}
                    title ={show.original_title}
                    rating ={show.vote_average}
                    year = {show.first_air_date.substring(0, 4)}
                    />)}
                </Section>
            )}
            {error && <ErrorMessage color ="#f1c40f" text={error}/>}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
            <ErrorMessage text="Nothing Found" color = "#e74c3c"/>
        )} 
        </>)}
    </Container>)}
        </>
    )

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};
/* 렌더링인 안되는 부분(추후 고치기)
{error && <ErrorMessage color ="#f1c40f" text={error}/>}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
            <ErrorMessage text="Nothing Found" color = "#e74c3c"/>
        )} 
*/
export default SearchPresenter;

