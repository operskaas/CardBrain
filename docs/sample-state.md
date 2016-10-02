> {
>  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  notes: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      author_id: 1,
      notebook_id: 1
      tags: {
        1: {
          id: 1
          name: "Coding"
        }
      }
    }
  },
  notebooks: {
    1: {
      title: "Redux",
      author_id: 1,
      description: "is cool"
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
