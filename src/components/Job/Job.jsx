/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Job.css"

const Job = ({ job }) => {
    const { id, img, name, company, type, salary, location } = job;

    const handleDetails = (id) => {
        console.log(id)
    }

    return (
        <div className="border px-14  py-10 w-full">
            <img src={img} alt="" />
            <h4 className="text-xl font-bold mt-4">{name}</h4>
            <p className="text-xs mt-2">{company}</p>
            <button id="btn-small" className="px-1 py-1 mt-2">{type}</button>
            <div className="mt-2 flex text-xs">
                <p className="mr-5">{location}</p>
                <p>{salary}</p>
            </div>
            <button className="mt-2 text-white" onClick={() => handleDetails(id)} id="btn"><Link to={`/job/${id}`}>View Details</Link></button>
        </div>
    );
};

export default Job;