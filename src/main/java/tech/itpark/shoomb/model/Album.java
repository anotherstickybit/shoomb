package tech.itpark.shoomb.model;

import lombok.Value;

import java.util.List;
import java.util.Set;

@Value
public class Album {
    long id;
    String name;
    Artist artist;
    List<Track> trackList;
}
