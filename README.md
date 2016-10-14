# CardBrain
[Live](https://card-brain.herokuapp.com)

CardBrain is a web application inspired by BrainScape built using Ruby on Rails and React/Redux. It uses PostgreSQL and Redux.

## Features & Implementation

### Subjects, SubjectFollows, and Searching
The user can create or search for subjects which contain decks of cards. Subjects are stored in a table, with columns for id, title, owner_id, as well as timestamps for created_at and updated_at.

When a user creates a subject, they a SubjectFollow is also created, which links the user and subject with a follower_id and subject_id, respectively. The subject_follows table also has an id column as well as timestamps.

When a user searches for and finds a subject they are interested in, they may click on the 'Get Started' button to create a SubjectFollow linking the user to the subject, thereby adding it to their library.

![alt text] (/docs/wireframes/gifs/search.gif)

The library contains all of the user's followed subjects, including the subjects they created. If a user selects a subject from the list on the left, the corresponding decks will be fetched and displayed in the main view.

![alt text] (/docs/wireframes/gifs/library.gif)


### Decks and Cards
Decks reference a subject via a subject_id, and also have an id, title, optional objective, and timestamps.

Cards have a deck_id linking them to a deck, as well as answer_text, question_text, and timestamp fields.




Currently the objective is not editable or readable after creation, but there are plans to implement that functionality.

Adding sound and images to cards is a planned addition.
