import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {  getQualifById, updateQualif } from '../APIHandling/API';

export default function UpdateQualif() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [qualif, setQualif] = useState({
    ssc: 0,
    hsc: 0,
    graduation: 0,
    description: '',
    emp: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Load qualification data
  const loadQualif = async (id) => {
    try {
      const res = await getQualifById(id); 
      setQualif(res.data);
    } catch (err) {
      setError('Failed to load qualification data.');
    }
  };

  useEffect(() => {
    loadQualif(id);
  }, id); 

  const handleChange = (e) => {
    setQualif({ ...qualif, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateQualif(id, qualif); // ✅ await added
      setMessage('Qualification updated successfully.');
      setError('');
      navigate('/qualifList');
    } catch (err) {
      setError('Failed to update qualification.');
      setMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={onSubmit}>
        <table className="w-full">
          <tbody>
            <tr>
              <th className="text-left text-gray-700 pr-4 pb-4 align-top">SSC:</th>
              <td className="pb-4">
                <input
                  type="number"
                  name="ssc"
                  value={qualif.ssc}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  placeholder="Enter your SSC marks"
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="text-left text-gray-700 pr-4 pb-4 align-top">HSC:</th>
              <td className="pb-4">
                <input
                  type="number"
                  name="hsc"
                  value={qualif.hsc}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  placeholder="Enter your HSC marks"
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="text-left text-gray-700 pr-4 pb-4 align-top">Graduation:</th>
              <td className="pb-4">
                <input
                  type="number"
                  name="graduation"
                  value={qualif.graduation}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  placeholder="Enter your Graduation marks"
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="text-left text-gray-700 pr-4 pb-4 align-top">Description:</th>
              <td className="pb-4">
                <input
                  type="text"
                  name="description"
                  value={qualif.description}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  placeholder="Enter your description"
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="text-left text-gray-700 pr-4 pb-4 align-top">Name:</th>
              <td className="pb-4">
                <input
                  type="text"
                  name="emp"
                  value={qualif.emp.name}  
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  readOnly
                  placeholder="Enter employee name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pt-6 pr-2">
                <input
                  type="reset"
                  value="Reset"
                  className="w-full bg-gray-400 text-white font-semibold py-2 rounded-md hover:bg-gray-500 cursor-pointer"
                />
              </td>
              <td className="pt-6 pl-2">
                <input
                  type="submit"
                  value="Update"
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* Success message */}
      {message && (
        <div className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-2" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
    </div>
  );
}
