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
  "exerciseId"     int            not null,
  "exerciseName"   text           not null,
  "muscleId"       int            not null,
  "muscleName"     text           not null,
  primary key ("exerciseId")
);

create table "public"."user-workouts" (
  "workoutId"      serial
  "userId"         int            not null,
  "workoutName"    int            not null,
  "exerciseCount"  int            not null,
  "createdAt"      timestamptz(6) not null default now(),

  primary key ("workoutId");
  foreign key ("workoutId")
);
