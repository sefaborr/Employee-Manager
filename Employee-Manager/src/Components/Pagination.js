import { React, useEffect, useState } from 'react'

export default function Pagination({ pages, setCurrentPage, currentEmployees, sortedEmployees }) {

    const numberOfPages = [];
    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1);


    useEffect(() => {
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])

    return (
        <div className="clearfix">
            <div className="hint-text"> Showing <b> {currentEmployees.length} </b> out of <b> {sortedEmployees.length} </b>  </div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                >Previous</a></li>
                {
                    numberOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? "page-item active" : "page-item"}`}><a href="#!" className="page-link"
                                onClick={() => setCurrentButton(page)}
                            > {page} </a></li>
                        )
                    })
                }
                <li className={`${currentButton === numberOfPages.length ? "page-item disabled" : "page-item"}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}
                >Next</a></li>
            </ul>
        </div>
    )
}



