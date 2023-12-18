import {Link} from 'react-router-dom'

import './index.css'

const MovieCard = props => {
  const {details} = props
  const {id, poster_path, title, vote_average} = details
  // const rating = Math.round(vote_average)
  return (
    <li className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="poster-size"
      />
      <p>{title}</p>
      <p>{vote_average}</p>
      <Link to={`/movie/${id}`}>
        <button className="view-details">View Details</button>
      </Link>
    </li>
  )
}
export default MovieCard
