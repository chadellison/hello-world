var HelloWorld = require('./hello-world');

describe('Hello World', function() {
  var helloWorld = new HelloWorld();

  it('says hello world with no name', function() {
    expect(helloWorld.hello('')).toEqual('Hello, World!');
  });

  it('says hello to bob', function() {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});

// template strings === string interpolation
  // return `Hello, ${input || "World"}!`

// prototypical inheritance (vs classical inheritance in ruby)

// { state: state } -----------------> { state }

// todo = { text: "what" }
// store.dispatch(todo, 'ADD_TODO')
  // reducers -> pure functions (entirely functional), can't modify state
    // state, action is passed in
    // Object.assign({}, state, { calculation })
      // time travel --> cycle back and forth through states
        // (redux-undo) state.past / state.present / state.future

  // change the state of the appl
  // that state trickles down and updates your components

// this.props.onAddTodo(todo)

// jasmine
// mocha/chai/expect/assert
  // jasmine-node (short cut)
