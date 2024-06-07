import BreedButtons from './BreedButtons'

const BreedCard = ({ breed }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card h-100">
        <img src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`} className="card-img-top object-fit-cover" style={{ height: '300px' }} />
        <div className="card-body">
          <h5 className="card-title">{breed.name}</h5>
          <p className="card-text">{breed.description}</p>
        </div>
        <div className="card-footer">
          <BreedButtons breed={breed} />
        </div>
      </div>
    </div>
  )
}

export default BreedCard