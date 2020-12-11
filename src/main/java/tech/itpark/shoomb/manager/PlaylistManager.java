package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.exception.EmptyParameterException;
import tech.itpark.shoomb.model.Playlist;
import tech.itpark.shoomb.model.PlaylistPreview;
import tech.itpark.shoomb.model.PlaylistTrack;
import tech.itpark.shoomb.model.Track;

import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class PlaylistManager {
    private final NamedParameterJdbcTemplate template;

    public List<PlaylistPreview> getAll() {
        return template.query(
                "select id as playlist_id, name as playlist_name from playlists order by name limit 50",
                (resultSet, i) -> new PlaylistPreview(
                        resultSet.getLong("playlist_id"),
                        resultSet.getString("playlist_name")
                )
        );
    }

    public Playlist getById(long id) {
        List<PlaylistTrack> trackList = template.query(
                "select p.id as id, p.track_id as track_id, t.name as track_name, ar.name as artist_name from playlist_track p " +
                        "inner join tracks t on t.id = p.track_id inner join albums a on a.id = t.album_id " +
                        "inner join artists ar on ar.id = a.artist_id " +
                        "where p.playlist_id = :id",
                Map.of("id", id),
                (resultSet, i) -> new PlaylistTrack(resultSet.getLong("id"), new Track(
                        resultSet.getLong("track_id"),
                        resultSet.getString("track_name"),
                        resultSet.getString("artist_name")
                ))
        );
        return template.queryForObject(
                "select p.id as playlist_id, p.name as playlist_name " +
                        "from playlists p where id = :id",
                Map.of("id", id),
                (resultSet, i) -> new Playlist(
                        resultSet.getLong("playlist_id"),
                        resultSet.getString("playlist_name"),
                        trackList
                )
        );
    }

    public void save(PlaylistPreview playlistPreview) {
        if (playlistPreview == null) {
            throw new EmptyParameterException();
        }
        if (playlistPreview.getId() == 0) {
            template.update(
                    "insert into playlists(name) values (:name)",
                    new MapSqlParameterSource(Map.of(
                            "name", playlistPreview.getName()
                    ))
            );
            return;
        }
        template.update(
                "update playlists set name = :name where id = :id",
                new MapSqlParameterSource(Map.of(
                        "id", playlistPreview.getId(),
                        "name", playlistPreview.getName()
                ))
        );
    }

    public void addTrack(long playlistId, long trackId) {
        template.update(
                "insert into playlist_track(playlist_id, track_id) values (:playlist_id, :track_id)",
                new MapSqlParameterSource(Map.of(
                        "playlist_id", playlistId,
                        "track_id", trackId
                ))
        );
    }

    public void removeTrack(long playlistTrackId) {
        template.update(
                "delete from playlist_track where id = :id",
                new MapSqlParameterSource(Map.of(
                        "id", playlistTrackId
                ))
        );
    }

    public void removePlaylist(long id) {
        template.update(
                "delete from playlist_track where playlist_id = :id",
                Map.of("id", id)
        );
        template.update(
                "delete from playlists where id = :id",
                Map.of("id", id)
        );
    }

}
