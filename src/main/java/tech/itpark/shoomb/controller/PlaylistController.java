package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tech.itpark.shoomb.manager.PlaylistManager;
import tech.itpark.shoomb.model.Playlist;
import tech.itpark.shoomb.model.PlaylistPreview;

import java.util.List;

@RestController
@RequestMapping("/playlists")
@RequiredArgsConstructor
public class PlaylistController {
    private final PlaylistManager playlistManager;

    @GetMapping
    public List<PlaylistPreview> getAll() {
        return playlistManager.getAll();
    }

    @GetMapping("/{id}")
    public Playlist getById(@PathVariable long id) {
        return playlistManager.getById(id);
    }

    @PostMapping
    public void createNew(@RequestBody PlaylistPreview playlistPreview) {
        playlistManager.createNew(playlistPreview);
    }

    @PostMapping("/add/{id}")
    public void addTrack(@PathVariable long id, @RequestParam long trackId) {
        playlistManager.addTrack(id, trackId);
    }

    @PostMapping("/remove/{id}")
    public void removeTrack(@PathVariable long id, @RequestParam long trackId) {
        playlistManager.removeTrack(id, trackId);
    }

    @PostMapping("/removepl/{id}")
    public void removeTrack(@PathVariable long id) {
        playlistManager.removePlaylist(id);
    }

}
