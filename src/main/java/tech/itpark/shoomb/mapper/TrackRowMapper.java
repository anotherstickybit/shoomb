package tech.itpark.shoomb.mapper;

import org.springframework.jdbc.core.RowMapper;
import tech.itpark.shoomb.model.Track;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TrackRowMapper implements RowMapper<Track> {
    @Override
    public Track mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return new Track(
                resultSet.getLong("track_id"),
                resultSet.getString("track_name"),
                resultSet.getString("artist_name"),
                resultSet.getString("album_name")
        );
    }
}
