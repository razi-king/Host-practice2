import React, { useEffect, useState } from 'react'
import { deleteEmployee, getUser } from '../APIHandling/API';
import { Link } from 'react-router-dom';

export default function UserListForm() {
    const [user,setUser]= useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        loadEmployee();
    },[])
    // const loadEmployee = async ()=>{
    //     const res = await getUser();
    //     setUser(res.data);
    // }
    const loadEmployee = async () => {
        try {
          const res = await getUser();
          setUser(res.data);
        } catch (err) {
          console.error("Error loading users:", err);
        } finally {
          setLoading(false);
        }
      };
      const handleDelete =(id)=>{
        deleteEmployee(id).then(()=>{
          alert("Employee Deleted Successfully");
          loadEmployee();
        }).catch(()=>{
          alert("Error Occured");
        });
      }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <form className='bg-white p-6 rounded-lg shadow-md w-full '>
            <h2 className='font-bold text-3xl mb-4 text-purple-700'>Employees Table</h2>
            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-200 hover:bg-gray-400'>
                    <th className='border px-4 py-2'>Id</th>
                    <th className='border px-4 py-2'>Name</th>
                    <th className='border px-4 py-2'>Email</th>
                    <th className='border px-4 py-2'>Contact</th>
                    <th className='border px-4 py-2'>Age</th>
                    <th className='border px-4 py-2'>Password</th>
                    <th className='border px-4 py-2' colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(u => (
                    <tr key={u.id} className='bg-gray-100 hover:bg-gray-200'>
                        <td className='border px-4 py-2'>{u.id}</td>
                        <td className='border px-4 py-2'>{u.name}</td>
                        <td className='border px-4 py-2'>{u.email}</td>
                        <td className='border px-4 py-2'>{u.contact}</td>
                        <td className='border px-4 py-2'>{u.age}</td>
                        <td className='border px-4 py-2'>{u.password}</td>
                        <td className='border px-4 py-2 cursor-pointer' onClick={()=>handleDelete(u.id)}>Delete</td>
                        <td className='border px-4 py-2'><Link to={`/empUpdate/${u.id}`}>Update</Link></td>
                    </tr>
                    ))}
                </tbody>
            </table>


        </form>

    </div>
  )
}
