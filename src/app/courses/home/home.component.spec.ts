import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CoursesModule } from '../courses.module';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';
import { COURSES } from '../../../../server/db-data';
import { setupCourses } from '../common/setup-test-data';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { click } from '../common/test-utils';

// https://www.stefanos-lignos.dev/posts/testing-functional-guards-and-resolvers


describe('HomeComponent23', () => {

    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;
    let el: DebugElement;
    let coursesService: any;

    const beginnerCourses = setupCourses().filter(course => course.category == 'BEGINNER');
    const advancedCourses = setupCourses().filter(course => course.category == 'ADVANCED');

    beforeEach(waitForAsync(() => {

        const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses'])

        TestBed.configureTestingModule({
            imports: [
                CoursesModule,
                NoopAnimationsModule
            ],
            providers: [                
                { provide: CoursesService, useValue: coursesServiceSpy }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(HomeComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
            coursesService = TestBed.get(CoursesService);
        });
    }));

    it("check_for_content23", () => {
        const boldText1 = el.query(By.css('h3')).nativeElement;        
        expect(boldText1.textContent).toContain('Courses234', 'tannindi23');

        const boldText2 = el.query(By.css('p b')).nativeElement;
        expect(boldText2.textContent).toContain('Real Madrid23', 'tannindi24');
    }); 

    it("should create the component23", () => {
        expect(component).toBeTruthy();
    });

    it("should display only beginner courses23", () => {
        // findAllCourses === we return only begineerCourses; ie advancedCourses is NULL; ie only 1 tab will be visible 
        // *ngIf is home.html ====> *ngIf="advancedCourses?.length > 0"
        coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
        fixture.detectChanges();
        const tabs = el.queryAll(By.css(".mat-tab-label"));
        expect(tabs.length).toBe(1, "Unexpected number of tabs found");
    });


    it("should display only advanced courses23", () => {
        coursesService.findAllCourses.and.returnValue(of(advancedCourses));
        fixture.detectChanges();
        const tabs = el.queryAll(By.css(".mat-tab-label"));
        expect(tabs.length).toBe(1, "Unexpected number of tabs found");
    });


    it("should display both tabs", () => {
        coursesService.findAllCourses.and.returnValue(of(setupCourses()));
        fixture.detectChanges();
        const tabs = el.queryAll(By.css(".mat-tab-label"));
        expect(tabs.length).toBe(2, "Expected to find 2 tabs");
    });


    it("should display advanced courses when tab clicked - fakeAsync", fakeAsync(() => {
        coursesService.findAllCourses.and.returnValue(of(setupCourses()));
        fixture.detectChanges();
        const tabs = el.queryAll(By.css(".mat-tab-label"));
        click(tabs[1]);
        fixture.detectChanges();
        flush();
        const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
        expect(cardTitles.length).toBeGreaterThan(0, "Could not find card titles");
        expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");
    }));


    it("should display advanced courses when tab clicked - async", waitForAsync(() => {
        coursesService.findAllCourses.and.returnValue(of(setupCourses()));
        fixture.detectChanges();
        const tabs = el.queryAll(By.css(".mat-tab-label"));
        click(tabs[1]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
            expect(cardTitles.length).toBeGreaterThan(0, "Could not find card titles");
            expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");
        });
    }));

    // NOT WORKINGGGGGGGGGGGGGGGGGGG
    xit("link23", waitForAsync(() => {
        const link = el.nativeElement.querySelector('a');
        console.log("link ====> ", link)
        link.click();
        fixture.detectChanges();
        spyOn(window, 'open');
        fixture.whenStable().then(() => {
            expect(link).toHaveBeenCalled();
            expect(window.open).toHaveBeenCalledWith('https://www.google.com/');
        })
    }));

    // it('should return the requested hero', () => {
    //     let service = TestBed.inject(CourseHomeResolver);
    //     const result = service.resolve('mockRoute', {});
    //     expect(result).toBeObservable(cold('(a|)', { a: mockHero }));
    // });
});