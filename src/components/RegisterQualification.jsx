import React, { useEffect, useState } from 'react';
import { createQualification, getUser } from '../APIHandling/API';

export default function RegisterQualification() {
  const [qualif, setQualif] = useState({
    ssc: 0,
    hsc: 0,
    graduation: 0,
    description: '',
    emp: '' // keep it empty, not object
  });

  const [user, setUser] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const loadEmployee = async () => {
    try {
      const res = await getUser();
      setUser(res.data);
    } catch (err) {
      console.error('Error Loading Users:', err);
    }
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQualif({ ...qualif, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!qualif.emp || parseInt(qualif.emp) === 0) {
      alert('Please select a valid employee');
      return;
    }

    createQualification({
      ...qualif,
      emp: { id: parseInt(qualif.emp) } // convert to nested emp object
    })
      .then(() => {
        setMessage('Qualification saved successfully');
        setQualif({
          ssc: 0,
          hsc: 0,
          graduation: 0,
          description: '',
          emp: ''
        });
      })
      .catch(() => {
        setError('Error occurred while adding qualification');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
        method="post"
        onSubmit={handleSubmit}
      >
        <table className="w-full">
          <tbody>
            <tr>
              <th className="text-left pb-4 pr-4 align-top text-gray-700">SSC</th>
              <td className="pb-4">
                <input
                  type="number"
                  name="ssc"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={qualif.ssc}
                  placeholder="Enter Your SSC Marks"
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="text-left pb-4 pr-4 align-top text-gray-700">HSC</th>
              <td className="pb-4">
                <input
                  type="number"
                  name="hsc"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={qualif.hsc}
                  placeholder="Enter Your HSC Marks"
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="text-left pb-4 pr-4 align-top text-gray-700">Graduation</th>
              <td className="pb-4">
                <input
                  type="number"
                  name="graduation"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={qualif.graduation}
                  placeholder="Enter Your Graduation Marks"
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="text-left pb-4 pr-4 align-top text-gray-700">Description</th>
              <td className="pb-4">
                <input
                  type="text"
                  name="description"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={qualif.description}
                  placeholder="Enter Description"
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="text-left pb-4 pr-4 text-gray-700 align-top">Emp</th>
              <td className="pb-4">
                <select
                  name="emp"
                  value={qualif.emp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Employee</option>
                  {user.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.email}
                    </option>
                  ))}
                </select>
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
  );
}
