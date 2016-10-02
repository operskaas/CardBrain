#Routes

Path                                  |	Component                 | onEnter (redirectUnlessLoggedIn for all marked with #)
-------------------------------       | ------------------        | -----------------
"/"                                   | "NavbarContainer"         | requestCurrentUser
"/sign-up"                            |	"AuthFormContainer"       | redirectIfLoggedIn
"/sign-in"	                          | "AuthFormContainer"       | redirectIfLoggedIn
"/library                             | "LibraryContainer"        | #, requestUserSubjects, redirectToFirstSubject
"/library/subject/:subjectId"	        | "LibraryContainer"        | #, requestSubject
"/library/deck/:deckId/study"	        | "StudyContainer"          | #, requestDeckCards
"/library/deck/:deckId/card/:cardId"	| "StudyContainer"          | #
"/library/deck/:deckId"	              | "DeckEditContainer"       | #
"/search-results"	                    | "SearchResultsContainer"  | requestSearchResults
"/search"	                            | "Search"                  | requestSubjectList
"/new-deck"	                          | "NewDeck"                 | #
"/new-tag"	                          | "NewTag"                  | #
"/tag-search"	                        | "TagSearch"               | #

#Component Heirarchy

## NavbarContainer
### Props
* store.current_user (for username, also to display login/signup vs logout buttons)
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
* store.current_user
* router - for search button
### Children
* SubjectListContainer
* DeckListContainer


## SubjectListContainer
### Props
* router - for clicking on subjects
### State
* user_subjects (shared and owned)
  * subject_title
  * subject_description
  * subject_mastery

## SubjectContainer
