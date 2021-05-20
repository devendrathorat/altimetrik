import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdocument',
  templateUrl: './searchdocument.component.html',
  styleUrls: ['./searchdocument.component.css']
})
export class SearchdocumentComponent implements OnInit {

  constructor() { }

  searchString: String = "";

  
  ngOnInit() {

  }
  content = [{
    id: 1,
    documentCategory: "Technical",
    documentName: "Technical Instructables"
  },
  {
    id: 2,
    documentCategory: "Technical",
    documentName: "Technical Support"
  },
  {
    id: 3,
    documentCategory: "Technical",
    documentName: "Installation Guide"
  },
  {
    id: 4,
    documentCategory: "Human Resources",
    documentName: "Career Opportunities"
  },
  {
    id: 5,
    documentCategory: "Human Resources",
    documentName: "Training"
  }
    , {
    id: 6,
    documentCategory: "Financial",
    documentName: "Customer Onboarding"
  }
    , {
    id: 7,
    documentCategory: "Financial",
    documentName: "Account  Procedure"
  }
    , {
    id: 8,
    documentCategory: "Marketing",
    documentName: "Outlet Branding"
  }
  ]



}
