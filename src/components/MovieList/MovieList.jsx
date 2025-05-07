import React, { useEffect, useState } from 'react'
import lodash from 'lodash'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'
import FilterGroup from '../FilterGroup/FilterGroup'


const MovieList = ({type, title}) => {
    const [movies, setMovies] = useState([])
    const [copyMovies, setcopyMovies] = useState([])
    const [minRating, setminRating] = useState(0)
    const [sort, setSort] = useState({
        by: 'default',
        order: 'asc'
    });
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=a3f728ee47bfaaf59c541cbe4b09cdaf`)
            .then((res) =>
                res.json()
            )
            .then((data) => {
                setMovies(data?.results)
                setcopyMovies(data?.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleFilter = (r) => {
        setEmpty(false)
        if (r === 'all') {
            setminRating(r)
            setcopyMovies(movies)
        }
        else {
            setminRating(r)
            const m = movies.filter(m => m.vote_average >= r);
            if (m.length == 0) {
                setEmpty(true)
            }
            setcopyMovies(m)
        }
    }

    useEffect(() => {
        if (sort.by !== 'default') {
            const sortedMovies = lodash.orderBy(copyMovies, [sort.by], [sort.order])
            setcopyMovies(sortedMovies)
        }
    }, [sort])

    const handleSort = (e) => {
        const { name, value } = e.target
        setSort((prev => ({ ...prev, [name]: value })))
    }




    return (
        <section className='movie_list' id={type}>
            <header className='align_center movie_list_header'>
                <h2 className='align_center movie_list_heading'>
                    {title}
                </h2>
                <div className="align_center movie_list_fs">
                    <FilterGroup ratingList={[8, 7, 6, 5]} minRating={minRating} onHandleFilter={handleFilter}></FilterGroup>

                    <select name="by" onChange={handleSort} value={sort.by} id="" className="movie_sorting">
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>

                    <select name="order" value={sort.order} onChange={handleSort} id="" className="movie_sorting">
                        <option value="asc">Asending</option>
                        <option value="desc">Desending</option>
                    </select>
                </div>
            </header>
            {
                empty && <p className='empty'>No Movies Found for the selected Rating..</p>
            }
            <div className="movie_cards">
                {
                    copyMovies.map(movie =>
                        <MovieCard movieList={movie} key={movie.id}></MovieCard>
                    )
                }
            </div>
        </section>
    )
}

export default MovieList
