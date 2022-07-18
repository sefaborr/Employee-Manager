import alertify from 'alertifyjs'
import { React, useContext, useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { EmployeeContext } from "../Contexts/EmployeeContext"

export default function EditForm({ EmployeeEdit }) {

    const { updateEmployee } = useContext(EmployeeContext)

    const employee = EmployeeEdit;
    const id = employee.id;

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);
    const [info, setInfo] = useState(employee.info);
    const [age, setAge] = useState(employee.age);
    const [departmant, setDepartmant] = useState(employee.departmant);
    const [avatar, setAvatar] = useState(employee.avatar);

    const updatedEmployee = { id, name, email, address, phone, info, avatar, age, departmant };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }

    const showAlert = () => {
        alertify.warning("Employee is succesfully updated.", 4);
    }

    const imageChanger = (e) => {
        setAvatar(URL.createObjectURL(e.target.files[0]))

    }

    return (
        <>
            <Container className="container2">
                <div className="row uniqueRow">
                    <div className="col-4 uniqueColLeft">

                        <Form onSubmit={handleSubmit} >

                            <img src={avatar}
                                alt="avatar-not-selected"
                                className="avatar"
                                name="avatar"
                                value={avatar}
                            />

                            <input className="input-area" accept="image/*" type="file" onChange={e => imageChanger(e)} />

                            <Form.Group className="area">
                                Name:
                                <Form.Control type="text"
                                    placeholder='Name *'
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </Form.Group>
                            <Form.Group>
                                Email:
                                <Form.Control type="text"
                                    placeholder='Email *'
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </Form.Group>
                            <Form.Group>
                                Phone:
                                <Form.Control type="text"
                                    placeholder='Phone'
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                Birthday:
                                <Form.Control type="date"
                                    placeholder='Age *'
                                    name="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />

                            </Form.Group>
                        </Form>
                    </div>
                    <div className="col-8 uniqueColRight">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                Address:
                                <Form.Control as="textarea"
                                    placeholder='Address *'
                                    name="address"
                                    value={address}
                                    rows={3}
                                    onChange={(e) => setAddress(e.target.value)} />


                            </Form.Group>
                            <Form.Group>
                                Departmant:
                                <Form.Control type="text"
                                    placeholder='Departmant *'
                                    name="departmant"
                                    value={departmant}
                                    onChange={(e) => setDepartmant(e.target.value)}
                                />

                            </Form.Group>
                            <Form.Group>
                                Info:
                                <Form.Control as="textarea"
                                    placeholder='Info *'
                                    name="info"
                                    value={info}
                                    rows={7}
                                    onChange={(e) => setInfo(e.target.value)}
                                />
                            </Form.Group>

                            <Button onClick={showAlert} variant="success" type="submit" block>
                                Edit Employee
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}
