import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  file: File;
  products: Array<any> = [];
  constructor(private ContactService: ContactService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      id: ['', [Validators.required]],
      tensanpham: ['', [Validators.required]],
      loaisanpham: ['', [Validators.required]],
      giasanpham: ['', [Validators.required]],
      chitietsanpham: ['', [Validators.required]],
      soluong: ['', [Validators.required]]
    })
    this.ContactService.getAllProduct().then(res => {
      console.log(res);
      if (res) {
        res.forEach(doc => {

          this.ContactService.getFile(doc.data().hinhanh).then(res => {
            console.log(res);
            console.log(doc.data());
            this.products.push({ ...doc.data(), hinhanh: res, id: doc.id })
            console.log(this.products);
          })
        })
      }
    })
  }

  async onProduct() {
    let image = await this.onSend()
    this.ContactService.addProduct({ ...this.productForm.value, hinhanh: image }).then(result => {
      if (result) {
        alert("Thêm sản phẩm thành công!")
      }
    }).catch(err => {
      console.log(err);
      alert("Lỗi!");
    })
  }
  deletePro(id) {
    this.ContactService.deleteProduct(id)
    this.router.navigate(['/product'])
  }
  loadPro(id, data) {
    this.ContactService.updateProduct(id, data);
    this.router.navigate(['/product'])
  }
  async onSend() {
    console.log(this.productForm.value);

    if (this.file) {
      let image = await this.ContactService.uploadFile(this.file)
      console.log(image);
      return image.metadata.fullPath
    }
    return null;
  }
  imageUpload(event) {
    let reader = new FileReader();
    //get the selected file from event
    this.file = event.target.files[0];
    console.log(this.file);

  }
  on_edit_product(id) {
    this.router.navigate(['edit_product', id]);
  }
}
