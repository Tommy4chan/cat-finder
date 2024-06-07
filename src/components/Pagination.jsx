import { useEffect, useState } from "react";


const Pagination = ({ currentPage, maxPages, setCurrentPage }) => {

  const [paginationLinks, setPagiantionLinks] = useState([]);

  useEffect(() => {
    let newPaginationLinks = [];

    newPaginationLinks.push(<li className={0 === currentPage ? 'page-item disabled' : 'page-item'} key={-1}><button className="page-link" onClick={prevButtonProccess}>Previous</button></li>);

    for (let page = 0; page < maxPages; page++) {
      newPaginationLinks.push(<li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}><button className="page-link" onClick={() => setCurrentPage(page)}>{page + 1}</button></li>);
    }

    newPaginationLinks.push(<li className={maxPages - 1 === currentPage ? 'page-item disabled' : 'page-item'} key={maxPages}><button className="page-link" onClick={nextButtonProccess}>Next</button></li>);
    setPagiantionLinks(newPaginationLinks);
  }, [maxPages, currentPage]);

  const prevButtonProccess = () => {
    setCurrentPage((prev) => {
      if (prev - 1 >= 0) {
        return prev - 1;
      }

      return 0
    });
  }

  const nextButtonProccess = () => {
    setCurrentPage((prev) => {
      if (prev + 1 < maxPages) {
        return prev + 1;
      }

      return prev
    })
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {paginationLinks}
      </ul>
    </nav>
  )
}

export default Pagination