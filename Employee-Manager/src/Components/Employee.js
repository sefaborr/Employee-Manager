import { useState, React, useContext, useEffect } from 'react'
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import EmployeeInfo from './EmployeeInfo';
import { EmployeeContext } from "../Contexts/EmployeeContext";
import EditForm from './EditForm';



export default function Employee({ employee }) {

  const { deleteEmployee } = useContext(EmployeeContext);



  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false)

  const infoClose = () => setShow(false);
  const infoShow = () => setShow(true);

  const editClose = () => setEditShow(false);
  const editShowModal = () => setEditShow(true);

  useEffect(() => {
    editClose();
  }, [employee])


  return (
    <>
      <td>
        <OverlayTrigger
          overlay={
            <Tooltip id={`tooptil-top`}>
              View
            </Tooltip>
          }>
          <Button className="btn2 text-info" onClick={infoShow} data-toggle="modal">
            <i className="fa-solid fa-eye btn-view"></i></Button>

        </OverlayTrigger>
        {employee.name}
      </td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger
          overlay={
            <Tooltip id={`tooptil-top`}>
              Edit
            </Tooltip>
          }>
          <Button onClick={editShowModal} className="btn2  text-warning btn-act" data-toggle="modal"><i className="material-icons edit-icon" >&#xE254;</i></Button>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={
            <Tooltip id={`tooptil-top`}>
              Delete
            </Tooltip>
          }>
          <Button onClick={() => deleteEmployee(employee.id)} className="btn2 text-danger btn-act" data-toggle="modal"><i className="material-icons" >&#xE872;</i></Button>
        </OverlayTrigger>


      </td>

      < Modal show={show} onHide={infoClose}>
        <Modal.Header className="modal-header">
          <Modal.Title>
            Employee Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeInfo EmployeeInfo={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={infoClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal >

      <Modal show={editShow} onHide={editClose}>
        <Modal.Header className="modal-header">
          <Modal.Title>
            Update Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          < EditForm EmployeeEdit={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
