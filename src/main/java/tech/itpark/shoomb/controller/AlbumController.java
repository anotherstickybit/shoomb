package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.itpark.shoomb.manager.AlbumManager;
import tech.itpark.shoomb.model.Album;

@RestController
@RequiredArgsConstructor
@RequestMapping("/albums")
public class AlbumController {
    private final AlbumManager albumManager;

    @RequestMapping("/{id}")
    public Album getById(@PathVariable long id) {
        return albumManager.getById(id);
    }
}
