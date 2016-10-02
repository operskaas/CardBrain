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
