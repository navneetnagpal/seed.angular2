import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core'; 
import {
  beforeEachProviders,
  describe, 
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app';

describe('About', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    // provide a better mock
    {
      provide: AppComponent,
      useValue: {
        data: {
          subscribe: (fn) => fn({yourData: 'yolo'})
        }
      }
    },
    AppComponent
  ]);

  it('should log ngOnInit', inject([ AppComponent ], (about) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});