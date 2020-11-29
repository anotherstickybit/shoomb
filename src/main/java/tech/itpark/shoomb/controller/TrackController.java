package tech.itpark.shoomb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tech.itpark.shoomb.manager.TrackManager;
import tech.itpark.shoomb.model.Track;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/tracks")
public class TrackController {
    private final TrackManager trackManager;

    @GetMapping("/search/{text}")
    public List<Track> searchByName(@PathVariable String text) {
        return trackManager.search(text);
    }
}
