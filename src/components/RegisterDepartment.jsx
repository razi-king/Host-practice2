import React, { useEffect, useState } from 'react'
import { createDepartment, getUser } from '../APIHandling/API';

export default function RegisterDepartment() {
  const [dept,setDept] = useState({
    name:'',
    emps:[]
  });
  const [user,setUser] = useState([]);
  const [message,setMessage] = useState('');
  const [error,setError] = useState('');
  const loadEmployee = async ()=>{
    try{
      const res = await getUser();
      setUser(res.data);
    }
    catch(err){
      console.error("Error Occured While Getting All Employee",err);
    }
  }
  useEffect(()=>{
    loadEmployee();
  },[]);
  const handleChange = (e)=>{
    const {name,value,options,multiple}= e.target;
   

    if(multiple){
      const selected=[];
      for(let i =0;i<options.length;i++){
        if(options[i].selected){
          selected.push({id:parseInt(options[i].value)});
        }
      }
      setDept((prev)=>({...prev,[name]:selected}));
    }else{
      setDept((prev)=>({...prev,[name]:value}));
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    createDepartment(dept)
    .then(()=>{
      setMessage("Department Added Successfully");
      setDept({
        name:'',
        emps:[]
      });
    })
    .catch(()=>{
      console.log(dept);
      
      setError("Error While Adding Department");

    });
  };
  useEffect(()=>{
    
  },dept)
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
        method="post"
        onSubmit={handleSubmit}
      >
        <table className="w-full">
          <tbody>
            <tr>
              <th className="text-left pb-4 pr-4 align-top text-gray-700">Department Name</th>
              <td className="pb-4">
                <input
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={dept.name}
                  placeholder="Enter Department Name"
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="text-left pb-4 pr-4 text-gray-700 align-top">Employees</th>
              <td className="pb-4">
                <select
                  multiple
                  name="emps"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  {user.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.email}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-1">Hold Ctrl (Windows) or Cmd (Mac) to select multiple employees.</p>
              </td>
            </tr>

            <tr>
              <td>
                <input type="reset" value="Reset" className="btn btn-secondary mt-3" />
              </td>
              <td>
                <input type="submit" value="Save" className="btn btn-primary mt-3" />
              </td>
            </tr>
          </tbody>
        </table>
        {message && <p className="text-green-600 mt-2">{message}</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>

    </div>
  )
}
