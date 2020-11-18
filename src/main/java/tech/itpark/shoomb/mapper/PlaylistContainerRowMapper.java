package tech.itpark.shoomb.mapper;

import org.springframework.jdbc.core.RowMapper;
import tech.itpark.shoomb.model.PlaylistContainer;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlaylistContainerRowMapper implements RowMapper<PlaylistContainer> {
    @Override
    public PlaylistContainer mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return new PlaylistContainer(
                resultSet.getString("name")
        );
    }
}
