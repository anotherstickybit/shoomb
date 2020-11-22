package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.itpark.shoomb.manager.AlbumManager;
import tech.itpark.shoomb.model.Album;
import tech.itpark.shoomb.model.AlbumPreview;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/albums")
public class AlbumController {
    private final AlbumManager albumManager;

    @GetMapping("/{id}")
    public Album getById(@PathVariable long id) {
        return albumManager.getById(id);
    }

    @GetMapping("/artist/{id}")
    public List<AlbumPreview> getAllByArtist(@PathVariable long id) {
        return albumManager.getAllByArtist(id);
    }

}
