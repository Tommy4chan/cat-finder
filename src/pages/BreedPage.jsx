import { useParams } from "react-router-dom";
import breeds from '../breeds.json';
import BreedInfo from "../components/BreedInfo";
import BreedButtons from "../components/BreedButtons";
import { useEffect, useState } from "react";
import CatCard from "../components/CatCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const BreedPage = () => {
  const [cats, setCats] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPages, setMaxPages] = useState(0);

  const { id: breedId } = useParams();

  const breed = breeds.filter((breed) => breed.id === breedId)[0];

  useEffect(() => {
    const getCatsByBreed = async () => {
      setCats(null);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/images/search?format=json&limit=9&page=${currentPage}&order=ASC&include_breeds=0&breed_ids=${breedId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY,
        },
      });

      setCats(await res.json());
      setMaxPages(Math.ceil(res.headers.get('pagination-count') / 9));
    };

    getCatsByBreed();
  }, [currentPage]);

  return (
    <>
      <BreedInfo breed={breed} isShowProgress={false} />
      <BreedButtons breed={breed} />
      <div className="row my-3">
        {cats ? cats.map((cat) => <CatCard key={cat.id} cat={cat} />) : <Loader />}
      </div>
      {!maxPages ||
        <Pagination currentPage={currentPage} maxPages={maxPages} setCurrentPage={setCurrentPage}/>
      }
    </>
  )
}

export default BreedPage