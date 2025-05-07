import './FilterGroup.css'

const FilterGroup = ({ minRating, onHandleFilter, ratingList }) => {
    return (
        <div>
            <ul className="align_center movie_filter">
                <li className={minRating === 'all' ? "movie_list_item active" : 'movie_list_item'} onClick={() => onHandleFilter('all')}>All</li>
                {
                    ratingList.map((rating) => (
                        <li
                            key={rating}
                            className={
                                minRating === rating
                                    ? "movie_list_item active"
                                    : 'movie_list_item'
                            }
                            onClick={() => onHandleFilter(rating)}>
                            {rating}+
                        </li>
                    ))
                }


            </ul>
        </div>
    )
}

export default FilterGroup
