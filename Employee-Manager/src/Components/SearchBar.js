import { React, useContext } from 'react'
import { EmployeeContext } from "../Contexts/EmployeeContext"

export default function SearchBar() {


    const { searchEmployee } = useContext(EmployeeContext)




    return (

        <div className="row">
            <div className="col-sm-12">
                <input onChange={searchEmployee}
                    type="text"
                    className="form-control search-bar"
                    placeholder="Search a employee"
                />
            </div>
        </div>

    )
}
