import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

import JobContext from "../../../context/jobContext";
import JobCard from "./jobCard/JobCard";
import Pagination from "./pagination/Pagination";

const JobsList = () => {
  const { setSelectedJob } = useContext(JobContext);
  const messagesEndRef = useRef(null);
  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Variáveis de paginação
  const [postsPerPage] = useState(16);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [filteredJobs, setFilteredJobs] = useState([]);
  const currentJobs = jobsData.slice(indexOfFirstPost, indexOfLastPost);
  const currentFiltered = filteredJobs.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    // Coleta os dados da api
    const getJobs = async () => {
      try {
        const response = await axios.get(
          "https://www.arbeitnow.com/api/job-board-api?"
        );
        console.log(response.data);
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    <div className="flex flex-col w-full sm:w-[70%] lg:pt-[38px] xl:w-1/3 overflow-y-hidden">
      <div className="text-center bg-[#F8D5A2] py-1 text-white font-medium rounded-t-[6px]">
        Vagas recém adicionadas
      </div>
      <div
        ref={messagesEndRef}
        className="flex flex-col flex-grow  overflow-y-scroll overflow-x-hidden"
      >
        <div className="flex flex-col lg:gap-y-3">
          {jobsData.length > 0 &&
            currentJobs.map((job, i) => <JobCard key={i} {...job} />)}
        </div>
        <div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={jobsData.length}
            currentPage={currentPage}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default JobsList;
