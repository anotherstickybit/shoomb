package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.itpark.shoomb.manager.ArtistManager;
import tech.itpark.shoomb.model.Artist;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/artists")
public class ArtistController {
    private final ArtistManager artistManager;

    @RequestMapping
    public List<Artist> getAll() {
        return artistManager.getAll();
    }

    @RequestMapping("/{id}")
    public Artist getById(@PathVariable long id) {
        return artistManager.getById(id);
    }
}
