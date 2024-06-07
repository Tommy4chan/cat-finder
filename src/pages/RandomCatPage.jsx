import React, { useEffect, useState } from 'react'
import BreedButtons from '../components/BreedButtons';
import BreedInfo from '../components/BreedInfo';
import Loader from '../components/Loader';

const RandomCatPage = () => {

  const [cat, setCat] = useState(null);

  useEffect(() => {
    getRandomCat();
  }, []);

  const getRandomCat = async () => {
    setCat(null);
    const res = await fetch('/api/images/search?format=json&has_breeds=true', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'live_dqAoVZ0P5ONROkDu20DEr2vyHUwPJ8Ew3nY2zkbshBUSSHkRfNfUZNhVttrBf7Ce',
      },
    });

    setCat((await res.json())[0]);
  };

  return (
    <>
      {cat ?
        <>
          <div className="d-flex justify-content-center">
            <button className='btn btn-danger mb-1' onClick={getRandomCat}>New cat</button>
          </div>
          <img src={cat.url} className='w-75 mx-auto d-block' />
          <div>
            <div className="d-flex justify-content-center">
              <BreedButtons breed={cat.breeds[0]} />
            </div>
          </div>
          <BreedInfo breed={cat.breeds[0]} />
        </>
        :
        <Loader />
      }
    </>
  )
}

export default RandomCatPage