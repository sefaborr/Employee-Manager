import { React, useContext, useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { EmployeeContext } from "../Contexts/EmployeeContext"
import alertify from 'alertifyjs'



export default function AddForm() {

    const { addEmployee } = useContext(EmployeeContext)

    const [newEmployee, setNewEmployee] = useState({
        name: "", email: "", address: "", phone: "", info: "", age: "", departmant: ""
    }
    )



    const { name, email, address, phone, info, age, departmant } = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });

    }

    const [selectedImage, setSelectedImage] = useState();

    const avatar = selectedImage !== undefined && URL.createObjectURL(selectedImage)


    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone, info, avatar, age, departmant)
    }

    const showAlert = () => {
        alertify.success("Employee is succesfully added.", 4);
    }



    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    }


    return (
        <>
            <Container className="container2">
                <div className="row uniqueRow">
                    <div className="col-4 uniqueColLeft">




                        <Form onSubmit={handleSubmit} >


                            {selectedImage && (
                                <div className="preview">
                                    <img src={URL.createObjectURL(selectedImage)}
                                        alt="avatar-not-selected"
                                        className="avatar"
                                        name="avatar"
                                    />
                                </div>
                            )}

                            <input className="input-area" accept="image/*" type="file" onChange={imageChange} />

                            <Form.Group className="area">
                                Name *:
                                <Form.Control type="text"
                                    placeholder='Name'
                                    name="name"
                                    value={name}
                                    onChange={e => onInputChange(e)}
                                    required="required" />
                            </Form.Group>
                            <Form.Group>
                                Email *:
                                <Form.Control type="email"
                                    placeholder='Email'
                                    name="email"
                                    value={email}
                                    onChange={e => onInputChange(e)}
                                    required="required" />
                            </Form.Group>
                            <Form.Group>
                                Phone:
                                <Form.Control type="number"
                                    placeholder='Phone'
                                    name="phone"
                                    value={phone}
                                    onChange={e => onInputChange(e)}
                                />
                            </Form.Group>
                            <Form.Group>
                                Birthday:
                                <Form.Control type="date"
                                    placeholder='Age'
                                    name="age"
                                    value={age}
                                    onChange={e => onInputChange(e)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="col-8 uniqueColRight">
                        <Form onSubmit={handleSubmit} >
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    Address *:
                                    <Form.Control as="textarea"
                                        placeholder='Address'
                                        name="address"
                                        value={address}
                                        onChange={e => onInputChange(e)}
                                        rows={3}
                                        required="required" />
                                </Form.Group>
                                <Form.Group>
                                    Departmant *:
                                    <Form.Control type="text"
                                        placeholder='Departmant'
                                        name="departmant"
                                        value={departmant}
                                        onChange={e => onInputChange(e)}
                                        required="required"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    Info *:
                                    <Form.Control as="textarea"
                                        placeholder='Info'
                                        name="info"
                                        value={info}
                                        rows={9}
                                        onChange={e => onInputChange(e)}
                                        required="required"
                                    />
                                </Form.Group>
                            </Form>

                            <Button onClick={showAlert} variant="success" type="submit" block> Add New Employee </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}
































































