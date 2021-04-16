package mk.ukim.finki.backend.repository;


import mk.ukim.finki.backend.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
