import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="container"> 
            <h1 className="text-center">TO DO LIST</h1>
                <form method="get">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input className="form-control" type="text" id="txtname" />
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="form-group">
                                <label for="level">Level</label>
                                <select className="form-control" id="level">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="form-group">
                                <label for="txtdate">Date</label>
                                <input className="form-control" type="date" id="txtdate" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mb-5">
                        <div className="col-12 float-right">
                            <button className="btn btn-outline-primary" type="submit">Add</button>
                        </div>
                    </div>
                </form>         
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Do Thanh Tan</td>
                        <td>3</td>
                        <td>28/01/2020</td>
                        <td><button type="button" class="btn btn-outline-info">Edit</button> <button type="button" class="btn btn-outline-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Do Thanh Tan</td>
                        <td>3</td>
                        <td>28/01/2020</td>
                        <td><button type="button" class="btn btn-outline-info">Edit</button> <button type="button" class="btn btn-outline-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Do Thanh Tan</td>
                        <td>3</td>
                        <td>28/01/2020</td>
                        <td><button type="button" class="btn btn-outline-info">Edit</button> <button type="button" class="btn btn-outline-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Do Thanh Tan</td>
                        <td>3</td>
                        <td>28/01/2020</td>
                        <td><button type="button" class="btn btn-outline-info">Edit</button> <button type="button" class="btn btn-outline-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Do Thanh Tan</td>
                        <td>3</td>
                        <td>28/01/2020</td>
                        <td><button type="button" class="btn btn-outline-info">Edit</button> <button type="button" class="btn btn-outline-danger">Delete</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product;