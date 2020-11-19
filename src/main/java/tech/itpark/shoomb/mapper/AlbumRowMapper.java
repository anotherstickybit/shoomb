package tech.itpark.shoomb.mapper;

import org.springframework.jdbc.core.RowMapper;
import tech.itpark.shoomb.model.Track;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AlbumRowMapper implements RowMapper<Track> {
    @Override
    public Track mapRow(ResultSet resultSet, int i) throws SQLException {
        return new Track(
                resultSet.getLong("track_id"),
                resultSet.getString("track_name"),
                resultSet.getString("artist_name"),
                resultSet.getString("album_name")
        );
    }
}
