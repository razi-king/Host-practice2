import React, { useState } from 'react';
import { loginEmp } from '../APIHandling/API';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // ✅ NEW STATE

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginEmp(email, password)
            .then((res) => {
                setMessage('✅ Login Successful!');
                setError('');
                setLoggedIn(true); // ✅ Switch to welcome view
            })
            .catch((err) => {
                setError('❌ Login Failed. Please check your credentials.');
                setMessage('');
            });
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>

                {/* ✅ If Logged In, Show Welcome */}
                {loggedIn ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-700">Welcome, {email} 👋</h2>
                        <p className="mt-4 text-gray-600">{message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>

                        {message && <div className="text-green-600 font-semibold mb-4">{message}</div>}
                        {error && <div className="text-red-600 font-semibold mb-4">{error}</div>}

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleEmail}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="razi@example.com"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={handlePassword}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Your Password"
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="reset"
                                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"
                            >
                                Reset
                            </button>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
