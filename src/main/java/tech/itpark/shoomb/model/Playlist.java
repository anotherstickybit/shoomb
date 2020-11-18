package tech.itpark.shoomb.model;

import lombok.Value;

import java.util.Set;

@Value
public class Playlist {
    String name;
    Set<Track> trackSet;
}
