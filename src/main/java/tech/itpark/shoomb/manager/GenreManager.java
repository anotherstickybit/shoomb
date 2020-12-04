package tech.itpark.shoomb.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import tech.itpark.shoomb.model.Artist;
import tech.itpark.shoomb.model.Genre;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Component
@RequiredArgsConstructor
public class GenreManager {
    private final NamedParameterJdbcTemplate template;

    public List<Genre> getAll() {
        return template.query(
                "select id as genre_id, name as genre_name from genres order by name limit 50",
                (resultSet, i) -> new Genre(
                        resultSet.getLong("genre_id"),
                        resultSet.getString("genre_name")
                )
        );
    }

    public List<Artist> getArtistsByGenreId(Set<Long> ids) {
        return template.query(
                "select genre_id, a.id as artist_id, a.name as artist_name from genre_artist " +
                        "inner join artists a on a.id = genre_artist.artist_id " +
                        "where genre_id in ( :values )",
                Map.of("values", ids),
                (resultSet, i) -> new Artist(
                        resultSet.getLong("artist_id"),
                        resultSet.getString("artist_name")
                )
        );
    }
}
