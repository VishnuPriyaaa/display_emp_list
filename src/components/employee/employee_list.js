import React , {useState} from 'react';
import {useSelector} from 'react-redux';


function EmployeeList() {
    
    const empList = useSelector(state => state.user);
    return (
        <div className="table-responsive">
        <table className="table">
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>PhoneNo</th>
                  </tr>
              </thead>
              <tbody>
              {empList.map((emp,key) => {
                 return(
                  <tr>
                      <td id={key}>{emp.id}</td>
                      <td>{emp.name}</td>
                      <td>{emp.age}</td>
                      <td>{emp.gender}</td>
                      <td>{emp.email}</td>
                      <td>{emp.phoneNo}</td>
                  </tr>
                 )
              })}
              </tbody>
          </table>
        </div>
    )
}

export default EmployeeList;