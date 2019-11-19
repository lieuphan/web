import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  file: File;
  constructor(private ContactSevice: ContactService, private fb: FormBuilder, private routers: Router, private router: ActivatedRoute) { }
  card: Array<any> = [];
  ngOnInit() {
    this.router.params.subscribe(param => {
      this.getOProduct(param.id);
    })

  }
  getSL() {
    var sol = document.getElementById("sl").value;
    return sol;
  }
  getOProduct(id) {
    this.ContactSevice.getOneProduct(id).then(result => {
      this.product = result.data();
      this.ContactSevice.getFile(result.data().hinhanh).then(res => {
        console.log(res);

        this.product = { ...result.data(), hinhanh: res }
      })
    })
  }
  onGetCard(id) {
    console.log("id", id);
    this.routers.navigate(['card', id]);
  }
  async onAddCard() {
    let image = await this.onSend()
    var amount = document.getElementById("sl").value;
    this.ContactSevice.addCard({ ...this.product, hinhanh: image, amount: Number(amount) }).then(result => {
      console.log(image)
      if (result) {
        alert("Thêm vào giỏ thành công!")
      }
    }).catch(err => {
      console.log(err);
      alert("Lỗi!");
    })
  }
  async onSend() {
    console.log(this.product);

    if (this.file) {
      let image = await this.ContactSevice.uploadFile(this.file)
      console.log(image);
      return image.metadata.fullPath
    }
    return null;
  }

}
