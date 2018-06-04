import React from "react";
import './styles.scss';

interface ComponentProps {
    rating: number;
}

interface ComponentState {}

export class MovieRating extends React.Component<ComponentProps, ComponentState> {
    render() {
        return (
            <div className="rating-badge p-2">{this.props.rating.toFixed(1)}</div>
        )
    }
}