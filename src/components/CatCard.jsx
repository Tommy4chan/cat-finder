import React from 'react'
import { Link } from 'react-router-dom'

const CatCard = ({ cat }) => {
  return (
    <div className="col-lg-4 mb-4">
      <Link to={`/cat/${cat.id}`}>
        <div className="card h-100">
          <img src={cat.url} className="card-img-top object-fit-cover" style={{ height: '400px' }} />
        </div>
      </Link>
    </div>
  )
}

export default CatCard