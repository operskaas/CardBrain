# CardBrain
[Live](https://card-brain.herokuapp.com)

CardBrain is a web application inspired by BrainScape built using Ruby on Rails, React/Redux, and PostgreSQL.

## Features & Implementation

### Subjects, SubjectFollows, and Searching
The user can create or search for subjects which contain decks of cards. Subjects are stored in a table, with columns for id, title, owner_id, as well as timestamps for created_at and updated_at.

When a user creates a subject, they a SubjectFollow is also created, which links the user and subject with a follower_id and subject_id, respectively. The subject_follows table also has an id column as well as timestamps.

When a user searches for and finds a subject they are interested in, they may click on the 'Get Started' button to create a SubjectFollow linking the user to the subject, thereby adding it to their library.

![search feature] (/docs/wireframes/gifs/search.gif)

The library contains all of the user's followed subjects, including the subjects they created. If a user selects a subject from the list on the left, the corresponding decks will be fetched and displayed in the main view.

![library] (/docs/wireframes/gifs/library.gif)

Subjects can be created, edited, and deleted. (Deleting a subject that was not created by the user will simply delete the SubjectFollow and remove it from the user's Library)

![subjects] (/docs/wireframes/gifs/create-subject.gif)

### Decks and Cards
Decks reference a subject via a subject_id, and also have an id, title, optional objective, and timestamps.
They can be created and deleted in subjects that the user owns (created).

![decks] (/docs/wireframes/gifs/deck.gif)

Cards have a deck_id linking them to a deck, as well as answer_text, question_text, and timestamp fields.
They can be created, deleted, and updated in decks that the user owns.

![cards] (/docs/wireframes/gifs/cards.gif)

### Studying and ConfidenceRatings
A User can study a deck. The User can flip the same card repeatedly by clicking on the card, and move on to the next card by rating it. Every rating triggers the creation of a ConfidenceRating, which contains a `rating` between 1 and 5, as well as a `user_id` and `card_id` as foreign keys. The ConfidenceRatings are used to determine the user's overall mastery of the deck and subject.

![studying] (/docs/wireframes/gifs/study.gif)

#### Card Choosing Algorithm
When studying, the user will tend to see cards that are rated lower more often, thereby ensuring the user spends more time on their weak points, and less time on the cards they are already confident about. The algorithm that determines the next card to show has two major factors: the current `_masteryPercent()`, and a `rand` selector.

If there is a card that the user hasn't seen yet (confidenceRating of 0), there is a 95% chance that the algorithm will choose a random unseen card. Otherwise, it will compute the `weightedMastery` as the product of the mastery and another random number. The `_preferRandomCardWithRatingAtLeast` function will try to find a card with rating of at least `rating`, but if it doesn't find a card with the supplied `rating`, it will keep incrementing `rating` until it finds a card with that rating. If there are no cards with rating at least `rating`, it will call itself with `rating - 1`.

```javascript
nextCard(){
  let rand = Math.random();
  const rand0Card = this._randomCardOfRating(0);

  if ((rand0Card !== -1) && (rand < 0.95)) {
    return rand0Card;
  }

  const mastery = this._masteryPercent();
  const weightedMastery = mastery * Math.random();

  if (weightedMastery < 30) {
    return this._preferRandomCardWithRatingAtLeast(1);
  } else if (weightedMastery < 50) {
    return this._preferRandomCardWithRatingAtLeast(2);
  } else if (weightedMastery < 70) {
    return this._preferRandomCardWithRatingAtLeast(3);
  } else if (weightedMastery < 90) {
    return this._preferRandomCardWithRatingAtLeast(4);
  } else {
    return this._preferRandomCardWithRatingAtLeast(5);
  }
}

_preferRandomCardWithRatingAtLeast(rating) {
  for (var i = rating; i <= 5; i++) {
    const card = this._randomCardOfRating(i)
    if (card !== -1) {
      return card;
    }
  }
  return this._preferRandomCardWithRatingAtLeast(rating - 1);
}
```


## Future Improvements
### Multimedia Flashcards
Adding sound and images to cards is a killer feature that I would like to implement.

### Editable Deck Objective
I would like to make the deck objective editable and viewable by users, currently it is only stored in the DB.
