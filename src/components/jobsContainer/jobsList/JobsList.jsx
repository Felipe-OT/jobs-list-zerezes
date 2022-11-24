import axios from "axios";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import JobContext from "../../../context/jobContext";
import Pagination from "./pagination/Pagination";
import SearchBar from "../../searchBar/SearchBar";
import JobCard from "./jobCard/JobCard";
import SearchContext from "../../../context/searchContext";
import JobsNotFound from "./jobsNotFound/JobsNotFound";

function JobsList() {
  const { setSelectedJob } = useContext(JobContext);
  const { searchInput } = useContext(SearchContext);
  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchHasValue, setSearchHasValue] = useState(false);

  // Variáveis de paginação
  const [postsPerPage] = useState(16);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [filteredJobs, setFilteredJobs] = useState([]);
  const currentJobs = jobsData.slice(indexOfFirstPost, indexOfLastPost);

  // Coleta os dados da api
  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(
          "https://www.arbeitnow.com/api/job-board-api?"
        );
        setJobsData(response.data.data);
        setSelectedJob(response.data.data[0]);
      } catch (e) {
        console.log(e);
      }
    };
    let unmounted = false;
    if (!unmounted) {
      getJobs();
    }
    return () => (unmounted = true);
  }, []);

  useEffect(() => {
    function FilteredData(filter) {
      let filtered = jobsData.filter((item) => {
        return item.tags
          .toString()
          .toLowerCase()
          .includes(filter.toLowerCase());
      });

      if (filter !== "") {
        setSearchHasValue(true);
        setFilteredJobs(filtered.slice(indexOfFirstPost, indexOfLastPost));
      } else {
        setSearchHasValue(false);
        setFilteredJobs([]);
      }
    }
    FilteredData(searchInput);
  }, [searchInput]);

   // Página atual
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Página anterior
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //Próxima página
  const nextPage = () => {
    if (filteredJobs.length > 0) {
      if (currentPage !== Math.ceil(filteredJobs.length / postsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (currentPage !== Math.ceil(jobsData.length / postsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  return (
    <div className="flex flex-col w-full sm:w-[70%] md:pt-[38px] xl:w-1/3 overflow-y-hidden">
      <SearchBar onChange={(filter) => filter} />
      <div className="text-center bg-[#F8D5A2] py-1 text-white font-medium rounded-t-[6px]">
        Vagas recém adicionadas
      </div>
      <div className="flex flex-col flex-grow  overflow-y-scroll">
        <div className="flex flex-col lg:gap-y-3">
          {searchHasValue == false ? (
            currentJobs.map((job, i) => <JobCard key={i} {...job} />)
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job, i) => <JobCard key={i} {...job} />)
          ) : (
            <JobsNotFound />
          )}
        </div>
        <div>
          <Pagination
            visibility={
              searchInput.length > 0 && filteredJobs.length == 0 ? false : true
            }
            postsPerPage={postsPerPage}
            totalPosts={
              filteredJobs.length > 0 ? filteredJobs.length : jobsData.length
            }
            currentPage={currentPage}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default JobsList;
