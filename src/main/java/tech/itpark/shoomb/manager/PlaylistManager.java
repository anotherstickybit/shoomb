package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.mapper.PlaylistContainerRowMapper;
import tech.itpark.shoomb.mapper.PlaylistRowMapper;
import tech.itpark.shoomb.mapper.TrackRowMapper;
import tech.itpark.shoomb.model.Playlist;
import tech.itpark.shoomb.model.PlaylistContainer;
import tech.itpark.shoomb.model.Track;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class PlaylistManager {
    private final NamedParameterJdbcTemplate template;
    private final PlaylistContainerRowMapper containerRowMapper = new PlaylistContainerRowMapper();
    private final PlaylistRowMapper playlistRowMapper = new PlaylistRowMapper();
    private final TrackRowMapper trackRowMapper = new TrackRowMapper();

    public List<PlaylistContainer> getAll() {
        return template.query(
                "select distinct name from playlists order by name",
                containerRowMapper
        );
    }

    public Playlist getByName(String name) {
        List<Long> query = template.query(
                "select p.track_id from playlists p inner join tracks t on p.track_id = t.id " +
                        "inner join albums a on t.album = a.id where p.name = :name",
                Map.of("name", name),
                playlistRowMapper
        );
        Set<Track> trackSet = new HashSet<>();
        for (Long id : query) {
            trackSet.add(template.queryForObject(
                    "select t.id as track_id, t.name as track_name, al.name as album_name, " +
                            "a.name as artist_name from tracks t inner join albums al on t.album = al.id " +
                            "inner join artists a on a.id = al.artist where t.id = :id",
                    Map.of("id", id),
                    trackRowMapper
            ));
        }
        return new Playlist(name, trackSet);
    }

}
