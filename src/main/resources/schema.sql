create table artists(
    id integer primary key auto_increment,
    name varchar(255) not null
);

create table albums(
    id integer primary key auto_increment,
    artist varchar(255) not null,
    name varchar(255) not null unique,
    img_url varchar(255) not null,
    foreign key(artist) references artists
);

create table tracks(
    id integer primary key auto_increment,
    name varchar(255) not null,
    artist integer not null,
    album integer not null,
    foreign key (artist) references artists,
    foreign key (album) references albums
);

create table playlists(
    id integer primary key auto_increment,
    name varchar(255) not null,
    track_id integer not null,
    foreign key (track_id) references tracks
);


