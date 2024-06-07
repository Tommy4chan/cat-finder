import { Link } from 'react-router-dom';
import Error404 from '../assets/images/Error404.jpg';

const NotFoundPage = () => {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <img src={Error404} />
      </div>
      <div className='text-center m-3'>
        <Link
          to="/"
          className="btn btn-light"
        >Go Back</Link>
      </div>
    </>
  )
}

export default NotFoundPage