import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ContactSevice: ContactService, private fb: FormBuilder, private router: Router) { }
  products: Array<any> = [];
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.ContactSevice.getAllProduct().then(res => {
      res.forEach(doc => {
        this.ContactSevice.getFile(doc.data().hinhanh).then(res => {
          this.products.push({ ...doc.data(), hinhanh: res, id: doc.id })
        })
      })
    });
  }
  onGetProductDetail(id) {
    console.log("id", id);

    this.router.navigate(['product_details', id]);
  }

  searchByName(name) {
    return this.products.filter(item => item.tensanpham.contains(name))
  }
}
