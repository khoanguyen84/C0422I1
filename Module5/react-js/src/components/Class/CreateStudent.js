import React, { useState } from "react";
import noAvatar from '../../asset/images/noAvatar.jpg';
import StudentService from './../../services/studentService';
import { toast } from 'react-toastify';
function CreateStudent(props) {
    const { handleShowCreateModal, classid, setState } = props;
    const [student, setStudent] = useState({
        fullname: "",
        email: "",
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

        try {
            setState({ loading: true })
            let createRes = await StudentService.createStudent(student);
            if (createRes.data) {
                toast.success("Student created success!", { autoClose: 1000 });
                let studentRes = await StudentService.getStudents();
                setState({
                    students: studentRes.data.filter(item => item.classId === classid),
                    loading: false
                });
                setStudent({
                    fullname: "",
                    email: "",
                    avatar: "",
                    classId: classid
                });
                handleShowCreateModal(true);
            }
        } catch (error) {
            toast.error(error.mesage);
        }
    }

    const { fullname, email, avatar } = student;
    return (
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <div className="mt-1">
                            <label className="form-label">Fullname</label>
                            <input type="text" value={fullname} className="form-control form-control-sm" name="fullname" onInput={handleInput} />
                        </div>
                        <div className="mt-1">
                            <label className="form-label">Email</label>
                            <input type="email" value={email} className="form-control form-control-sm" name="email" onInput={handleInput} />
                        </div>
                        <div className="mt-1">
                            <label className="form-label">Avatar URL</label>
                            <input type="url" value={avatar} className="form-control form-control-sm" name="avatar" onInput={handleInput} />
                        </div>
                        <div className="mt-1">
                            <button type="submit" className="btn btn-warning btn-sm me-2">Create</button>
                            <button type="button" className="btn btn-dark btn-sm" onClick={handleShowCreateModal}>Cancel</button>
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