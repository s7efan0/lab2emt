import React from "react";

const categories = (props) => {
    return (
        <div className={'container mt-5'}>
            <div className={'row'}>
                <div className={'table-responsive'}>
                    <table className={'table table-striped'}>
                        <thead>
                        <tr>
                            <th>Category name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map(term => {
                            return (
                                <tr>
                                    <td>{term}</td>
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

export default categories;