package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.itpark.shoomb.manager.PlaylistManager;
import tech.itpark.shoomb.model.Playlist;
import tech.itpark.shoomb.model.PlaylistContainer;

import java.util.List;

@RestController
@RequestMapping("/playlists")
@RequiredArgsConstructor
public class PlaylistController {
    private final PlaylistManager playlistManager;

    @RequestMapping
    public List<PlaylistContainer> getAll() {
        return playlistManager.getAll();
    }

    @RequestMapping("/{name}")
    public Playlist getByName(@PathVariable String name) {
        return playlistManager.getByName(name);
    }

}
