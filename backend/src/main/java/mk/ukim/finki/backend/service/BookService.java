package mk.ukim.finki.backend.service;

import mk.ukim.finki.backend.model.Book;
import mk.ukim.finki.backend.model.dto.BookDto;
import mk.ukim.finki.backend.model.enumeration.Category;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface BookService {
    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> save(BookDto bookDto);

    Optional<Book> edit(Long id, BookDto bookDto);

    void deleteById(Long id);

    void markAsTaken(Long id);
}
