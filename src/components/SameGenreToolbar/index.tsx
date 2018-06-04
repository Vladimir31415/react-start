import React from "react";

interface ComponentProps {
    genre: string;
}

export class SameGenreToolbar extends React.Component<ComponentProps, any> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row same-genre-topbar p-2">
                    <div className="col-sm-12 text-center">
                        <span className="font-weight-bold">Films by {this.props.genre} genre</span>
                    </div>
                </div>
            </div>
        )
    }
}