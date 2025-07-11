import React, { useEffect, useState } from 'react'
import { deleteQualification, getQualification } from '../APIHandling/API';
import { Link } from 'react-router-dom';

export default function UserQualification() {
    const [qualif,setQualif]= useState([]);
    // try {
    //           const res = await getUser();
    //           setUser(res.data);
    //         } catch (err) {
    //           console.error("Error loading users:", err);
    //         } finally {
    //           setLoading(false);
    //         }
    useEffect(()=>{
        loadEmployee();
    },[]);
    const handleDelete=(id)=>{
        deleteQualification(id).then(()=>{
            alert("Qualification Deleted Successfully");
            loadEmployee();
        }).catch(()=>{
            console.log("Error While Deleting Qualification");
        });
    }
    const loadEmployee =async ()=>{
        try{
            const res = await getQualification();
            setQualif(res.data);
        }
        catch(err){
            console.error("Error Loading Qualification:",err);
        }
        finally{
            console.log("hiie");
        }
    };
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
                        <th className='border px-4 py-2'>Ssc</th>
                        <th className='border px-4 py-2'>Hsc</th>
                        <th className='border px-4 py-2'>Graduation</th>
                        <th className='border px-4 py-2'>Description</th>
                        <th className='border px-4 py-2' colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qualif.map(u => (
                        <tr key={u.id} className='bg-gray-100 hover:bg-gray-200'>
                            <td className='border px-4 py-2'>{u.id}</td>
                            <td className='border px-4 py-2'>{u.emp.name}</td>
                            <td className='border px-4 py-2'>{u.emp.email}</td>
                            <td className='border px-4 py-2'>{u.ssc}</td>
                            <td className='border px-4 py-2'>{u.hsc}</td>
                            <td className='border px-4 py-2'>{u.graduation}</td>
                            <td className='border px-4 py-2'>{u.description}</td>
                            <td className='border px-4 py-2 cursor-pointer' onClick={()=>handleDelete(u.id)}>Delete</td>
                            <td className='border px-4 py-2'><Link to={`/qualifUpdate/${u.id}`}>Update</Link></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
    
    
            </form>
    
        </div>
  )
}
