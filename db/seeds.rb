User.destroy_all
Subject.destroy_all
SubjectFollow.destroy_all
Deck.destroy_all
Card.destroy_all
ConfidenceRating.destroy_all


porkchop = User.create!(username: 'porkchop', password: 'porkchop')
oskar = User.create!(username: 'oskar', password: 'porkchop')


mcat_biology = Subject.create!(title: 'MCAT Biology', owner_id: oskar.id)
norwegian = Subject.create!(title: 'Norwegian', owner_id: oskar.id)
react = Subject.create!(title: 'React', owner_id: oskar.id)
redux = Subject.create!(title: 'Redux', owner_id: porkchop.id)
jbuilder = Subject.create!(title: 'jBuilder', owner_id: porkchop.id)
css = Subject.create!(title: 'CSS', owner_id: porkchop.id)
active_record = Subject.create!(title: 'ActiveRecord', owner_id: porkchop.id)
ad = Subject.create!(title: 'Arrested Development', owner_id: oskar.id)


# SubjectFollow.create!(follower_id: oskar.id, subject_id: norwegian.id)
SubjectFollow.create!(follower_id: porkchop.id, subject_id: react.id)


modal = Deck.create!(subject: react, title: 'React Modal')
router = Deck.create!(subject: react, title: 'React Router')
lifecycle = Deck.create!(subject: react, title: 'Lifecycle Methods')
greetings = Deck.create!(subject: norwegian, title: 'Greetings')
foods = Deck.create!(subject: norwegian, title: 'Foods')
sports = Deck.create!(subject: norwegian, title: 'Sports')
quotes = Deck.create!(subject: ad, title: 'Quotes')
reducers = Deck.create!(subject: redux, title: 'Reducers')
provider = Deck.create!(subject: redux, title: 'Provider and Connect')
borders = Deck.create!(subject: css, title: 'Borders')
relations = Deck.create!(subject: active_record, title: 'Relations')



hei = Card.create!(deck: greetings, question_text: 'hei', answer_text: 'hello / hey')
hadde = Card.create!(deck: greetings, question_text: 'hadde', answer_text: 'goodbye / see you')
aasen = Card.create!(deck: greetings, question_text: 'åsen gar det?', answer_text: "how's it going?")

Card.create!(deck: lifecycle, question_text: 'In what method should you fetch data via API?', answer_text: "componentDidMount")
Card.create!(deck: lifecycle, question_text: 'What method is called right before unmounting?', answer_text: "componentWillUnmount")
Card.create!(deck: lifecycle, question_text: 'In what method should you handle reacting to receiving props before render() is called? Keep in mind that this is a longer question than usual, and may break the site! That is correct, just having lots of text can sometimes make a website and/or database uneasy', answer_text: "componentWillReceiveProps")
Card.create!(deck: lifecycle, question_text: 'What does the shouldComponentUpdate method do?', answer_text: "If false is returned, the component will not update")
Card.create!(deck: lifecycle, question_text: 'What arguments should componentWillReceiveProps expect?', answer_text: "nextProps. Useful for checking if the props will change")

Card.create!(deck: modal, question_text: 'What props does the React Modal expect?', answer_text: "isOpen, onRequestClose, and style")

Card.create!(deck: router, question_text: 'When does the IndexRoute component render?', answer_text: "When the parent Route's path matches, but none of the other siblings match")
Card.create!(deck: router, question_text: 'How do you specify a callback to be run when entering a route?', answer_text: "Pass it in as an onEnter prop")
Card.create!(deck: router, question_text: 'What props does the Router component expect?', answer_text: "hashHistory, i.e. history={hashHistory}")
Card.create!(deck: router, question_text: 'How would you access the :deckId in /decks/:deckId from the component?', answer_text: "It will be passed in to the component as a prop nested under params, i.e. this.props.params.deckId")
Card.create!(deck: router, question_text: 'With nested routes, how can one control where the child components are rendered?', answer_text: "Position them in the return of the render() function using {this.props.children}")

Card.create!(deck: quotes, question_text: 'Annyong', answer_text: 'Annyong')
Card.create!(deck: quotes, question_text: 'Hi George Michael, proud of yourself?', answer_text: 'Yeah actually, I got a bum away from the stand without hurting his feelings. That was pretty sweet.')
Card.create!(deck: quotes, question_text: 'How do you make a React.js app with a rails back-end?', answer_text: 'I don’t understand the question, and I won’t respond to it.')
Card.create!(deck: quotes, question_text: 'Do you guys know where I can get one of those gold necklaces with a “T” on it?', answer_text: "That's a cross")
Card.create!(deck: quotes, question_text: 'Why are you squeezing me with your body?', answer_text: 'It’s a hug, Michael. I’m hugging you')

Card.create!(deck: reducers, question_text: 'What arguments should reducers expect?', answer_text: 'prevState and action')
Card.create!(deck: reducers, question_text: 'What does it mean for a reducer to be pure?', answer_text: 'It should have no side effects and not mutate the prevState, only return a newState')
Card.create!(deck: reducers, question_text: 'What should the reducer return during redux initialization?', answer_text: 'It should return a default state which is hard-coded')
Card.create!(deck: reducers, question_text: 'After writing the reducer, how do you add it to you Redux loop?', answer_text: 'Add it to the RootReducer, using combineReducers')
Card.create!(deck: reducers, question_text: 'What is a handy function to deep dup the prevState to avoid mutating it?', answer_text: 'merge, from lodash/merge. Can also use freeze to ensure prevState is not mutated')
Card.create!(deck: provider, question_text: 'How do you give multiple components access to the store via context?', answer_text: 'Using a Provider')
Card.create!(deck: provider, question_text: 'What does the connect function do?', answer_text: 'Enables a React component to subscribe to changes in state, as well as dispatch actions')
Card.create!(deck: provider, question_text: 'What arguments does the connect function expect?', answer_text: 'mapStateToProps and mapDispatchToProps')
Card.create!(deck: provider, question_text: 'What does the connect function return?', answer_text: "A function which expects the React Component to be connected as it's next argument")

Card.create!(deck: borders, question_text: 'How do you make a circular border?', answer_text: "Set border-radius: 50%")
Card.create!(deck: borders, question_text: 'How do you make rounded edges on a border?', answer_text: "Set border-radius to a non-zero number of pixels, or percentage")
Card.create!(deck: borders, question_text: "In border: x y z, what are x, y, and z respectively?" , answer_text: "border-thickness, border-style, and border-color")
Card.create!(deck: borders, question_text: "What are the options for border-style?" , answer_text: "none, hidden, dotted, dashed, solid, double, groove, ridge, and inset")

Card.create!(deck: relations, question_text: "What are the three most commonly used associatoins?" , answer_text: "has_one, has_many, belongs_to")
Card.create!(deck: relations, question_text: "What is the difference between has_one and belongs_to?" , answer_text: "belongs_to means that the model has a foreign key pointing to another table, while has_one implies the opposite")
Card.create!(deck: relations, question_text: "What is the difference between has_one and belongs_to?" , answer_text: "belongs_to means that the model has a foreign key pointing to another table, while has_one implies the opposite")
