/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JeuService } from './jeu.service';

describe('JeuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeuService]
    });
  });

  it('should ...', inject([JeuService], (service: JeuService) => {
    expect(service).toBeTruthy();
  }));
});
