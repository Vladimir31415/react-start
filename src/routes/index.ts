import { App } from "../components/App";
import MovieSearch from "../components/MovieSearch";
import { MovieDetails } from "../components/MovieDetails";

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/search',
                component: MovieSearch
            },
            {
                path:'/movie/:id',
                component: MovieDetails
            }
        ]
    }
]

export default routes;