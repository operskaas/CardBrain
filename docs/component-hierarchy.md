#Component Heirarchy

AuthFormContainer

AuthForm
HomeContainer

Home
Sidebar
NotesContainer

NotesHeader
NoteIndex
NotebookContainer

NotebookHeader
NoteIndex
SearchResultsContainer

Search
NoteIndex
TagContainer

NotebookHeader
NoteIndex
NoteIndex

NoteIndexItem
NoteDetail
NoteTools
NotebookSearch
Tags
Tag
Note
NewNoteContainer

NewNote
RTETools
NewNoteButton
Search

NewNotebook

NewNotebook
NewTag

NewTag
NotebookSearch

AutoSearch
AutoSearchResults
TagsSearch

AutoSearch
AutoSearchResults

#Routes

Path |	Component
_____ | ________
"/sign-up" |	"AuthFormContainer"
"/sign-in"	| "AuthFormContainer"
"/library"	| "LibraryContainer"
"/library/deck/:deckId/card/:cardId"	| "CardContainer"
"/library/deck/:deckId"	| "DeckContainer"
"/library/tag/:tagId/card/:cardId"	| "TagContainer"
"/library/search-results"	| "SearchResultsContainer"
"/new-card"	| "NewCardContainer"
"/search"	| "Search"
"/new-deck"	| "NewDeck"
"/new-tag"	| "NewTag"
"/tag-search"	| "TagSearch"
"/notebook-search" | "NotebookSearch"
