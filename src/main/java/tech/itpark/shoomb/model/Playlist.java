package tech.itpark.shoomb.model;

import lombok.Value;

import java.util.List;
import java.util.Set;

@Value
public class Playlist {
    String name;
    List<Track> trackList;
}
