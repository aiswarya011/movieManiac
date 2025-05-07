
import './MovieCard.css'

const MovieCard = ({ movieList }) => {
   
    return (
        <a href="" className='movie_card'>
            <img src={`https://image.tmdb.org/t/p/w500/${movieList?.poster_path}`} alt="poster" className='movie_poster' />
            <div className="movie_details">
                <h3 className='movie_name'>{movieList?.original_title}</h3>
                <h3 className=' align_center movie_rate'>
                   <p>{movieList?.vote_average}</p>
                </h3>
                <p className='movie_des'>Release date: {movieList?.release_date}</p>
                {/* <p className='movie_des'>{movieList?.overview.slice(0, 100) + '...'}</p> */}
            </div>


        </a>
    )
}

export default MovieCard
