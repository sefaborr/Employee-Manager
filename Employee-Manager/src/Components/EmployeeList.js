import { React, useContext, useEffect, useState } from 'react'
import Employee from "./Employee"
import { EmployeeContext } from "../Contexts/EmployeeContext"
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from './Pagination';
import SearchBar from './SearchBar';


export default function EmployeeList() {

  const { sortedEmployees } = useContext(EmployeeContext)

  const [show, setShow] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage,] = useState(5);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    handleClose();
  }, [sortedEmployees])

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNumber = Math.ceil(sortedEmployees.length / employeesPerPage);


  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>

          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
          </div>
        </div>
      </div>

      < SearchBar />

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            currentEmployees.map((employee) => (
              <tr tr key={employee.id} >
                < Employee employee={employee} />
              </tr>
            ))
          }
        </tbody>
      </table>


      < Pagination pages={totalPagesNumber} setCurrentPage={setCurrentPage} currentEmployees={currentEmployees} sortedEmployees={sortedEmployees} />



      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header">
          <Modal.Title>
            Add Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          < AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// Employee Sıralaması için 2 farklı yöntem
// 1. Yöntem
// .sort((a, b) => a.name.localeCompare(b.name)).map...
// 2. Yöntem
// .sort((a,b) => a.name < b.name ? -1 : 1 ).map...
