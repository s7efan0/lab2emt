package mk.ukim.finki.backend.service;

import mk.ukim.finki.backend.model.enumeration.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {

    List<Category> findALl();
}
