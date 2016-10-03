```
 {
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSubject: {errors: ["title can't be blank"]},
    editSubject: {errors: []},
    editSubject: {errors: []},
  },
  subjects: {
    1: {
      title: "Redux",
      ownerId: 1,
      description: "is cool"
    }
  },
  decks: {
    1: {
      title: "Sample State",
      objective: "is useful to plan",
      subjectId: 1,
      numCards: 14,
      currentUserMastery: 98
    }
  },
  cards: {
    1: {
      question: "What is Redux?",
      answer: "",
      currentUserConfidence: 3,
      deck_id: 1
    }
  },
  subjectFollows: {
    1: null,
    5: null
  },
  subjectSearchQuery: "Dog",
  searchResults: {
    1: {
      title: "Pepper Dog",
      author: "Oskar Perskaas",
      numDecks: 3,
      numTotalCards: 25,
      numLearners: 2
    },
  }
}
```
