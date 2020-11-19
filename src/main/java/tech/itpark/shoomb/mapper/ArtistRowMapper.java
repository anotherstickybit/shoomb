package tech.itpark.shoomb.mapper;

import org.springframework.jdbc.core.RowMapper;
import tech.itpark.shoomb.model.Artist;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ArtistRowMapper implements RowMapper<Artist> {
    @Override
    public Artist mapRow(ResultSet resultSet, int i) throws SQLException {
        return new Artist(
                resultSet.getLong("artist_id"),
                resultSet.getString("artist_name")
        );
    }
}
