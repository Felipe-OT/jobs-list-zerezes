import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'

import JobCard from "./jobCard/JobCard";

const JobsList = () => {
    const messagesEndRef = useRef(null);
    const [jobsData, setJobsData] = useState([]);



  useEffect(() => {
    // Coleta os dados da api
    const getJobs = async () => {
      try {
        const response = await axios.get(
          "https://www.arbeitnow.com/api/job-board-api?"
        );
        console.log(response.data);
        setJobsData(response.data.data);

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
          {jobsData.length > 0
            ? jobsData.map((job, i) => <JobCard key={i} {...job} />)
            : jobsData.map((job, i) => <JobCard key={i} {...job} />)}
        </div>
      </div>
    </div>
  );
};

export default JobsList;
