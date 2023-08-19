/* eslint-disable react/prop-types */
import "./Jb.css"

const Jb = ({ job }) => {
    const { name, img, available } = job;

    return (
        <div className="card ">
            <img className="h-8 w-8 " src={img} alt="" />
            <h5 className="text-base font-bold">{name}</h5>
            <p className="text-sm">{available}</p>
        </div>
    );
};

export default Jb;