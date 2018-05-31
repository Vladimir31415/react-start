import React from "react";
import {connect} from 'react-redux'
import { MoviesState } from "../../interfaces/state";

interface ComponentProps {
    totalNumber: number;
}

interface ComponentState {}

class Total extends React.Component<ComponentProps, ComponentState> {

    public render() {
        return (
            <div>{this.props.totalNumber} {this.props.totalNumber === 1 ? 'movie' : 'movies'} found</div>
        )
    }
}

const mapStateToProps = (state: MoviesState) => {
    return {
        totalNumber: state.movies.collection.total
    }
}

export default connect(mapStateToProps, null)(Total)