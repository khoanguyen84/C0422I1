import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import StudentService from './../../services/studentService';
import ClassService from './../../services/classService';
import Spinner from "../Spinner/Spinner";
import CreateStudent from "./CreateStudent";
import ModifyStudent from "./ModifyStudent";
import { toast } from 'react-toastify';

function ClassItem() {
    const [state, setState] = useState({
        loading: false,
        students: []
    });
    const [classRoom, setClassRoom] = useState("");
    const { classid } = useParams();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showModifyModal, setShowModifyModal] = useState(false);
    const [studentId, setStudentId] = useState(null);
    useEffect(() => {
        try {
            setState({ ...state, loading: true })
            async function getStudent() {
                let studentRes = await StudentService.getStudents();
                let classRes = await ClassService.getClassById(classid);
                setState({
                    ...state,
                    students: studentRes.data.filter(item => item.classId === classid),
                    loading: false
                });
                setClassRoom(classRes.data.classname);
                setShowModifyModal(false);
                setShowCreateModal(false);
            }

            getStudent();
        } catch (error) {

        }
    }, [classid])

    const handleShowCreateModal = () => setShowCreateModal(!showCreateModal);
    const handleShowModifyModal = () => setShowModifyModal(!showModifyModal);

    const handleRemoveStudent = async (stdId) => {
        let confirm = window.confirm("Are sure to remove this student?");
        try {
            if (confirm) {
                setState({ ...state, loading: true })
                let deleteRes = await StudentService.removeStudent(stdId);
                if (deleteRes.data) {
                    let studentRes = await StudentService.getStudents();
                    setState({
                        ...state,
                        students: studentRes.data.filter(item => item.classId === classid),
                        loading: false
                    });
                    toast.success(`Student: ${deleteRes.data.fullname} has been removed success`)
                }
    
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    const handleEditStudent = async (stdId) => {
        setStudentId(stdId);
        setShowModifyModal(true);
    }
    const { loading, students } = state;

    return (
        <div className="col-9">
            {showModifyModal && <ModifyStudent handleShowModifyModal={handleShowModifyModal} classid={classid} studentId = {studentId} setState={setState} />}
            {showCreateModal && <CreateStudent handleShowCreateModal={handleShowCreateModal} classid={classid} setState={setState} />}
            <div className="d-flex align-items-center">
                <h1>List Students of {classRoom}</h1>
                <button className="btn btn-outline-danger btn-sm ms-2" onClick={handleShowCreateModal}>
                    <i className="fa fa-plus me-2"></i>
                    Add
                </button>
            </div>
            {
                loading ? <Spinner /> : (
                    <table className="table table-sm">
                        <thead className="table-dark">
                            <tr>
                                <th>#ID</th>
                                <th>Avatar</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Actios</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map(std => (
                                    <tr key={std.id}>
                                        <td>{std.id}</td>
                                        <td>
                                            <img className="avatar-sm" src={std.avatar} alt="" />
                                        </td>
                                        <td>{std.fullname}</td>
                                        <td>{std.email}</td>
                                        <td>
                                            <i role="button" className="fa-solid fa-user-pen text-primary me-2"
                                                onClick={() => handleEditStudent(std.id)}
                                            ></i>
                                            <i role="button" className="fa-solid fa-user-xmark text-danger"
                                                onClick={() => handleRemoveStudent(std.id)}
                                            ></i>
                                        </td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default ClassItem;