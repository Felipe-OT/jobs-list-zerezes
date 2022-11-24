import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import JobContext from "../../../context/jobContext";

const JobInfoContainer = () => {
  const { selectedJob, jobWasClicked, setJobWasClicked } = useContext(JobContext);

  const [showInfoScroll, setShowInfoScroll] = useState(false);
  const [mobileVisibility, setMobileVisibility] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (jobWasClicked == true) {
      const handleInfoModal = () => {
        setMobileVisibility(true)
      };
      handleInfoModal();
    } 
  }, [jobWasClicked]);

  

  const handleScroll = useCallback((e) => {
    if (e.currentTarget.scrollTop > 135) {
      setShowInfoScroll(true);
    } else {
      setShowInfoScroll(false);
    }
  }, []);

  return (
    <div
      className={`${
        mobileVisibility == true ? "flex absolute" : "hidden"
      } sm:relative sm:w-full sm:flex md:mt-[38px] xl:w-2/3 flex-col gap-3 overflow-y-hidden`}
    >
      <div
        className={`${
          showInfoScroll ? "opacity-100 hidden" : "opacity-0 hidden"
        } absolute top-0 left-0 flex flex-row justify-between w-[calc(100%-20px)] px-8 py-4 bg-white border-b rounded-t-md z-50`}
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
        <div className="flex flex-shrink-0 max-h-10 items-center">
          <button className="bg-[#E4C392] hover:bg-[#eecb98] transition-all text-white font-semibold rounded-xl px-3 py-2">
            Candidatar-se
          </button>
        </div>
      </div>
      <div
        onScroll={handleScroll}
        className=" relative h-full overflow-y-scroll sm:flex flex-col gap-3 bg-white w-full rounded-md p-8"
      >
        <div className="sm:hidden">
          <button onClick={() => {setMobileVisibility(false); setJobWasClicked(false)}}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-8 ">
            <div className="flex flex-row gap-6">
              <p className="text-[#63B4FF] font-medium">
                {selectedJob.company_name}
              </p>
              <p className="lg:hidden block text-[#63B4FF] font-medium">
                {selectedJob.location}
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-5 mb-5 lg:flex-row lg:mb-0 lg:gap-10">
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
