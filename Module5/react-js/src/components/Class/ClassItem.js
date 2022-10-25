import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import StudentService from './../../services/studentService';
import ClassService from './../../services/classService';
import Spinner from "../Spinner/Spinner";

function ClassItem() {
    const [state, setState] = useState({
        loading: false,
        students: []
    });
    const [classRoom, setClassRoom] = useState("");
    const { classid } = useParams();
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
            }

            getStudent();
        } catch (error) {

        }
    }, [classid])
    const { loading, students } = state;

    return (
        <div className="col-9">
            <h1>List Students of {classRoom}</h1>
            {
                loading ? <Spinner /> : (
                    <table className="table table-sm">
                        <thead className="table-dark">
                            <tr>
                                <th>#ID</th>
                                <th>Avatar</th>
                                <th>Fullname</th>
                                <th>Email</th>
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