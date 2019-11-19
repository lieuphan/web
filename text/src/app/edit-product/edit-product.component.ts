import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any;
  editForm: FormGroup;
  constructor(private ContactSevice: ContactService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.getOnProduct(param.id);
    })

    this.editForm = this.fb.group({
      id: ['', [Validators.required]],
      tensanpham: ['', [Validators.required]],
      loaisanpham: ['', [Validators.required]],
      giasanpham: ['', [Validators.required]],
      chitietsanpham: ['', [Validators.required]],
      soluong: ['', [Validators.required]]
    })
  }

  getOnProduct(id) {
    this.ContactSevice.getOneProduct(id).then(result => {
      this.product = result.data()
      console.log(this.product);
      this.editForm.setValue({
        id: this.product.id,
        tensanpham: this.product.tensanpham,
        loaisanpham: this.product.loaisanpham,
        giasanpham: this.product.giasanpham,
        chitietsanpham: this.product.chitietsanpham,
        soluong: this.product.soluong
      })
    })
  }

  async onSubmitEdit() {
    console.log(this.editForm.value);
    let param = this.router.snapshot.params.id
    let res = await this.ContactSevice.getOneProduct(param)
    console.log(res);
    if (res.data())
      this.ContactSevice.editSubmit(param, this.editForm.value).then(response => {
        console.log(response);
      })
  }
}
