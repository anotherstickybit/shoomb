package tech.itpark.shoomb;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@AutoConfigureMockMvc
@SpringBootTest
class ShoombApplicationTests {

    @Autowired
    MockMvc mockMvc;

    @Test
    void crudTest() throws Exception {
        mockMvc.perform(get("/playlists"))
                .andExpect(content().json("[\n" +
                        "  {\n" +
                        "    \"id\": 1,\n" +
                        "    \"name\": \"избранное\"\n" +
                        "  },\n" +
                        "  {\n" +
                        "    \"id\": 2,\n" +
                        "    \"name\": \"рок\"\n" +
                        "  },\n" +
                        "  {\n" +
                        "    \"id\": 3,\n" +
                        "    \"name\": \"тренировка\"\n" +
                        "  }\n" +
                        "]"));

        mockMvc.perform(get("/playlists/1"))
                .andExpect(content().json("{\n" +
                        "  \"id\": 1,\n" +
                        "  \"name\": \"избранное\",\n" +
                        "  \"trackList\": [\n" +
                        "    {\n" +
                        "      \"id\": 1,\n" +
                        "      \"track\": {\n" +
                        "        \"id\": 2,\n" +
                        "        \"name\": \"Master of Puppets\",\n" +
                        "        \"artistName\": \"Metallica\"\n" +
                        "      }\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 2,\n" +
                        "      \"track\": {\n" +
                        "        \"id\": 3,\n" +
                        "        \"name\": \"The Thing That Should Not Be\",\n" +
                        "        \"artistName\": \"Metallica\"\n" +
                        "      }\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 3,\n" +
                        "      \"track\": {\n" +
                        "        \"id\": 4,\n" +
                        "        \"name\": \"Welcome Home (Sanitarium)\",\n" +
                        "        \"artistName\": \"Metallica\"\n" +
                        "      }\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 4,\n" +
                        "      \"track\": {\n" +
                        "        \"id\": 7,\n" +
                        "        \"name\": \"Damage, Inc\",\n" +
                        "        \"artistName\": \"Metallica\"\n" +
                        "      }\n" +
                        "    }\n" +
                        "  ]\n" +
                        "}"));

        mockMvc.perform(get("/artists/search/gree"))
                .andExpect(content().json("[\n" +
                        "  {\n" +
                        "    \"id\": 3,\n" +
                        "    \"name\": \"Green Day\"\n" +
                        "  }\n" +
                        "]"));

        mockMvc.perform(get("/tracks/search/enter"))
                .andExpect(content().json("[\n" +
                        "  {\n" +
                        "    \"id\": 8,\n" +
                        "    \"name\": \"Enter Sandman\",\n" +
                        "    \"artistName\": \"Metallica\"\n" +
                        "  }\n" +
                        "]"));

        mockMvc.perform(get("/albums/4"))
                .andExpect(content().json("{\n" +
                        "  \"id\": 4,\n" +
                        "  \"name\": \"Back in Black\",\n" +
                        "  \"artist\": {\n" +
                        "    \"id\": 2,\n" +
                        "    \"name\": \"AC/DC\"\n" +
                        "  },\n" +
                        "  \"imgURL\": \"https://upload.wikimedia.org/wikipedia/commons/b/be/Acdc_backinblack_cover.jpg\",\n" +
                        "  \"trackList\": [\n" +
                        "    {\n" +
                        "      \"id\": 32,\n" +
                        "      \"name\": \"Hells Bells\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 33,\n" +
                        "      \"name\": \"Shoot to Thrill\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 34,\n" +
                        "      \"name\": \"What Do You Do for Money Honey\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 35,\n" +
                        "      \"name\": \"Givin’ the Dog a Bone\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 36,\n" +
                        "      \"name\": \"Let Me Put My Love into You\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 37,\n" +
                        "      \"name\": \"Back in Black\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 38,\n" +
                        "      \"name\": \"You Shook Me All Night Long\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 39,\n" +
                        "      \"name\": \"Have a Drink on Me\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    },\n" +
                        "    {\n" +
                        "      \"id\": 40,\n" +
                        "      \"name\": \"Rock And Roll Ain’t Noise Pollution\",\n" +
                        "      \"artistName\": \"AC/DC\"\n" +
                        "    }\n" +
                        "  ]\n" +
                        "}"));

        mockMvc.perform(get("/albums/artist/1"))
                .andExpect(content().json("[\n" +
                        "  {\n" +
                        "    \"id\": 1,\n" +
                        "    \"name\": \"Master of Puppets\",\n" +
                        "    \"artist\": {\n" +
                        "      \"id\": 1,\n" +
                        "      \"name\": \"Metallica\"\n" +
                        "    },\n" +
                        "    \"imgURL\": \"https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg\"\n" +
                        "  },\n" +
                        "  {\n" +
                        "    \"id\": 2,\n" +
                        "    \"name\": \"Black Album\",\n" +
                        "    \"artist\": {\n" +
                        "      \"id\": 1,\n" +
                        "      \"name\": \"Metallica\"\n" +
                        "    },\n" +
                        "    \"imgURL\": \"https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg\"\n" +
                        "  },\n" +
                        "  {\n" +
                        "    \"id\": 3,\n" +
                        "    \"name\": \"Hardwired…\",\n" +
                        "    \"artist\": {\n" +
                        "      \"id\": 1,\n" +
                        "      \"name\": \"Metallica\"\n" +
                        "    },\n" +
                        "    \"imgURL\": \"https://upload.wikimedia.org/wikipedia/ru/9/93/Metallica_Hardwired..._To_Self-Destruct_2016.jpeg\"\n" +
                        "  }\n" +
                        "]"));

                mockMvc.perform(get("/artists/1"))
                .andExpect(content().json("{\n" +
                        "  \"id\": 1,\n" +
                        "  \"name\": \"Metallica\"\n" +
                        "}"));


    }


}
