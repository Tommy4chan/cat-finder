import { useState } from "react";
import BreedList from "../components/BreedsList";

const HomePage = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="mb-3">
            <label htmlFor="inputSearch" className="form-label">Enter cat breed</label>
            <input type="email" className="form-control" id="inputSearch" onChange={(event) => setSearch(event.target.value)} />
          </div>
        </div>
      </div>

      <BreedList search={search}/>
    </>
  )
}

export default HomePage