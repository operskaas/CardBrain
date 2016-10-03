#Routes

Path                                  |	Component                 | onEnter (redirectUnlessLoggedIn for all marked with #)
-------------------------------       | ------------------        | -----------------
"/"                                   | "NavbarContainer"         | requestCurrentUser
"/sign-up"                            |	"AuthFormContainer"       | redirectIfLoggedIn
"/sign-in"	                          | "AuthFormContainer"       | redirectIfLoggedIn
"/library                             | "LibraryContainer"        | #
"/library/edit_subject"               | "SubjectForm"             | #
"/library/new_subject"                | "SubjectForm"             | #
"/library/deck_info"                  | "DeckInfo"                | #
"/study"	                            | "StudyContainer"          | #
"/library/edit_deck"	                | "DeckForm"                | #
"/search-results"	                    | "SearchResultsContainer"  |
"/search"	                            | "Search"                  |
"/library/new-deck"	                  | "DeckForm"                | #

#Component Heirarchy

## NavbarContainer
### Props
* state.currentUser (for username, also to display login/signup vs logout buttons)
* router (to redirect to login or signup)
* dispatch(logout)


## AuthFormContainer
### Props
* mode: 'login' vs 'signup'
* dispatch(login)
* dispatch(signup)
### State
* controlled text inputs


## LibraryContainer
### Props
* state.currentUser
* router - for search button
### Children
* SubjectListContainer
* DeckListContainer
* SubjectForm


## DeckInfo
### Props
* title
* objective
* numCards


## DeckMenuContainer
### Props
* dispatch(deleteDeck)
* router
* isOwner (menu is different for owner)


## SubjectMenuContainer
### Props
* dispatch(deleteSubject)
* router
* isOwner (menu is different for owner)


## SubjectListContainer
### Props
* router - for clicking on subjects
* state.followedSubjects (followed and owned)
  * subjectTitle
  * subjectDescription
  * subjectMastery
* dispatch(fetchFollowedSubjects)
### State
* selectedSubjectListItem
### Children
* SubjectListItem


## SubjectListItem
### Props
* subjectName
* subjectMastery
### State
* selected (boolean)


## SubjectFormContainer
### Props
* state.current_user
* dispatch(createSubject)
* dispatch(editSubject)
* mode (edit vs new)
* subjectInfo (for edit form)
### State
* controlled inputs
  * initially set to subjectInfo


## DeckFormContainer
### Props
* state.current_user
* dispatch(createDeck)
* dispatch(editDeck)
* mode (edit vs new)
* deckInfo (for edit form)
### State
* controlled inputs
  * initially set to deckInfo


## SubjectContainer
### Props
* state.decks
### State
* menuShowing
### Children
* DeckList
* SubjectMenuContainer
* DeckInfo


## SearchResultsContainer
### Props
* searchResults (from state.searchResults)
### Children
* SearchResultItem


## SearchResultItem
### Props
* searchResult (passed down)


## Search
### State
* controlled input (searchField)
### Children
* SearchResultsContainer


## StudyContainer
### Props
* state.cards
### Children
* NavLinks
* Stats
* Card
* StudyButtonsContainer


## Stats
### Children
* MasteryDisplayContainer
* CardCounterContainer
* ConfidenceBarsDisplayContainer


## MasteryDisplayContainer
### Props
* masteryPercentage (calculated from state.cards)


## CardCounterContainer
### Props
* numDeckCards (derived from state.cards)
* numMasteredCards (derived from state.cards)


## ConfidenceBarsContainer
### Props
* confidenceCounts (derived from state.cards)


## CardContainer
### Props
* router (to go to edit_cards)
* cardQuestion
* cardAnswer
* cardRating
### State
* cardRevealed (bool)


## StudyButtonsContainer
### Props
* dispatch(rateCard)
* cardRating
### State
* cardRevealed (bool)


## NavLinks
### Props
* router
### State
* relatedDecksListSelected
### Children
* RelatedDecksList


## RelatedDecksListContainer
### Props
* deckNames (derived from state.decks)


## DeckList
### Props
* decks
### Children
* DeckListItem


## DeckListItem
### Props
* router
* name
* mastery_percentage
* numCards
### State
* menuShowing
### Children
* DeckMenuContainer
