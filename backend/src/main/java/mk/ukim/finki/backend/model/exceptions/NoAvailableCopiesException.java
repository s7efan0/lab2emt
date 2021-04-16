package mk.ukim.finki.backend.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NoAvailableCopiesException extends RuntimeException {
    public NoAvailableCopiesException(Long id) {
        super(String.format("Book with id: %d has no available copies", id));
    }
}
