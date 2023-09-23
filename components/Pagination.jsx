
const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  // Calculating the total number of pages
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  console.log(currentPage)

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {/* Display "Précédent" button if current page is 1 */}
        {currentPage > 1 ? (
          <li className={ `page-item` }>
            <a
              onClick={() => paginate(currentPage - 1)}
              href="#!"
              className="page-link"
            >
              Précédent
            </a>
          </li>
        ) : (
          <></>
        )}

        {/* Display "Suivant" button if current page is the last page */}
        {currentPage < pageNumbers ? (
          <li className={ `page-item` }>
            <a
              onClick={() => paginate(currentPage + 1)}
              href="#!"
              className="page-link"
            >
              Suivant
            </a>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;