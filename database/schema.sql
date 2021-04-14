set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."users" (
  "userId"         serial,
  "username"       text           not null,
  "password"       text           not null,
  "createdAt"      timestamptz(6) not null default now(),
  primary key ("userId"),
  unique ("username")
);

create table "public"."saved-exercises" (
  "userId"         int            not null,
  "username"       text           not null,
  "exerciseId"     int            not null,
  primary key ("exerciseId")
);
