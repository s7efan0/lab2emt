package mk.ukim.finki.backend.service.impl;

import mk.ukim.finki.backend.model.Author;
import mk.ukim.finki.backend.model.Book;
import mk.ukim.finki.backend.model.dto.BookDto;
import mk.ukim.finki.backend.model.enumeration.Category;
import mk.ukim.finki.backend.model.exceptions.AuthorNotFoundException;
import mk.ukim.finki.backend.model.exceptions.BookNotFoundException;
import mk.ukim.finki.backend.model.exceptions.NoAvailableCopiesException;
import mk.ukim.finki.backend.repository.AuthorRepository;
import mk.ukim.finki.backend.repository.BookRepository;
import mk.ukim.finki.backend.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Optional<Book> save(BookDto bookDto) {
        Author author = authorRepository
                .findById(bookDto.getAuthorId())
                .orElseThrow(() -> new AuthorNotFoundException(bookDto.getAuthorId()));
        Book book = new Book(bookDto.getName(), Category.valueOf(bookDto.getCategory()), author, bookDto
                .getAvailableCopies());
        bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public Optional<Book> edit(Long id, BookDto bookDto) {
        Author author = authorRepository
                .findById(bookDto.getAuthorId())
                .orElseThrow(() -> new AuthorNotFoundException(bookDto.getAuthorId()));
        Book book = bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));

        book.setName(bookDto.getName());
        book.setCategory(Category.valueOf(bookDto.getCategory()));
        book.setAuthor(author);
        book.setAvailableCopies(bookDto.getAvailableCopies());

        bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void markAsTaken(Long id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        Integer availableCopies = book.getAvailableCopies();
        if (availableCopies == 0) {
            throw new NoAvailableCopiesException(id);
        }
        availableCopies -= 1;
        book.setAvailableCopies(availableCopies);
        bookRepository.save(book);
    }

}
