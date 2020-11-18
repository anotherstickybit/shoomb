package tech.itpark.shoomb.model;

import lombok.Value;

@Value
public class Track {
    long id;
    String name;
    String artist;
    String album;
}
