import React from 'react'
import {NavLink} from "react-router-dom";

export const UserEdit = () => {
    return (
        <div>
            <div>
                <h1>User Edit!</h1>
                <form>
                    <div>
                        <input hidden="hidden"/>
                        <div>
                            <label for="userName">
                                Username:
                            </label>
                            <p><input class="form-control-sm align-items-center" id="userName" name="userName"
                                      type="text"/></p>
                        </div>
                        <div>
                            <label for="firstName">
                                First Name:
                            </label>
                            <p><input class="form-control-sm" id="firstName" name="userName" type="text"/>
                            </p>
                        </div>
                        <div>
                            <label for="secondName">
                                Second Name:
                            </label>
                            <p><input class="form-control-sm" id="secondName" name="userName" type="text"/>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-1">
                            <button class="btn btn-dark" type="submit">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
                <p></p>
                <div class="col-12 col-md-1">
                    <form>
                        <button class="btn btn-dark" type="submit">
                            Delete
                        </button>
                    </form>
                </div>
            </div>

            <div class="container">
                <h3>Liked Artists</h3>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th>Artist's Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="container">
                <h3>Liked Albums</h3>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th>Album's Name</th>
                        <th>Description</th>
                        <th>Release Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="container">
                <h3>Liked Tracks</h3>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}