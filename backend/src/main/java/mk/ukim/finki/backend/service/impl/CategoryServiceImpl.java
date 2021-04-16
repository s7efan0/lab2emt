package mk.ukim.finki.backend.service.impl;

import mk.ukim.finki.backend.model.enumeration.Category;
import mk.ukim.finki.backend.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Override
    public List<Category> findALl() {
        return Arrays.stream(Category.values()).collect(Collectors.toList());
    }
}
