package tech.itpark.shoomb.model;

import lombok.Value;

import java.util.List;
import java.util.Map;

@Value
public class Playlist {
    long id;
    String name;
    List<Map<Long, Track>> trackList;
}
