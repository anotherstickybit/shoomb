package tech.itpark.shoomb.model;

import lombok.Value;

@Value
public class AlbumPreview {
    long id;
    String name;
    Artist artist;
    String imgURL;
}
