import React from "react";
import './styles.scss';

interface ComponentProps {
    genres: string[];
}

export class MovieGenre extends React.Component<ComponentProps, any> {
    render() {
        return (
            <p className="card-subtitle text-muted">{this.props.genres.join(', ')}</p>
        )
    }
}