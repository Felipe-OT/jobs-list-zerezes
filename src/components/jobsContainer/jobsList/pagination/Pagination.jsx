const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  previousPage,
  nextPage,
  visibility
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={visibility ? "block py-5 bg-white" :"hidden"}>
      <ul className="flex flex-row justify-center items-center gap-4">
        <li className="cursor-pointer" onClick={previousPage}>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z"
              stroke="#DADADA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 7L7.5 11L11.5 15"
              stroke="#DADADA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 11H7.5"
              stroke="#DADADA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <div className="flex flex-row justify-center gap-2">
        {pageNumbers.map((number, i) => (
          <div key={i} className={`w-[25px] h-[25px] flex rounded-full cursor-pointer ${currentPage == i + 1 ? 'bg-[#F8D5A2] text-white' : ''}`} onClick={() => paginate(number)}>
              <li className="mx-auto" key={number} >
                {number}
              </li>
          </div>
        ))}
        </div>
        
        <li className="cursor-pointer" onClick={nextPage}>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z"
              stroke="#DADADA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 15L15.5 11L11.5 7"
              stroke="#DADADA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 11H15.5"
              stroke="#DADADA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
