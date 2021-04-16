import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookRepository from "../../repository/BookRepository";
import Categories from "../Categories/Categories";
import Books from "../Books/Books";
import Header from "../Header/Header";
import Authors from "../Authors/Authors"
import AddBooks from "../Books/AddBooks";
import EditBooks from "../Books/EditBooks";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <div className={'container'}>
                    <Route path={'/'} exact render={() => <Books onMark={this.markBook}
                                                                 onEdit={this.getBook}
                                                                 onDelete={this.deleteBook}
                                                                 books={this.state.books}/>}/>
                    <Route path={'/categories'} exact render={() => <Categories categories={this.state.categories}/>}/>
                    <Route path={'/authors'} exact render={() => <Authors authors={this.state.authors}/>}/>
                    <Route path={'/books/add'} exact render={() =>
                        <AddBooks onAddBook={this.addBook}
                                  categories={this.state.categories}
                                  authors={this.state.authors}/>}/>
                    <Route path={'/books/edit/:id'} exact render={() =>
                        <EditBooks onEditBook={this.editBook}
                                  categories={this.state.categories}
                                  authors={this.state.authors}
                                  book={this.state.selectedBook}/>}/>
                    <Route path={'/books'} exact render={() =>
                        <Books onMark={this.markBook}
                               onEdit={this.getBook}
                               onDelete={this.deleteBook}
                               books={this.state.books}/>}/>
                    <Redirect to={'/'}/>
                </div>
            </Router>
        )
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }

    loadBooks = () => {
        BookRepository.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            })
    }

    loadCategories = () => {
        BookRepository.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    loadAuthors = () => {
        BookRepository.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }

    deleteBook = (id) => {
        BookRepository.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    addBook = (name, category, authorId, availableCopies) => {
        BookRepository.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id, name, category, authorId, availableCopies) => {
        BookRepository.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        BookRepository.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    markBook = (id) => {
        BookRepository.markBook(id)
            .then(() => {
                this.loadBooks();
            })
    }
}

export default App;
