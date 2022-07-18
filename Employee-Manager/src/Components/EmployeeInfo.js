import { React, useState } from 'react'
import { Form, Container } from "react-bootstrap"



export default function EmployeeInfo({ EmployeeInfo }) {

    const employee = EmployeeInfo;

    const [name] = useState(employee.name);
    const [email] = useState(employee.email);
    const [address] = useState(employee.address);
    const [phone] = useState(employee.phone);
    const [info] = useState(employee.info);
    const [age] = useState(employee.age);
    const [departmant] = useState(employee.departmant);
    const [avatar] = useState(employee.avatar);

    console.log(employee);

    return (
        <Container className="container2">
            <div className="row uniqueRow">
                <div className="col-4 uniqueColLeft">

                    <Form  >

                        <img src={avatar}
                            alt="avatar-not-selected"
                            className="avatar"
                            name="avatar"
                            value={avatar} />

                        <Form.Group className="area">
                            Name:
                            <Form.Control type="text"
                                placeholder='Name *'
                                name="name"
                                value={name}
                                required />
                        </Form.Group>
                        <Form.Group>
                            Email:
                            <Form.Control type="text"
                                placeholder='Email *'
                                name="email"
                                value={email}
                                required />
                        </Form.Group>
                        <Form.Group>
                            Phone:
                            <Form.Control type="text"
                                placeholder='Phone'
                                name="phone"
                                value={phone}
                            />
                        </Form.Group>
                        <Form.Group>
                            Birthday:
                            <Form.Control type="text"
                                placeholder='Age *'
                                name="age"
                                value={age}
                            />
                        </Form.Group>
                    </Form>

                </div>
                <div className="col-8 uniqueColRight">
                    <Form  >
                        <Form.Group>
                            Address:
                            <Form.Control as="textarea"
                                placeholder='Address *'
                                name="address"
                                value={address}
                                rows={3}
                            />
                        </Form.Group>
                        <Form.Group>
                            Departmant:
                            <Form.Control type="text"
                                placeholder='Departmant *'
                                name="departmant"
                                value={departmant}
                            />
                        </Form.Group>
                        <Form.Group>
                            Info:
                            <Form.Control as="textarea"
                                placeholder='Info *'
                                name="info"
                                value={info}
                                rows={9}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </Container>
    )
}
