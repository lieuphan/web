import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchs: Array<any> = [];
  constructor(private ContactService: ContactService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(route => {
      console.log(route);

    })
    this.getSearch(this.router.snapshot.params.name);
  }
  getSearch(name) {
    // console.log(type.toLowerCase())
    console.log(name);

    this.ContactService.search(name).then(result => {
      console.log(result);

      result.forEach(doc => {
        console.log(doc.data());

        this.ContactService.getFile(doc.data().hinhanh).then(res => {
          this.searchs.push({ ...doc.data(), hinhanh: res, id: doc.id })
          console.log(this.searchs);

        })
      })
    }).catch(err => {
      console.log(err);

    });
  }

}
