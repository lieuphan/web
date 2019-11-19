import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { element } from '@angular/core/src/render3';
import { database } from 'firebase';
// import { type } from 'os';

@Component({
  selector: 'app-chalk',
  templateUrl: './chalk.component.html',
  styleUrls: ['./chalk.component.css']
})
export class ChalkComponent implements OnInit {
  products: Array<any> = [];
  chalks: Array<any> = []
  constructor(private ContactSevice: ContactService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.router.snapshot.params.type);

    this.getChalks(this.router.snapshot.params.type);
  }
  getChalks(type) {
    // console.log(type.toLowerCase())
    this.ContactSevice.getTypeProduct(type).then(result => {
      result.forEach(doc => {
        doc.data()
        this.ContactSevice.getFile(doc.data().hinhanh).then(res => {
          this.chalks.push({ ...doc.data(), hinhanh: res, id: doc.id })
        })
        console.log(this.chalks);
      })
    });
  }

}
