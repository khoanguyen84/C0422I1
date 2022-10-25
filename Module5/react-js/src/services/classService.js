import axios from "axios";
const CLASS_API_URL = "https://6357527d9243cf412f9682ec.mockapi.io/classlist";
class ClassService{
    static getClass(){
        return axios.get(CLASS_API_URL);
    }
    static getClassById(classId){
        return axios.get(`${CLASS_API_URL}/${classId}`);
    }
}

export default ClassService;