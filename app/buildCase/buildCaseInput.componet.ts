// Promise Version
import { Component, OnInit } from '@angular/core';
import { BuildCaseTest } from './buildCaseTest';
import { TestCaseService } from '../common/testCase.service';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/buildCase/buildCaseInput.component.html'
})
export class BuildCaseInputComponent implements OnInit {
  errorMessage: string;
  buildCaseDate: BuildCaseTest[];
  mode = 'Promise';

  constructor (private testCaseService: TestCaseService) {}

  ngOnInit() { this.getTest(); }

  getTest() {
    this.testCaseService.getTest()
        .then(
            buildCaseDate => this.buildCaseDate = buildCaseDate,
            error =>  this.errorMessage = <any>error);
}

}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
