import React, { useEffect, useState } from 'react'
import BreedButtons from '../components/BreedButtons';
import BreedInfo from '../components/BreedInfo';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const CatPage = () => {
  const [cat, setCat] = useState(null);
  const { id: catId } = useParams();

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/images/${catId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setCat((await res.json()));
  };

  return (
    <>
      {cat ?
        <>
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

export default CatPage