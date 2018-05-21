import React from "react";
import './styles.scss';

export class MovieSearchControl extends React.Component {
    render() {
        return (
        <header className="p-4 green">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <span className="ntlabel">netflixroulette</span>
                    </div>
                </div>
                <div className="row">
                        <div className="col-sm-12">
                                <label htmlFor="movie-search" className="font-weight-bold">FIND YOUR MOVIE</label>
                                <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="movie-search" />
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-sm-6 filter-block">
                            <label className="d-inline-block mr-1">SEARCH BY</label>
                            <div className=" d-inline-block btn-group-toggle search-by" data-toggle="buttons">
                                        <label className="btn btn-sm btn-primary active">
                                            <input type="radio" name="options" id="by-title"  checked/> Active
                                        </label>
                                        <label className="btn btn-sm btn-primary">
                                            <input type="radio" name="options" id="by-genre" /> GENRE
                                        </label>
                            </div>
                        </div>
                        <div className="col-sm-6 text-right">
                            <button type="button" className="btn btn-primary px-5">SEARCH</button>
                        </div>
                </div>
            </div>         
        </header>
    )}
}