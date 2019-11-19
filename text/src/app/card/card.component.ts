import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Array<any> = [];
  arrsl: Array<any> = [];
  arr: any;
  public tongtien: number = 0;

  constructor(private ContactSevice: ContactService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.ContactSevice.getAllCard().then(res => {
      res.forEach(doc => {
        this.tongtien += doc.data().giasanpham * doc.data().amount;

        this.ContactSevice.getFile(doc.data().hinhanh).then(res => {
          this.cards.push({ ...doc.data(), hinhanh: res, id: doc.id })
        })
      })
    });
  }
  delCard(id) {
    this.ContactSevice.deleteCard(id);
  }
}
