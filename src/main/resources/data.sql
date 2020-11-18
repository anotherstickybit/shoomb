insert into artists(name) values
    ('Metallica'),
    ('AC/DC'),
    ('Green Day'),
    ('Imagine Dragons')
;

INSERT INTO albums(artist, name, img_url) VALUES
(1, 'Master of Puppets', 'url1'),
(1, 'Black Album', 'url2'),
(2, 'Back in Black', 'url3'),
(3, 'American Idiot', 'url4'),
(4, 'Dragons1', 'url5')
;

insert into tracks(name, artist, album) values
( 'Battery', 1, 1 ),
( 'Master of Puppets', 1, 1 ),
( 'The Thing That Should Not Be', 1, 1 ),
( 'Welcome Home (Sanitarium)', 1, 1 ),
( 'Disposable Heroes', 1, 1 ),
( 'Leper Messiah', 1, 1 ),
( 'Damage, Inc', 1, 1 ),
( 'Enter Sandman', 1, 2 ),
( 'Sad but True', 1, 2 ),
( 'Holier Than Thou', 1, 2 ),
( 'The Unforgiven', 1, 2 ),
( 'Wherever I May Roam', 1, 2 ),
( 'Don''t Tread on Me', 1, 2 ),
( 'Through the Never', 1, 2 ),
( 'Nothing Else Matters', 1, 2 ),
( 'Of Wolf & Man', 1, 2 ),
( 'The God That Failed', 1, 2 ),
( 'My Friend of Misery', 1, 2 ),
( 'The Struggle Within', 1, 2 )
;

insert into playlists(name, track_id) VALUES
( 'playlist 1', 2 ),
( 'playlist 1', 5 ),
( 'playlist 1', 7 ),
( 'playlist 2', 1 ),
( 'playlist 2', 3 ),
( 'playlist 2', 8 )
;