import React from 'react'
import {NavLink} from "react-router-dom";

export const Artists = () => {
    return (
        <div>
            <h1>Artists!</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <form className="form-inline">
                            <input hidden="hidden" name="artistId"/>
                            <select className="form-select-sm" name="username">
                                <option selected>Choose user</option>
                                <option>PEnis</option>
                            </select>
                            <button className="btn btn-dark" type="submit">Like</button>
                        </form>
                    </td>
                </tr>
                </tbody>
            </table>
            <br/>
            <form>
                <p>
                    <input className="form-control-sm" name="name" placeholder="name" type="text"/>
                </p>
                <p>
                    <textarea className="form-control-sm" name="description" placeholder="description"
                              rows="3"></textarea>
                </p>
                <p>
                    <button className="btn btn-dark" type="submit">new.</button>
                </p>
            </form>
        </div>
)
}