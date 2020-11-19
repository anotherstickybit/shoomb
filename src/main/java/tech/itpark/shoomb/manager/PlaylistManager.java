package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.mapper.PlaylistContainerRowMapper;
import tech.itpark.shoomb.mapper.PlaylistRowMapper;
import tech.itpark.shoomb.mapper.TrackRowMapper;
import tech.itpark.shoomb.model.Playlist;
import tech.itpark.shoomb.model.PlaylistContainer;
import tech.itpark.shoomb.model.Track;

import java.util.*;

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
        List<Track> trackList = new ArrayList<>();
        for (Long id : query) {
            trackList.add(template.queryForObject(
                    "select t.id as track_id, t.name as track_name, al.name as album_name, " +
                            "a.name as artist_name from tracks t inner join albums al on t.album = al.id " +
                            "inner join artists a on a.id = al.artist where t.id = :id",
                    Map.of("id", id),
                    trackRowMapper
            ));
        }
        return new Playlist(name, trackList);
    }

    public void createNew(Playlist item) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        template.update(
                "insert into playlists(name, track_id) values (:name, :track_id)",
                new MapSqlParameterSource(Map.of(
                    "name", item.getName(),
                    "track_id", item.getTrackList().get(0).getId()
                )),
                keyHolder
        );
    }

    public void addTrack(String playlistName, Track track) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        template.update(
                "insert into playlists(name, track_id) values (:name, :track_id)",
                new MapSqlParameterSource(Map.of(
                        "name", playlistName,
                        "track_id", track.getId()
                )),
                keyHolder
        );
    }

    public void removeTrack(String playlistName, Track track) {
        template.update(
                "delete from playlists where name = :name and track_id = :track_id",
                new MapSqlParameterSource(Map.of(
                        "name", playlistName,
                        "track_id", track.getId()
                ))
        );
    }

    public void removePlaylist(String name) {
        template.update(
                "delete from playlists where name = :name",
                Map.of("name", name)
        );
    }

}
