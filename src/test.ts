// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const __karma__: any;
declare const require: any;

__karma__.loaded = function () { };                     // Prevent Karma from running prematurely.

/***************************************************************************************/

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false }                       // STEP 01      First, initialize the Angular testing environment.
});
const context = require.context('./', true, /\.spec\.ts$/);     // STEP 02      Then we find all the tests.
context.keys().map(context);                                    // STEP 03      And load the modules.
__karma__.start();                                              // STEP 04      Finally, start Karma to run the tests.

/***************************************************************************************/