package tech.itpark.shoomb.model;

import lombok.Value;

@Value
public class AlbumContainer {
    long id;
    String name;
    Artist artist;
}
