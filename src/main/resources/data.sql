insert into artists(name)
values ('Metallica'),
       ('AC/DC'),
       ('Green Day'),
       ('Imagine Dragons'),
       ('Eminem')
;

INSERT INTO albums(artist_id, name, img_url)
VALUES (1, 'Master of Puppets', 'https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg'),
       (1, 'Black Album', 'https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg'),
       (1, 'Hardwired…', 'https://upload.wikimedia.org/wikipedia/ru/9/93/Metallica_Hardwired..._To_Self-Destruct_2016.jpeg'),
       (2, 'Back in Black', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Acdc_backinblack_cover.jpg'),
       (2, 'Highway to Hell', 'https://upload.wikimedia.org/wikipedia/ru/5/53/HighwayHellCover.jpg'),
       (2, 'Power Up', 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4f/ACDCPowerUp.jpg/800px-ACDCPowerUp.jpg'),
       (3, 'American Idiot', 'https://upload.wikimedia.org/wikipedia/ru/c/c0/Greenday_americanidiot.png'),
       (3, 'Dookie', 'https://upload.wikimedia.org/wikipedia/ru/2/2e/Dookie.jpg'),
       (4, 'Dragons1', 'url5')
;

insert into tracks(name, album_id)
values ('Battery', 1),
       ('Master of Puppets', 1),
       ('The Thing That Should Not Be', 1),
       ('Welcome Home (Sanitarium)', 1),
       ('Disposable Heroes', 1),
       ('Leper Messiah', 1),
       ('Damage, Inc', 1),
       ('Enter Sandman', 2),
       ('Sad but True', 2),
       ('Holier Than Thou', 2),
       ('The Unforgiven', 2),
       ('Wherever I May Roam', 2),
       ('Don''t Tread on Me', 2),
       ('Through the Never', 2),
       ('Nothing Else Matters', 2),
       ('Of Wolf & Man', 2),
       ('The God That Failed', 2),
       ('My Friend of Misery', 2),
       ('The Struggle Within', 2),
       ('Hardwired', 3),
       ('Atlas, Rise!', 3),
       ('Now That We''re Dead', 3),
       ('Moth Into Flame', 3),
       ('Dream No More', 3),
       ('Halo On Fire', 3),
       ('Confusion', 3),
       ('ManUNkind', 3),
       ('Here Comes Revenge', 3),
       ('Am I Savage?', 3),
       ('Murder One', 3),
       ('Spit Out The Bone', 3),
       ('Hells Bells', 4),
       ('Shoot to Thrill', 4),
       ('What Do You Do for Money Honey', 4),
       ('Givin’ the Dog a Bone', 4),
       ('Let Me Put My Love into You', 4),
       ('Back in Black', 4),
       ('You Shook Me All Night Long', 4),
       ('Have a Drink on Me', 4),
       ('Rock And Roll Ain’t Noise Pollution', 4),
       ('Highway to Hell', 5),
       ('Girls Got Rhythm', 5),
       ('Walk All Over You', 5),
       ('Touch Too Much', 5),
       ('Beating Around the Bush', 5),
       ('Shot Down in Flames', 5),
       ('Get It Hot', 5),
       ('If You Want Blood (You''ve Got It)', 5),
       ('Love Hungry Man', 5),
       ('Night Prowler', 5),
       ('Realize', 6),
       ('Rejection', 6),
       ('Shot in the Dark', 6),
       ('Through the Mists of Time', 6),
       ('Kick You When You''re Down', 6),
       ('Witch''s Spell', 6),
       ('Demon Fire', 6),
       ('Wild Reputation', 6),
       ('No Man''s Land', 6),
       ('Systems Down', 6),
       ('Money Shot', 6),
       ('Code Red', 6),
       ('American Idiot', 7),
       ('Jesus of Suburbia', 7),
       ('Holiday', 7),
       ('Boulevard of Broken Dreams', 7),
       ('Are We the Waiting', 7),
       ('St. Jimmy', 7),
       ('Give Me Novacaine', 7),
       ('She''s a Rebel', 7),
       ('Extraordinary Girl', 7),
       ('Letterbomb', 7),
       ('Wake Me Up When September Ends', 7),
       ('Homecoming', 7),
       ('Whatsername', 7),
       ('Burnout', 8),
       ('Having a Blast', 8),
       ('Chump', 8),
       ('Longview', 8),
       ('Welcome to Paradise', 8),
       ('Pulling Teeth', 8),
       ('Basket Case', 8),
       ('She', 8),
       ('Sassafras Roots', 8),
       ('When I Come Around', 8),
       ('Coming Clean', 8),
       ('Emenius Sleepus', 8),
       ('In the End', 8)
;

insert into playlists(name)
VALUES ('избранное'),
       ('рок'),
       ('тренировка')

;

insert into playlist_track(playlist_id, track_id)
VALUES (1, 2),
       (1, 3),
       (1, 4),
       (1, 7),
       (2, 2),
       (2, 3),
       (3, 10),
       (3, 4),
       (3, 2)
;

insert into genres(name)
values ( 'Рок' ),
       ( 'Рэп и хип-хоп' ),
       ( 'Электроника' ),
       ( 'Классика' )
;

insert into genre_artist(genre_id, artist_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (2, 5)
;