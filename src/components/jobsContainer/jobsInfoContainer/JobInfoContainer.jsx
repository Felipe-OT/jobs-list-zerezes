import React, { useContext, useEffect, useState } from "react";
import JobContext from "../../../context/jobContext";

const JobInfoContainer = () => {
  const { selectedJob } = useContext(JobContext);
  const [showInfoScroll, setShowInfoScroll] = useState(true);

  return (
    <div className="hidden relative sm:w-full sm:flex lg:mt-[38px] xl:w-2/3 flex-col gap-3 overflow-y-hidden ">
      <div
        className={`${
          showInfoScroll ? "opacity-100" : "opacity-0"
        } absolute top-0 left-0 flex flex-row justify-between w-full px-8 py-4 bg-slate-500 border-b rounded-t-md z-50`}
      >
        <div>
          <h1 className="text-xl font-semibold">{selectedJob.title}</h1>
          <div className="flex flex-row gap-5">
            <p className="text-[#63B4FF] font-medium">
              {selectedJob.company_name}
            </p>
            <p className="text-[#63B4FF] font-medium">{selectedJob.location}</p>
          </div>
        </div>
        <div>
          <button className="bg-[#4D82AB] hover:bg-[#53a0e7] transition-all text-white font-semibold  rounded-xl p-3">
            Candidatar-se
          </button>
        </div>
      </div>
      <div className=" relative h-full overflow-y-scroll sm:flex flex-col gap-3 bg-white w-full rounded-md p-8">
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="text-[#63B4FF] font-medium">
              {selectedJob.company_name}
            </p>
            <p className="lg:hidden block text-[#63B4FF] font-medium">
              {selectedJob.location}
            </p>
            <div className="flex flex-col items-center lg:flex-row justify-between gap-5 mb-5 lg:mb-0 lg:gap-10">
              <h1 className="text-xl font-semibold">{selectedJob.title}</h1>
              <button className="bg-[#E4C392] hover:bg-[#3b81c4] transition-all text-base text-white  font-semibold flex flex-shrink-0 rounded-full p-2">
                Candidatar-se
              </button>
            </div>
            <p className="hidden lg:block text-[#63B4FF] font-medium">
              {selectedJob.location}
            </p>
          </div>
          <div
            className="text-[#515151] text-[14px]"
            dangerouslySetInnerHTML={{ __html: selectedJob.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default JobInfoContainer;
