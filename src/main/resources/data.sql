insert into artists(name)
values ('Metallica'),
       ('AC/DC'),
       ('Green Day'),
       ('Imagine Dragons')
;

INSERT INTO albums(artist_id, name, img_url)
VALUES (1, 'Master of Puppets', 'url1'),
       (1, 'Black Album', 'url2'),
       (2, 'Back in Black', 'url3'),
       (3, 'American Idiot', 'url4'),
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
       ('The Struggle Within', 2)
;

insert into playlists(name)
VALUES ('playlist 1'),
       ('playlist 2'),
       ('playlist 3'),
       ('playlist 4'),
       ('playlist 5'),
       ('playlist 6')
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
       (3, 2),
       (4, 1),
       (4, 8)
;