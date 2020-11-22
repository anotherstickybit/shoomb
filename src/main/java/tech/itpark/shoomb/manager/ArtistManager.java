package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.model.Artist;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class ArtistManager {
    private final NamedParameterJdbcTemplate template;

    public List<Artist> getAll() {
        return template.query(
                "select id as artist_id, name as artist_name from artists order by name limit 50",
                (resultSet, i) -> new Artist(
                        resultSet.getLong("artist_id"),
                        resultSet.getString("artist_name")
                )
        );
    }

    public Artist getById(long id) {
        return template.queryForObject(
                "select id as artist_id, name as artist_name from artists where id = :id",
                Map.of("id", id),
                (resultSet, i) -> new Artist(
                        resultSet.getLong("artist_id"),
                        resultSet.getString("artist_name")
                )
        );
    }

    public List<Artist> search(String text) {
        return template.query(
                "select a.id as artist_id, a.name as artist_name from artists a where lower(a.name) like :text",
                Map.of("text", "%" + text.toLowerCase() +"%"),
                (resultSet, i) -> new Artist(
                        resultSet.getLong("artist_id"),
                        resultSet.getString("artist_name")
                )
        );
    }
}
