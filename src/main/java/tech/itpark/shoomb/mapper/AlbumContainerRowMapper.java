package tech.itpark.shoomb.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.RowMapper;
import tech.itpark.shoomb.model.AlbumContainer;
import tech.itpark.shoomb.model.Artist;

import java.sql.ResultSet;
import java.sql.SQLException;

@RequiredArgsConstructor
public class AlbumContainerRowMapper implements RowMapper<AlbumContainer> {

    @Override
    public AlbumContainer mapRow(ResultSet resultSet, int i) throws SQLException {
        return new AlbumContainer(
                resultSet.getLong("album_id"),
                resultSet.getString("album_name"),
                new Artist(resultSet.getLong("artist_id"), resultSet.getString("artist_name"))
        );
    }
}
