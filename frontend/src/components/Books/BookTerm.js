import React from 'react';
import {Link} from 'react-router-dom';

const BookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.availableCopies}</td>
            <td>{props.term.author.name}</td>
            <td>{props.term.author.surname}</td>
            <td>{props.term.author.country.name}</td>
            <td className={'text-right'}>
                <a title={'Delete'} className={'btn btn-danger'}
                   onClick={(e) => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={(e) => {
                          props.onEdit(props.term.id)
                      }}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={'Mark'} className={'btn btn-success ml-2'}
                   onClick={(e) => {
                       props.onMark(props.term.id)
                   }}>
                    Mark as taken
                </a>
            </td>
        </tr>
    )
}

export default BookTerm;