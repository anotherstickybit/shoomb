package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.mapper.ArtistRowMapper;
import tech.itpark.shoomb.model.Artist;

import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class ArtistManager {
    private final NamedParameterJdbcTemplate template;
    private final ArtistRowMapper artistRowMapper = new ArtistRowMapper();

    public List<Artist> getAll() {
        return template.query(
                "select id as artist_id, name as artist_name from artists order by name limit 50",
                artistRowMapper
        );
    }

    public Artist getById(long id) {
        return template.queryForObject(
                "select id as artist_id, name as artist_name from artists where id = :id",
                Map.of("id", id),
                artistRowMapper
        );
    }
}
