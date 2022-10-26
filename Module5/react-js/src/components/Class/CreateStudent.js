import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import noAvatar from '../../asset/images/noAvatar.jpg';
import StudentService from './../../services/studentService';
function CreateStudent(props) {
    const { handleShowModal, classid } = props;

    const navigate = useNavigate();
    const [student, setStudent] = useState({
        fullname: "",
        email:"",
        avatar: "",
        classId: classid
    })

    const handleInput = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let createRes = await StudentService.createStudent(student);
        if(createRes.data){
            alert("Student created success!");
            // navigate(`/student/${classid}`, {replace : true})
            handleShowModal(true);
        }
    }

    const {fullname, email, avatar} = student;
    return (
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <div className="mt-1">
                            <label className="form-label">Fullname</label>
                            <input type="text" value={fullname} className="form-control form-control-sm" name="fullname" onInput={handleInput}/>
                        </div>
                        <div className="mt-1">
                            <label className="form-label">Email</label>
                            <input type="email" value={email} className="form-control form-control-sm" name="email" onInput={handleInput}/>
                        </div>
                        <div className="mt-1">
                            <label className="form-label">Avatar URL</label>
                            <input type="url" value={avatar} className="form-control form-control-sm" name="avatar" onInput={handleInput}/>
                        </div>
                        <div className="mt-1">
                            <button type="submit" className="btn btn-warning btn-sm me-2">Create</button>
                            <button type="button" className="btn btn-dark btn-sm" onClick={handleShowModal}>Cancel</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={avatar || noAvatar} className="img-thumbnail w-50" alt="" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateStudent; 