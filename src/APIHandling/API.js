import axios from "axios"

const API=import.meta.env.mainAPI+"/Emp";
export const getUser=()=> axios.get(`${API}/emp`);
export const createUser=(data)=> axios.post(`${API}/saveEmp`,data);
export const deleteEmployee = (id)=>axios.delete(`${API}/delete/${id}`);
export const getEmpById = (id)=> axios.get(`${API}/getEmpById/${id}`);
export const updateEmp = (id,data)=> axios.put(`${API}/update/${id}`,data);
const API2 = import.meta.env.mainAPI+"/Qualif"
export const getQualification=()=> axios.get(`${API2}/getQualif`);
export const createQualification =(data)=> axios.post(`${API2}/saveQualif`,data);
export const deleteQualification = (id)=>axios.delete(`${API2}/deleteQualif/${id}`);
export const getQualifById = (id)=> axios.get(`${API2}/getQualifById/${id}`);
export const updateQualif = (id,data) => axios.put(`${API2}/updateQualif/${id}`,data);
// export const loginUser = (data)=> axios.
const API3 = import.meta.env.mainAPI+"/dept"
export const getDepartment = () => axios.get(`${API3}`);
export const createDepartment = (data) => axios.post(`${API3}`,data);
export const deleteDepartment = (id) => axios.delete(`${API3}/${id}`);
export const getDeptById = (id) => axios.get(`${API3}/getDeptById/${id}`);
export const updateDepartment = (id,data) => axios.put(`${API3}/updateDept/${id}`,data);

export const loginEmp = (email,password)=> axios.get(`${API}/findByEmailAndPassword/${email}/${password}`)


