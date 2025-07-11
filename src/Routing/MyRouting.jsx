import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../components/Home'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import UserListForm from '../components/UserListForm'
import UpdateEmp from '../components/UpdateEmp'
import RegisterQualification from '../components/RegisterQualification'
import UserQualification from '../components/UserQualification'
import UpdateQualif from '../components/UpdateQualif'
import RegisterDepartment from '../components/RegisterDepartment'

export default function MyRouting() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='login' element={<LoginForm/>}/>
                <Route path='register' element={<RegisterForm/>}/>
                <Route path='empList' element={<UserListForm/>}/>
                <Route path='empUpdate/:id' element={<UpdateEmp/>}/>
                <Route path='empQualif' element={<RegisterQualification/>}/>
                <Route path='qualifList'element={<UserQualification/>}/>
                <Route path='qualifUpdate/:id' element={<UpdateQualif/>}/>
                <Route path='deptRegister' element={<RegisterDepartment/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
