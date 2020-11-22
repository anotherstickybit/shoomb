create table artists(
    id integer primary key auto_increment,
    name varchar(255) not null
);

create table albums(
    id integer primary key auto_increment,
    artist_id integer not null,
    name varchar(255) not null,
    img_url varchar(255) not null,
    foreign key(artist_id) references artists
);

create table tracks(
    id integer primary key auto_increment,
    name varchar(255) not null,
    album_id integer not null,
    foreign key (album_id) references albums
);

create table playlists(
    id integer primary key auto_increment,
    name varchar(255) not null unique
);

create table playlist_track(
    playlist_id integer not null,
    track_id integer not null,
    foreign key (playlist_id) references playlists,
    foreign key (track_id) references tracks
);

create table genres(
    id integer primary key auto_increment,
    name varchar(255) not null unique
);

create table genre_artist(
    genre_id integer not null,
    artist_id integer not null,
    foreign key (genre_id) references genres,
    foreign key (artist_id) references artists
);


