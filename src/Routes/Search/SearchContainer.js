/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import { movieApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter"

export default class extends React.Component{
    state = {
        movieResults : null,
        tvResults : null,
        searchTerm: "",
        error: null,
        loading: false
    }

   
    handleSubmit = event => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !== ""){
            this.searchByTerm()
        }
    };

    updateTerm = event => {
        const {target: {value}} = event;
        this.setState({
            searchTerm: value
        });
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({
            loading:true
        })
        try{
            const {data: {results: movieResults}} = await movieApi.search(searchTerm);
            const {data: {results: tvResults}} = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })   
        }catch{
            this.setState({
                error: "Can't find resluts"
            })
        }finally {
            this.setState({ loading: false });
          }
        };  

    render(){
        const {movieResults, tvResults, searchTerm, error, loading} = this.state;
        return(
            <SearchPresenter
            movieResults = {movieResults}
            tvResults ={tvResults}
            searchTerm ={searchTerm}
            error = {error}
            loading = {loading}
            handleSubmit ={this.handleSubmit}
            updateTerm = {this.updateTerm}
            />
        )
    }
}
