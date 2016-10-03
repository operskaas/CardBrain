# Redux Structure
The application's state is organized by data type. Under each data type, there may be sub-states. Each action is listed with the sequence of events that results from its invocation, ending with the API or a reducer. Subscribed components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an action starting with where it was invoked, through the API/reducer involved, and finally to the components that update as a result. Once you start implementing your Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* signUp
  1. invoked from AuthForm onSubmit
  2. POST /api/users is called
  3. receiveCurrentUser is set as the success callback

* logIn
  1. invoked from AuthForm onSubmit
  2. POST /api/session is called
  3. receiveCurrentUser is set as the callback

* logOut
  1. invoked from Navbar onClick
  2. DELETE /api/session is called
  3. removeCurrentUser is set as the success callback

* fetchCurrentUser
  1. invoked from App in componentDidMount
  2. GET /api/session is called
  3. receiveCurrentUser is set as the success callback

### Session API Response Actions

* receiveCurrentUser
  1. invoked from an API callback
  2. the SessionReducer stores currentUser (id and username) in the application's state

* removeCurrentUser
  1. invoked from an API callback
  2. the SessionReducer removes currentUser from the application's state

## Error Cycles

### Error API Response Actions

* setErrors
  1. invoked from API callbacks on error for actions that generate POST requests
  2. the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms
* removeErrors
  1. invoked from API callbacks on success for actions that generate POST requests
  2. the ErrorReducer removes errors for a given form in the application's state.

## Subject Cycles

### Subject API Request Actions

* createSubject
  1. invoked on newSubjectForm submit
  2. POST api/subjects is called
  3. receiveSubject is set as success callback
* fetchFollowedSubjects
  1. invoked on didMount of SubjectListContainer
  2. GET api/subjects is called
  3. receiveSubjects is set as a success callback
* followSubject
  1. invoked on getThisSubjectButton press
  2. POST api/subject_follows is called
  3. receiveSubject is set as success callback
* unFollowSubject
  1. invoked on removeFromLibraryButton press
  2. DELETE api/subject_follows is called
  3. removeSubject is set as success callback
* editSubject
  1. invoked on editSubjectForm submit
  2. PATCH api/subjects/:id is called
  3. receiveSubject is set as success callback
* deleteSubject
  1. invoked on deleteSubjectButton click
  2. DELETE api/subjects/:id is called
  3. removeSubject is set as success callback

### Subject API Response Actions

* receiveSubject
  1. invoked from API callback
  2. SubjectReducer adds subject to subject list, or updates if it exists
* receiveSubjects
  1. invoked from API callback
  2. SubjectReducer adds subjects to subject list, or updates if it exists
* removeSubject
  1. invoked from API callback
  2. SubjectReducer removes subject from subject list

## Deck Cycles

### Deck API Request Actions

* createDeck
  1. invoked on newDeckForm submit
  2. POST api/decks is called
  3. receiveDeck is set as success callback
* fetchDecks
  1. invoked on DeckContainer didMount
  2. GET api/subject/:id/decks is called
  3. receiveDecks is set as success callback
* editDeck
  1. invoked on editDeckForm submit
  2. PATCH api/decks/:id is called
  3. receiveDeck is set as success callback
* deleteDeck
  1. invoked on deleteDeckButton click
  2. DELETE api/decks/:id is called
  3. removeDeck is set as success callback


### Deck API Response Actions

* receiveDeck
  1. invoked from API callback
  2. DeckReducer adds deck to deck list, or updates if it exists
* receiveDecks
  1. invoked from API callback
  2. DeckReducer adds decks to deck list
* removeDeck
  1. invoked from API callback
  2. DeckReducer removes deck from deck list

## Card Cycles

### Card API Request Actions

* createCards
  1. invoked on saveCardsButton click if applicable
  2. POST api/cards is called
  3. receiveCards is set as success callback
* fetchCards
  1. invoked on StudyContainer didMount
  2. GET api/decks/:id/cards is called
  3. receiveCards is set as success callback
* rateCard
  1. invoked on confidenceRatingButton click
  2. PATCH api/cards/:id is called
  3. receiveCard is set as success callback
* deleteCard
  1. invoked on saveCardsButton click if applicable
  2. DELETE api/cards/:id is called
  3. removeCard is set as success callback

### Card API Response Actions

* receiveCards
  1. invoked from API callback
  2. CardReducer adds cards to card list
* receiveCard
  1. invoked from API callback after having rated a card
  2. CardReducer updates card in card list
* removeCard
  1. invoked from API callback
  2. CardReducer removes card from card list
