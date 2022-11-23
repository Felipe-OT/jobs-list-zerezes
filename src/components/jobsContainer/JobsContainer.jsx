import { useEffect, useState, useRef } from "react";
import JobsList from "./jobsList/JobsList";
import JobInfoContainer from "./jobsInfoContainer/JobInfoContainer";
import { JobProvider } from "../../context/jobContext";

const JobsContainer = () => {
  return (
    <div className="container flex flex-col mx-auto xl:mx-32 2xl:mx-64 h-full">
      <div className="flex flex-row justify-center lg:gap-10 flex-grow overflow-y-hidden">
        <JobProvider>
          <JobsList />
          <JobInfoContainer />
        </JobProvider>
      </div>
    </div>
  );
};

export default JobsContainer;
