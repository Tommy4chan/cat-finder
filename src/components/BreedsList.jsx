import { useEffect, useState } from 'react';
import breeds from '../breeds.json';
import BreedCard from './BreedCard';

const BreedList = ({ search }) => {
  const [filteredBreeds, setFilteredBreeds] = useState('');

  useEffect(() => {
    setFilteredBreeds(breeds.filter((breed) => breed.name.toLowerCase().startsWith(search.toLowerCase())));
  }, [search]);

  return (
    <div className="row">
      {
        filteredBreeds.length != 0 ?
          filteredBreeds.map((breed, index) => <BreedCard breed={breed} key={index} />)
          : <p>No breeds found</p>}
    </div>
  )
}

export default BreedList