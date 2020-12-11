package tech.itpark.shoomb.model;

import lombok.Value;

import java.util.List;

@Value
public class Album {
    long id;
    String name;
    Artist artist;
    String imgURL;
    List<Track> trackList;
}
