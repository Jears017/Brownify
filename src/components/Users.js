import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom";
import axios from "axios";
import '../index.css'

export const Users = () => {

    useEffect(() => {
        axios('http://localhost:8080/users').then(res => console.log(res.data))
    }, [])
    return (
        <div>
            <div className='button-user'>
                <NavLink to={'/addUser'} className='btn btn-dark'>+</NavLink>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><NavLink to='users/edit/:id'>edit</NavLink></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}