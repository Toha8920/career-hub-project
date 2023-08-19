import { useParams } from "react-router-dom";
import totalJobs from "../../../public/jobs.json";

const JobDetails = () => {
    const params = useParams();
    console.log(params)


    const job = totalJobs.find(jb => jb.id == params.jobId)
    console.log(job);

    const { description, responsibilities } = job

    return (
        <div>
            <h4 className="text-4xl text-center">Job Details</h4>
            <div>
                <p>{description}</p>
                <p className="mt-10">{responsibilities}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default JobDetails;