import { Component, OnInit } from '@angular/core';
import { MessageProvider } from '../../providers/message/message';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.html',
})
export class MessagesComponent implements OnInit {

  constructor(public messageProvider: MessageProvider) {}

  ngOnInit() {
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/