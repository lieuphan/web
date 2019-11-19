import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerForm: FormGroup;
  constructor(private ContactService: ContactService, private fb: FormBuilder) { }

  ngOnInit() {
    this.footerForm = this.fb.group({
      email: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }
  onFooter() {
    this.ContactService.addEmailCustomer(this.footerForm.value).then(result => {
      if (result) {
        alert("Gửi Thành Công!")
      }
    }).catch(err => {
      console.log(err);
      alert("Lỗi!");
    })
  }
}

