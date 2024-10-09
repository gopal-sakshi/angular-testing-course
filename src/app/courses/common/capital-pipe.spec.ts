import { Capitals23Pipe } from './capital-pipe';

describe('Capitals23Pipe_test_suite', () => {
    let pipe: Capitals23Pipe;

    beforeEach(() => {        
        pipe = new Capitals23Pipe();
    });
    
    it('capitals23 work ayindaa', () => {       
        const input = 'input string';        
        const output = 'INPUT STRING';        
        const result = pipe.transform(input);        
        expect(result).toEqual(output);
    });
});