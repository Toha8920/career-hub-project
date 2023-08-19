import { useEffect, useState } from "react";
import man from "../../../public/assets/All Images/P3OLGJ1 copy 1.png"
import Jb from "../Jb/Jb";
import Job from "../Job/Job";
const Statics = () => {
    const [jb, setJb] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setJb(data))
    }, []);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        setJobs(data?.slice(0, 4))
    }, [data]);

    const handleJobs = () => {
        setJobs(data)
    }

    console.log(jobs)

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-14">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={man} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button id="btn">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <h2 className="text-2xl text-center">Job Category List</h2>
                <p className="text-center text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-4 gap-4 mt-10">
                    {
                        jb.map(job => <Jb key={job.id} job={job}></Jb>)
                    }
                </div>
            </div>
            <div className="mt-14">
                <h2 className="text-2xl text-center">Featured Jobs</h2>
                <p className="small text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-4 mt-10 mx-14">
                    {
                        jobs.map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className="flex justify-center items-center">
                    {
                        jobs.length === 4 && <button onClick={handleJobs} id="btn" className="text-white mt-5">View All</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Statics;