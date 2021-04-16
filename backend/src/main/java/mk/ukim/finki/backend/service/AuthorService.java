package mk.ukim.finki.backend.service;

import mk.ukim.finki.backend.model.Author;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AuthorService {
    List<Author> findAll();
}
