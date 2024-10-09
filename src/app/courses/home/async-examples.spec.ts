import {fakeAsync, flush, flushMicrotasks, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';


describe('Async Testing Examples', () => {

    it('Asynchronous =====> done()', (done: DoneFn) => {
        let test = false;
        setTimeout(() => {
            console.log('running assertions');
            test = true;
            expect(test).toBeTruthy();
            done();
        }, 1000);
    });

    it('Asynchronous ====> setTimeout()', fakeAsync(() => {
        let test = false;
        setTimeout(() => { });
        setTimeout(() => {
            console.log('running assertions setTimeout()');
            test = true;
        }, 1000);
        flush();
        expect(test).toBeTruthy();
    }));

    it('Asynchronous =====> plain Promise', fakeAsync(() => {
        let test = false;
        console.log('Creating promise');
        Promise.resolve().then(() => {
            console.log('Promise first then() evaluated successfully');
            return Promise.resolve();
        }).then(() => {
            console.log('Promise second then() evaluated successfully');
            test = true;
        });
        flushMicrotasks();
        console.log('Running test assertions');
        expect(test).toBeTruthy();
    }));

    it('Asynchronous ====> Promises + setTimeout()', fakeAsync(() => {
        let counter = 0;
        Promise.resolve().then(() => {
            counter+=10;
            setTimeout(() => { counter += 1; }, 1000);
        });
        expect(counter).toBe(0);
        flushMicrotasks();
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(10);
        tick(500);      // 2 ticks ====> 1000 ms passed ===> setTimeout triggers and counter is increased by 1
        expect(counter).toBe(11);
    }));

    it('Asynchronous ====> Observables', fakeAsync(() => {
        let test = false;        
        const test$ = of(test).pipe(delay(1000));
        test$.subscribe(() => {
            test = true;
        });
        tick(1000);
        console.log('Running test assertions');
        expect(test).toBe(true);
    }));
});
















