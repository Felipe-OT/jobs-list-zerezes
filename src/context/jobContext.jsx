import { createContext, useState } from "react";

const JobContext = createContext()

export const JobProvider = ({children}) => {
    const [selectedJob, setSelectedJob] = useState('')
    const [jobWasClicked, setJobWasClicked] = useState(false)

    return (
        <JobContext.Provider value={{selectedJob, setSelectedJob, jobWasClicked, setJobWasClicked}}>
            {children}
        </JobContext.Provider>
    )
}

export default JobContext