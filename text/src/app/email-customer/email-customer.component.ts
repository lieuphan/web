import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-email-customer',
  templateUrl: './email-customer.component.html',
  styleUrls: ['./email-customer.component.css']
})
export class EmailCustomerComponent implements OnInit {

  constructor(private ContactSevice: ContactService) { }
  arrComment: Array<any> = []
  ngOnInit() {
    this.getEmailCustomer()
  }
  getEmailCustomer() {
    this.ContactSevice.getAllComment().then(res => {
      if (res) {
        res.forEach(doc => {
          this.arrComment.push({ ...doc.data() })
          console.log(this.arrComment);
        })
      }
    })
  }

}
