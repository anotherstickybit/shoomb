package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tech.itpark.shoomb.manager.GenreManager;
import tech.itpark.shoomb.model.Artist;
import tech.itpark.shoomb.model.Genre;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping("/genres")
@RequiredArgsConstructor
public class GenreController {
    private final GenreManager genreManager;

    @GetMapping
    public List<Genre> getAll() {
        return genreManager.getAll();
    }

    @GetMapping("/artists")
    public List<Artist> getArtistsByGenreId(@RequestParam Set<Long> ids) {
        return genreManager.getArtistsByGenreId(ids);
    }
}
