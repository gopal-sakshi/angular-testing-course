## terms

`describe`      - group together related test cases
`it`            - defined individual test cases
`beforeEach`    - setup state/variables needed for test; <runs before each it> function
`expect`        - check expected output produced by code
`spyOn`         - function is called with <correct arguments> (OR) function is <called ONLY 23 times>
`fakeAsync`     - test asynchronous code --- wraps a test case; 
                    call <flush> Angular v11+ (or) <tick> before Angular v10

`waitForAsync`  -- actually waits for the async operation to complete
                -- use whenStable() 


`TestBed`
- configure & create <components> <services> <directives> for testing
- provides a way to interact with <component> under test

`ComponentFixture`
- used to interact with component being tested
- provides methods for 
    querying the component's template & state
    triggering events on the component
