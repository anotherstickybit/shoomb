package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.model.Track;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class TrackManager {
    private final NamedParameterJdbcTemplate template;

    public List<Track> search(String text) {
        return template.query(
                "select t.id as track_id, t.name as track_name, ar.name as artist_name " +
                        "from tracks t inner join albums a on a.id = t.album_id " +
                        "inner join artists ar on ar.id = a.artist_id where lower(t.name) like :text",
                Map.of("text", "%" + text.toLowerCase() + "%"),
                (resultSet, i) -> new Track(
                        resultSet.getLong("track_id"),
                        resultSet.getString("track_name"),
                        resultSet.getString("artist_name")
                )
        );
    }
}
