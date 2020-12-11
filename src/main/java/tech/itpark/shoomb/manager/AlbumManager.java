package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.model.Album;
import tech.itpark.shoomb.model.AlbumPreview;
import tech.itpark.shoomb.model.Artist;
import tech.itpark.shoomb.model.Track;

import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class AlbumManager {
    private final NamedParameterJdbcTemplate template;

    public Album getById(long id) {
        List<Track> tracks = template.query(
                "select t.id as track_id, t.name as track_name, ar.name as artist_name from tracks t " +
                        "inner join albums a on t.album_id = a.id " +
                        "inner join artists ar on ar.id = a.artist_id where t.album_id = :id",
                Map.of("id", id),
                (resultSet, i) -> new Track(
                        resultSet.getLong("track_id"),
                        resultSet.getString("track_name"),
                        resultSet.getString("artist_name")
                )
        );

        return template.queryForObject(
                "select a.id as album_id, a.name as album_name, ar.id as artist_id, ar.name as artist_name," +
                        " a.img_url as image_url from albums a inner join artists ar on " +
                        "ar.id = a.artist_id where a.id = :id",
                Map.of("id", id),
                ((resultSet, i) -> new Album(
                        resultSet.getLong("album_id"),
                        resultSet.getString("album_name"),
                        new Artist(
                                resultSet.getLong("artist_id"),
                                resultSet.getString("artist_name")),
                        resultSet.getString("image_url"),
                        tracks
                ))
        );
    }

    public List<AlbumPreview> getAllByArtistId(long artistId) {
       return template.query(
                "select a.id as album_id, a.name as album_name, a.img_url as image_url, " +
                        "ar.id as artist_id, ar.name as artist_name  " +
                        "from albums a inner join artists ar on ar.id = a.artist_id where ar.id = :id",
                Map.of("id", artistId),
                (resultSet, i) -> new AlbumPreview(
                        resultSet.getLong("album_id"),
                        resultSet.getString("album_name"),
                        new Artist(
                                resultSet.getLong("artist_id"),
                                resultSet.getString("artist_name")),
                        resultSet.getString("image_url")
                )
        );
    }

}
