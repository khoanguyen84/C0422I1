import axios from "axios";

const STUDENT_API_URL = "https://6357527d9243cf412f9682ec.mockapi.io/students";
class StudentService{
    static getStudents(){
        return axios.get(STUDENT_API_URL);
    }

    static createStudent(student){
        return axios.post(STUDENT_API_URL, student);
    }

    static removeStudent(studentId){
        return axios.delete(`${STUDENT_API_URL}/${studentId}`);
    }

    static getStudent(studentId){
        return axios.get(`${STUDENT_API_URL}/${studentId}`);
    }

    static updateStudent(student){
        return axios.put(`${STUDENT_API_URL}/${student.id}`, student);
    }
}

export default StudentService;