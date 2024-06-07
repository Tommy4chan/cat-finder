import { Link } from "react-router-dom"

const BreedButtons = ({ breed }) => {
  return (
    <div className="d-flex gap-1 my-1 flex-wrap">
      <Link to={`/breed/${breed.id}`} className="btn btn-primary">More</Link>
      <a href={breed.vetstreet_url} className="btn btn-success">Vetstreet</a>
      <a href={breed.wikipedia_url} className="btn btn-secondary">Wikipedia</a>
    </div>
  )
}

export default BreedButtons