# API Endpoints

## HTML API

### Root

* `GET /` - returns React web app

## JSON API

### Users

* `POST /api/users` - needs `username` and `password`, returns `current_user`

### Session

* `POST /api/session` - needs `username` and `password`, returns `current_user`
* `DELETE /api/session` - returns `current_user`
* `GET /api/session` - needs something...., returns `current_user`

### Subjects

* `GET /api/subjects`
  * can take `tag_name` and/or `search_string`
  * returns matched `subjects` or all `subjects`
* `GET /api/subjects/:id`
PATCH /api/subjects/:id
DELETE /api/subjects/:id

### Decks

* `GET /api/decks`
  * can take `user_id`, otherwise returns all decks
  * used when getting list of user's decks
* `POST /api/decks`
  * needs `title`, `user_id`, `subject`, can take `description`
  * creates `new Subject` if did not exist
  * returns `deck` with same params, might have `errors`
* `GET /api/decks/:id`
  * needs `id`, can take `user_id`
  * returns `deck` with `num_cards`, `title`, `description`
    * if `user_id` supplied, returns `mastery_percentage` and `cards_studied`
  * used for browsing decks, and if logged-in, for seeing stats in library
* `DELETE /api/decks/:id`
  * needs `id`
  * only deletes if `current_user` corresponds to `owner_id`
* `GET /api/decks/:id/cards`
  * index of all cards for a given deck `id`
  * used when studying
