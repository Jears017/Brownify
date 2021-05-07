import React from 'react'
import {NavLink} from "react-router-dom";

export const AddUser = () => {
    return (
        <div>
            <h1>AddUser!</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="fundNameInput" >Username</label>
                        <input aria-describedby="emailHelp" className="form-control" id="fundNameInput" name="userName"
                               type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="setNameInput" >First name</label>
                        <input type="text" className="form-control" id="setNameInput" name="firstName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemNameInput">Second name</label>
                        <input type="text" className="form-control" id="itemNameInput" name="secondName"/>
                    </div>
                        <p></p>
                        <button type="submit" className="btn btn-dark">Submit</button>
                </form>
        </div>
    )
}