package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tech.itpark.shoomb.manager.PlaylistManager;
import tech.itpark.shoomb.model.Playlist;
import tech.itpark.shoomb.model.PlaylistContainer;

import java.util.List;

@RestController
@RequestMapping("/playlists")
@RequiredArgsConstructor
public class PlaylistController {
    private final PlaylistManager playlistManager;

    @GetMapping
    public List<PlaylistContainer> getAll() {
        return playlistManager.getAll();
    }

    @GetMapping("/{name}")
    public Playlist getByName(@PathVariable String name) {
        return playlistManager.getByName(name);
    }

    @PostMapping
    public void save(@RequestBody Playlist item) {
        playlistManager.createNew(item);
    }

    @DeleteMapping("/delete/{name}")
    public void delete(@PathVariable String name) {
        playlistManager.removePlaylist(name);
    }

}
