create table users (
    user_id serial,
    display_name varchar not null,
    password varchar not null,
    email varchar not null,
    profile_picture varchar 
)
create table users (
    id serial,
    first_name varchar not null,
    last_name varchar not null,
    password varchar not null,
    email varchar not null,
    profile_picture varchar 
)



create table yearbook (
    yearbook_id serial,
    year varchar not null,
    classname varchar not null,
    join_code varchar
)

create table yearbook_users (
    yearbook_id serial not null,
    user_id serial not null,
    fav_quote varchar,
    admin boolean,
)

create table bios (
    yearbook_id serial not null, // join with  yearbookTable
    user_id serial not null, // join with  userTable
    linkedIn varchar,
    facebook varchar,
    fav_quote varchar
)
create table superlatives (
    yearbook_id serial,
    display_name varchar,
    superlatives_name varchar
)

create table signatures (
    interation_id serial,
    signature varchar,
)