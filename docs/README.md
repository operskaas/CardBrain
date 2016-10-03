# CardBrain
[heroku](http://www.herokuapp.com)
## Minimum Viable Product
CardBrain is a web application inspired by BrainScape built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
1. Hosting on Heroku
2. New account creation, login, and guest/demo login
3. Production Readme
4. Create/Delete Decks
5. Study Decks
6. Tags/Categories (Subjects)
7. Search by subject

## Design Docs
* [View Wireframes](wireframes)
* [React Components](component-hierarchy.md)
* [API endpoints](api-endpoints.md)
* [DB schema](schema.md)
* [Redux Structure](redux-structure.md)
* [Sample State](sample-state.md)

## Implementation Timeline

###Phase 1: Backend setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication

* New Rails project
* User model/migration
* Back end authentication (session/password)
* StaticPages controller and root view
* Webpack & react/redux modules
* APIUtil to interact with the API
* Redux cycle for frontend authentication
* User signup/signin components
  * NavBarContainer
  * AuthFormContainer
* Blank landing component after signup/signin
* Style signup/signin components
* Seed users

###Phase 2: Decks & Cards (3 days)
**Objective:** Decks and the associated Cards can be CRUD'd through API
* Deck & Card model
* Seed database with some test data
* CRUD API for decks (DecksController)
* CRUD API for cards (CardsController)
* JBuilder views for decks, cards
* Deck components and respective Redux loops
  * DeckInfo
  * DeckMenuContainer
  * DeckFormContainer
  * DeckList
  * DeckListItem
* Style decks components
* Seed decks and cards

###Phase 3: Study Decks (3 days)
**Objective:** Decks can be studied
* CRUD API for ratingcards
*
* Study components and respective Redux loops
  * StudyContainer
  * Stats
  * MasteryDisplayContainer
  * CardCounterContainer
  * ConfidenceBarsContainer
  * CardContainer
  * StudyButtonsContainer
  * NavLinks
  * RelatedDecksListContainer
* Style study components

###Phase 4: Tags/Categories (Subjects) (2 days)
**Objective:** Decks have a subject
* Subject Model
* CRUD API for subjects (SubjectsController)
* Subject components and respective Redux loops
  * SubjectMenuContainer
  * SubjectListContainer
  * SubjectListItem
  * SubjectFormContainer
  * SubjectContainer
* Style subject components


###Phase 5: Search (3 days)
**Objective:** Subjects can be searched by name
* Search components and respective Redux loops
  * Search
  * SearchResultsContainer
* Style search components
* Fetching subjects based on searchQuery with associated data

###Bonus Features (TBD)
* Animation
* Add Images to flashcards
