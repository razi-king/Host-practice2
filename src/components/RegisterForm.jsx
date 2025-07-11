import React, { useEffect, useState } from 'react'
import { createUser } from '../APIHandling/API';

export default function RegisterForm() {
    
    const [user,setUser]=useState({
        name:'',
        email:'',
        contact:'',
        age:'',
        password:''
    })
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        createUser(user)
         .then((res)=>{
            setMessage('✅ Employee added successfully!');
            setError('');
            setUser({
                name:'',
                email:'',
                contact:'',
                age:'',
                password:''
            });
         })
         .catch((err)=>{
            setError('❌ Error adding employee');
            setMessage('');
         });
    };
    useEffect(() => {
        if (message || error) {
          const timer = setTimeout(() => {
            setMessage('');
            setError('');
          }, 3000); // 3 seconds
          return () => clearTimeout(timer);
        }
      }, [message, error]);
          
  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <form class="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <table class="w-full">
            <tr>
                <th class="text-left text-gray-700 pr-4 pb-4 align-top">Name:</th>
                <td class="pb-4">
                <input 
                    type="text" 
                    name="name" 
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    value={user.name}
                    placeholder="Enter your name"
                    required
                />
                </td>
            </tr>
            <tr>
                <th class="text-left text-gray-700 pr-4 pb-4 align-top">Email:</th>
                <td class="pb-4">
                <input 
                    type="email" 
                    name="email" 
                    value={user.email}
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                />
                </td>
            </tr>
            <tr>
                <th class="text-left text-gray-700 pr-4 pb-4 align-top">Contact:</th>
                <td class="pb-4">
                <input 
                    type="text" 
                    name="contact"
                    value={user.contact} 
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    placeholder="1234567890"
                    required
                />
                </td>
            </tr>
            <tr>
                <th class="text-left text-gray-700 pr-4 pb-4 align-top">Age:</th>
                <td class="pb-4">
                <input 
                    type="number" 
                    name="age" 
                    value={user.age}
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    placeholder="Age"
                    required
                />
                </td>
            </tr>
            <tr>
                <th class="text-left text-gray-700 pr-4 pb-4 align-top">Password:</th>
                <td class="pb-4">
                <input 
                    type="password" 
                    name="password"
                    value={user.password} 
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                />
                </td>
            </tr>
            <tr>
                <td class="pt-6 pr-2">
                <input 
                    type="reset" 
                    value="Reset" 
                    class="w-full bg-gray-400 text-white font-semibold py-2 rounded-md hover:bg-gray-500 cursor-pointer"
                />
                </td>
                <td class="pt-6 pl-2">
                <input 
                    type="submit" 
                    value="Register" 
                    class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                />
                </td>
            </tr>
        </table>

        </form>
        {message && (
            <div className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-2" role="alert">
                <strong className="font-bold">Success! </strong>
                <span className="block sm:inline">{message}</span>
            </div>
            )}

        {error && (
            <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2" role="alert">
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{error}</span>
            </div>
        )}
    </div>

  )
}
