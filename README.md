# API routes with REST
Endpoint https://arvore-app-api.herokuapp.com
GET /books
GET /books/:bookId
POST /activity
GET /activity
GET /activity/:activityId
POST /activity/upload
# Helper:
drop table activity;
drop table knex_migrations;
drop table knex_migrations_lock;