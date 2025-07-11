import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex gap-x-5 text-xl font-bold h-24 items-center px-4 '>
        <Link to='/' className=' hover:text-green-400 text-black'>Home</Link>
        <Link to='/login' className=' hover:text-green-400 text-black'>Login</Link>
        <Link to='/register' className=' hover:text-green-400 text-black'>Register</Link>
        <Link to ='/empList' className='hover:text-green-400 text-black'>EmpList</Link>
        <Link to ='/empQualif' className='hover:text-green-400 text-black'>QualifR</Link>
        <Link to ='/qualifList' className='hover:text-green-400 text-black'>Qualif</Link>
    </div>
  )
}
