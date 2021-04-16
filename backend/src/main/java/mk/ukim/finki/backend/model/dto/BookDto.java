package mk.ukim.finki.backend.model.dto;

import lombok.Data;

@Data
public class BookDto {
    private String name;

    private String category;

    private Long authorId;

    private Integer availableCopies;

    public BookDto(String name, String category, Long authorId, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.authorId = authorId;
        this.availableCopies = availableCopies;
    }

    public BookDto() {
    }
}
