import {Link} from 'react-router-dom'

import './index.css'

const MovieCard = props => {
  const {details} = props
  const {id, posterPath, title, voteAverage} = details
  return (
    <li className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="poster-size"
      />
      <p>{title}</p>
      <p>{voteAverage}</p>
      <Link to={`/movie/${id}`}>
        <button className="view-details" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}
export default MovieCard
