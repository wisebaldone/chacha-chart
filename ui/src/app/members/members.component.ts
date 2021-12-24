import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../mock-members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  groups = [
    "All",
    "ACT",
    "NSW",
    "NT",
    "QLD",
    "VIC",
    "SA",
    "WA",
    "TAS",
    "National",
    "New Zealand",
    "Papua New Guinea",
    "Fiji"
  ];

  members = MEMBERS;

}
