package tech.itpark.shoomb.mapper;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlaylistRowMapper implements RowMapper<Long> {
    @Override
    public Long mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return resultSet.getLong("track_id");
    }
}
