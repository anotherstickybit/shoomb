package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.mapper.AlbumContainerRowMapper;
import tech.itpark.shoomb.mapper.AlbumRowMapper;
import tech.itpark.shoomb.model.Album;
import tech.itpark.shoomb.model.AlbumContainer;
import tech.itpark.shoomb.model.Track;

import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class AlbumManager {
    private final NamedParameterJdbcTemplate template;
    private final AlbumContainerRowMapper albumContainerRowMapper = new AlbumContainerRowMapper();
    private final AlbumRowMapper albumRowMapper = new AlbumRowMapper();

    public Album getById(long id) {
        AlbumContainer albumContainer = template.queryForObject(
                "select a.id as album_id, a.name as album_name, ar.id as artist_id, ar.name as artist_name " +
                        " from albums a " +
                        "inner join artists ar on ar.id = a.artist where a.id = :id",
                Map.of("id", id),
                albumContainerRowMapper
        );
        List<Track> tracks = template.query(
                "select t.id as track_id, t.name as track_name, ar.name as artist_name, a.name as album_name " +
                        "from tracks t inner join albums a on a.id = t.album " +
                        "inner join artists ar on ar.id = a.artist where t.album = :id",
                Map.of("id", id),
                albumRowMapper
        );

        return new Album(id, albumContainer.getName(), albumContainer.getArtist(), tracks);
    }

}
