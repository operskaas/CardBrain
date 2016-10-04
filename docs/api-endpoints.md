# API Endpoints

## HTML API

### Root

* `GET /` - returns React web app

## JSON API

### Users

* `POST /api/users`
  * needs `username` and `password`
  * returns `current_user`

### Session

* `POST /api/session`
  * needs `username` and `password`
  * returns `current_user`
* `DELETE /api/session`
  <!-- might not need to return anything-->
  * returns empty `current_user`
* `GET /api/session`
<!-- endpoint might not be needed-->
  * returns `current_user`

### Subjects

* `GET /api/subjects`
  * can take `tag_name` and/or `search_string`
  * returns matched `subjects` or all `subjects`
* `GET /api/subjects/`
  * takes `user_id`
  * returns list of followed `subjects`
* `GET /api/subjects/:id/decks`
  * returns `decks` associated with subject `:id`
* `PATCH /api/subjects/:id`
  * updates `subject` associated with `:id`
  * returns `subject`
* `DELETE /api/subjects/:id`
  * deletes `subject` associated with `:id`
  * returns empty `subject`

### SubjectFollows

* `GET /api/subject_follows`
  * takes `user_id`
  * returns `subjectFollows` associated with `user_id`
* `POST /api/subject_follows`
  * takes `user_id` and `subject_id`
  * returns `subjectFollow`

### Decks

* `GET /api/decks`
  * can take `user_id` in query string, otherwise returns all decks
  * used when getting list of user's decks
* `POST /api/decks`
  * needs `title`, `user_id`, `subject`, can take `description`
  * creates `new Subject` if did not exist
  * returns `deck` with same params, might have `errors`
* `GET /api/decks/:id`
  * needs `id`, can take `user_id` in query string
  * returns `deck` with `num_cards`, `title`, `description`
    * if `user_id` supplied, returns `mastery_percentage` and `cards_studied`
  * used for browsing decks, and if logged-in, for seeing stats in library
* `DELETE /api/decks/:id`
  * needs `id`
  * only deletes if `current_user` corresponds to `owner_id`
* `GET /api/decks/:id/cards`
  * index of all cards for a given deck `id`
  * used when studying
