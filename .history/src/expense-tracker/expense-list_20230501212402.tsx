import React from "react";

const ExpenseList = () => {
  return <>
  <table className="table table-bordered">
    <thead>
        <tr>
            <th>#</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>20</td>
            <td>Emad</td>
            <td>
                <button className="btn btn-outline danger">Delete</button>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td>
            <td>30</td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
  </table>
  </>;
};

export default ExpenseList;
