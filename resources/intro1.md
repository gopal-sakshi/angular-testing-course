Things to look while testing
- Mocking Functions
- Mocking Data - making API calls
- Mocking Async Calls
- Mocking Rendered Components - click on button, a new component loaded

<!--------------------------------------------------------------------------------------->

```js
expect(calculator.add(1, 4)).toEqual(5);            // Jasmine
expect(calculator.add(1, 4)).to.equal(5);           // mocha & chai
```

- use the library that works best with your stack
    Jest for React, Jasmine for Angular, Mocha for backend
- don't want your tests to insert data into your real database.
    setting up a test database with mock data is best practice.
- 

<!--------------------------------------------------------------------------------------->
# testing frameworks

`Jasmine`
- used more often with Angular
- jasmine has test-double library 
    var spy = jasmine.createSpy();
- it doesnt have test-runner... so, we have to use <karma> tool


`Jest`
- created by Facebook to use with React.
- primary use == strong front-end testing
- https://mattermost.com/blog/comparing-javascript-testing-frameworks/


`Mocha`
- we need to import several libraries
- Chai          assertion library
- chai-http     make API calls
- mocha has test-runner, but doesnt include assertion, test-double libraries


<!--------------------------------------------------------------------------------------->

# testing libraries

Chai

Sinon