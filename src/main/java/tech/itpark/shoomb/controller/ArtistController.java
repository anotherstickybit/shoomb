package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tech.itpark.shoomb.manager.ArtistManager;
import tech.itpark.shoomb.model.Artist;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/artists")
public class ArtistController {
    private final ArtistManager artistManager;

    @GetMapping
    public List<Artist> getAll() {
        return artistManager.getAll();
    }

    @GetMapping("/{id}")
    public Artist getById(@PathVariable long id) {
        return artistManager.getById(id);
    }

    @GetMapping("/search/{text}")
    public List<Artist> searchByName(@PathVariable String text) {
        return artistManager.search(text);
    }

}
