import React, { useContext } from "react";
import JobContext from "../../../../context/jobContext";

const JobCard = (props) => {

  const { title, description, company_name, job_types, location, tags } = props;
  const { setSelectedJob } = useContext(JobContext);

  return (
    <button
      onClick={() => setSelectedJob(props)}
      className="flex flex-col gap-3 bg-white  w-full py-3 px-3 border-b cursor-pointer lg:rounded-md hover:bg-[#FFF6E9]"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-2">
          {job_types.length > 0 ? (
            job_types.map(
              (type, i) =>
                i < 2 && (
                  <span
                    key={i}
                    className="bg-[#F1CE99] leading-normal text-white font-medium px-3 rounded-3xl border border-[#EAEAEA] text-ellipsis overflow-hidden max-h-[26px]"
                  >
                    {type.replace(type[0], type[0].toUpperCase())}
                  </span>
                )
            )
          ) : (
            <span className="bg-[#978c6d81] text-white leading-normal font-medium px-3 rounded-3xl border border-[#EAEAEA] text-ellipsis overflow-hidden max-h-[26px] break-words">
              Nenhum
            </span>
          )}
        </div>
        <span className="text-[#ABABAB] text-sm flex-shrink-0">7 Mar</span>
      </div>

      <div className="flex flex-col justify-start items-start gap-1">
        <div className="">
          <h3 className="font-medium max-h-[72px] text-left overflow-hidden break-words">
            {title}
          </h3>
        </div>
        <div className="flex flex-col items-start gap-1 w-full h-auto break-words lg:flex-row lg:items-start lg:justify-start lg:gap-6">
          <span className="flex items-center gap-1 font-normal text-[#63B4FF] text-xs text-left">
            <img src="src/assets/company.svg" alt="" width={"18px"} />{" "}
            {company_name}
          </span>
          <span className="flex items-center gap-1 font-normal text-[#63B4FF] text-xs text-left break-all">
            <img src="src/assets/map.svg" alt="" width={"18px"} /> {location}
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-1  justify-start">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="font-medium  text-[#9E9E9E] border border-[#ebebeb] rounded-3xl px-3"
          >
            {tag.replace(tag[0], tag[0].toUpperCase())}
          </span>
        ))}

        {/*<span className="font-medium  bg-[#71ABEE] text-white rounded-3xl px-3">
          +2
        </span>*/}
      </div>
    </button>
  );
};

export default JobCard;
