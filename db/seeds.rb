User.destroy_all
Subject.destroy_all
SubjectFollow.destroy_all
Deck.destroy_all
Card.destroy_all
ConfidenceRating.destroy_all


porkchop = User.create!(username: 'porkchop', password: 'porkchop')
oskar = User.create!(username: 'oskar', password: 'porkchop')


mcat = Subject.create!(title: 'MCAT', owner_id: oskar.id)
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
mcat_biology = Deck.create!(subject: mcat, title: 'MCAT Biology')



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
Card.create!(deck: relations, question_text: "What do the through: and source: options on a has_one association do?" , answer_text: "Enable you to chain associations through other models. 'through:' should reference another association on the same model, and 'source:' is the association on the other model")

Card.create!(deck: mcat_biology, question_text: "A band" , answer_text: "The band of the sarcomere that extends the full length of the thick filament. The A band includes regions of thick and thin filament overlap, as well as a region of thick filament only. A bands alternate with I bands to give skeletal and cardiac muscle a striated apperance. The A band does not shorten during muscle contraction.")
Card.create!(deck: mcat_biology, question_text: "Antagonist" , answer_text: "Something that acts to oppose the action of something else. For example, muscles that move a join in oppoiste direction are said to be antagonists.")
Card.create!(deck: mcat_biology, question_text: "Cardiac muscle" , answer_text: "The muscle tissue of the heart Cardiac muscle is striated, uninucleate, and under involuntary control (controlled by teh autonomic nervous system). Note also that cardiac muscle is self-stimulatory, and autonomic control serves only to modify the intrinsic rate of contraction.")
Card.create!(deck: mcat_biology, question_text: "Clathrin" , answer_text: "A fibrous protein found on the intracellular side of the plasma membrane (also associated with the Golgi complex) that helps invaginate the membrane. Typically cel surface receptors are associated with clathrin-coated pits at the plasma membrane binding of the ligan to the receptor trigger invagination (example: cholesterol uptake via lipoprotein endocytosis).")
Card.create!(deck: mcat_biology, question_text: "What are the acidic amino acids?" , answer_text: "Aspartic acid and Glutamic acid")
Card.create!(deck: mcat_biology, question_text: "What is the difference between a proteoglycan and a glycoprotein?" , answer_text: "Glycoproteins:
1) Made of protein and carbohydrate
2) More stable than proteins
3) Often used in IS to bridge the cellular membrane.
4) Ratio - have more proteins

Proteoglycans:
1) Special class of glycoprotein
2) Contain extra carbohydrates
3) Structure = protein with one or more glycosaminoglycan chains.
4) Ratio - have more carbs")
Card.create!(deck: mcat_biology, question_text: "What are the two hypotheses of enzyme and substrate interactions?" , answer_text: "1) Lock and Key Model
2) Induced Fit Model")
Card.create!(deck: mcat_biology, question_text: "T/F: One enzyme is tailor made for one reaction." , answer_text: "True: Enzyme specificity; gives the cell more control in regulating chemical reactions")
Card.create!(deck: mcat_biology, question_text: "In the mitochondrial matrix, what happens to the pyruvates?" , answer_text: "Each pyruvate is converted to acetyl-CoA, which transfers 2C to oxaloacetate to make citrate, beginning the TCA cycle.")
Card.create!(deck: mcat_biology, question_text: "What is rule of the ratio of gene to polypeptide?" , answer_text: "One gene makes One polypeptide")
Card.create!(deck: mcat_biology, question_text: "What kind of bond connects the PO4 group to the 3rd carbon on the pentose sugar of the net nucleotide in the chain?" , answer_text: "Phosphodiester")
Card.create!(deck: mcat_biology, question_text: "In what direction does replication occur?" , answer_text: "Bidirectional - the process begins at the middle of the double strand.")
Card.create!(deck: mcat_biology, question_text: "What is the replisome composed of?" , answer_text: "Two replicative polymerase complexes, one of which synthesizes the leading strand, while the other synthesizes the lagging strand. The replisome is composed of a number of proteins including helicase, RFC, PCNA, gyrase/topoisomerase, SSB/RPA, primase, DNA polymerase I, RNAse H, and ligase.")
Card.create!(deck: mcat_biology, question_text: "What is an operon?" , answer_text: "A unit made up of linked genes that is thought to regulate other genes responsible for protein synthesis.")
Card.create!(deck: mcat_biology, question_text: "Does post-transcriptional processing happen to prokaryotes?" , answer_text: "Usually only to rRNA and tRNA")
Card.create!(deck: mcat_biology, question_text: "What is recombinant DNA?" , answer_text: "Spliced dNA formed from two or more different sources that have been cleaved by restriction enzymes and joined by ligases. Genetically engineered dna made by recombining fragments of dna from different organisms.The joining together of genetic material from two different organisms.")
Card.create!(deck: mcat_biology, question_text: "What is a nonsense mutation?" , answer_text: "When a stop codon is formed prematurely.")
Card.create!(deck: mcat_biology, question_text: "Define forward mutation." , answer_text: "Any mutation which changes a formerly functional wild genotype or phenotype to nonfunctional")
Card.create!(deck: mcat_biology, question_text: "What is the longest stage of meiosis?" , answer_text: "Prophase I")
Card.create!(deck: mcat_biology, question_text: "What is the start codon?", answer_text: "AUG - methionine")
Card.create!(deck: mcat_biology, question_text: "How much E is required to add one nucleotide?", answer_text: "1 ATP")
Card.create!(deck: mcat_biology, question_text: "What enzyme separates the two strands of DNA?", answer_text: "DNA helicase")
Card.create!(deck: mcat_biology, question_text: "What is the final electron acceptor in the ETC?", answer_text: "Oxygen")
Card.create!(deck: mcat_biology, question_text: "If oxygen is present, what happens to the products of glycolysis?", answer_text: "They enter the mitochondria.")
Card.create!(deck: mcat_biology, question_text: "What is feedback inhibition?", answer_text: "When the product of a reaction near the end of a chain of reactions inhibits the function of an enzyme in an earlier reaction of the chain.")
Card.create!(deck: mcat_biology, question_text: "What are saturation kinetics?", answer_text: "Since a single enzyme molecule works on one set of substrate at a time, the reaction rate increases when we add substrate only as long as there are unoccupied enzyme molecules.
Once we reach saturation, adding more substrate won't increase the reaction rate.
Enzyme is not used up!")
Card.create!(deck: mcat_biology, question_text: "What are enzymes?", answer_text: "Typically a protein that Increase the rate of reaction by lowering activation energy.
but ribosomes are enzymes")
Card.create!(deck: mcat_biology, question_text: "What is the quaternary structure of a protein?", answer_text: "Multiple proteins in formation")
Card.create!(deck: mcat_biology, question_text: "What is the tertiary structure of a protein?", answer_text: "3D structure including bending")
Card.create!(deck: mcat_biology, question_text: "What is an ampipathic molecule? give an Example.", answer_text: "A molecule with both hydrophobic and hydrophilic regions.
Example: PhoshpoLipid (Phospho=philic,lipid= phobic)")
