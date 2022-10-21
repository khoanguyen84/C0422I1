import React, { useState, useRef } from "react";

function ToDo() {
    const [jobs, setJobs] = useState(["Nấu cơm", "Lau nhà", "Đón con"]);

    const [jobname, setJobname] = useState("");

    // const inputRef = useRef();

    const handSumit = (e) => {
        e.preventDefault();
        setJobs([
            ...jobs,
            jobname
        ])
        setJobname("");
    }
    // const handAddJob = () => {
    //     setJobs([
    //         ...jobs,
    //         jobname
    //     ])
    //     setJobname("");
    //     inputRef.current.focus();
    // }

    const handleInput = (e) => {
        setJobname(e.target.value)
    }
    return (
        <div className="container">

            <div className="form-group">
                <form onSubmit={handSumit}>
                    <label>Jobname</label>
                    <input
                        type="text"
                        value={jobname}
                        id="jobname"
                        className="form-control"
                        onInput={handleInput}
                    />
                    <button type="submit" className="btn btn-sm btn-danger">Add Job</button>
                </form>
            </div>
            {/* <div className="form-group">
                <label>Jobname</label>
                <input ref={inputRef} 
                    type="text" 
                    value={jobname} 
                    id="jobname" 
                    className="form-control" 
                    onInput={handleInput}
                />
                <button className="btn btn-sm btn-danger"
                    onClick={handAddJob}
                >Add Job</button>
            </div> */}
            <div>
                <ul className="list-group">
                    {
                        jobs.map((job, index) => (
                            <li key={index} className="list-group-item">{job}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDo;