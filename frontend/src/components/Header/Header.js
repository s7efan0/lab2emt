import React from "react";
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark sticky-top"}>
                <Link className={"navbar-brand"} to={'/'}>Library</Link>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={'/books'}>Books</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={'/categories'}>Book categories</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={'/authors'}>Authors</Link>
                    </li>
                </ul>
                <form className={'form-inline'}>
                    <input className={'form-control'} type={'text'} placeholder={'Search'}/>
                    <button className={'btn btn-success m-2'} type={'submit'}>Search</button>
                </form>
            </nav>
        </header>
    )
}

export default Header;