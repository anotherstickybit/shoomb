package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tech.itpark.shoomb.manager.PlaylistManager;
import tech.itpark.shoomb.model.Playlist;
import tech.itpark.shoomb.model.PlaylistPreview;

import java.util.List;

@RestController
@CrossOrigin
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
    public void save(@RequestBody PlaylistPreview playlistPreview) {
        playlistManager.save(playlistPreview);
    }

    @PostMapping("/add/{id}")
    public void addTrack(@PathVariable long id, @RequestParam long trackId) {
        playlistManager.addTrack(id, trackId);
    }

    @DeleteMapping("/remove/{id}")
    public void removeTrack(@PathVariable long id) {
        playlistManager.removeTrack(id);
    }

    @DeleteMapping("/removepl/{id}")
    public void removePlaylist(@PathVariable long id) {
        playlistManager.removePlaylist(id);
    }

}
