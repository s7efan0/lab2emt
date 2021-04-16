import React from "react";

const authors = (props) => {
    return (
        <div className={'container mt-5'}>
            <div className={'row'}>
                <div className={'table-responsive'}>
                    <table className={'table table-striped'}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map(term => {
                            return (
                                <tr>
                                    <td>{term.id}</td>
                                    <td>{term.name}</td>
                                    <td>{term.surname}</td>
                                    <td>{term.country.name}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default authors;