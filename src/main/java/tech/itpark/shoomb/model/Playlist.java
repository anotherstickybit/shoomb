package tech.itpark.shoomb.model;

import lombok.Value;

import java.util.List;

@Value
public class Playlist {
    long id;
    String name;
    List<Track> trackList;
}
