import axios from "axios";

const STUDENT_API_URL = "https://6357527d9243cf412f9682ec.mockapi.io/students";
class StudentService{
    static getStudents(){
        return axios.get(STUDENT_API_URL);
    }

    static createStudent(student){
        return axios.post(STUDENT_API_URL, student);
    }
}

export default StudentService;