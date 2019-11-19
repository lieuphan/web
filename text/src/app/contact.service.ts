import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  db = firebase.firestore();
  constructor() { }
  getAllProduct() {
    return this.db.collection("product").get()
  }
  getAllCard() {
    return this.db.collection("card").get()
  }
  getAllComment() {
    return this.db.collection("emailCustomer").get()
  }
  getTypeProduct(type) {
    return this.db.collection('product')
      .where('loaisanpham', '==', type)
      .get()
  }
  search(name) {
    // console.log(name);
    // databaseReference.orderByChild('_searchLastName')
    //              .startAt(queryText)
    //              .endAt(queryText+"\uf8ff")
    // return this.db.collection("product", ref => ref.where("tensanpham", "array-contains", name)).valueChanges();
    return this.db.collection('product')
      .where('tensanpham', '==', name)
      .get()
  }
  addCard(product): Promise<any> {
    return this.db.collection("card").add(product);
  }

  getOneProduct(id) {
    return this.db.collection("product").doc(id).get();
  }
  getIDProduct() {
    this.db.collection("product").doc().get().then(doc => {
      console.log(doc.id);
    }
    )
  }
  editSubmit(id, data) {
    return this.db.collection("product").doc(id).update(data).then(result => {
      console.log(result);
      alert("Sửa thành công!!!")
    }).catch(err => {
      alert("lỗi!")
      console.log(err);
    })
  }
  getChalk() {
    this.db.collection("thongtin").doc().get().then(doc => {

    })

  }
  //update
  updateProduct(id, data) {
    this.db.collection("product").doc(id).set(data).then(result => {
      console.log(result);
    }).catch(err => {
      //console.log(err);
    })
  }
  //delete
  deleteProduct(id) {
    console.log(id);
    this.db.collection("product").doc(id).delete()
  }
  deleteCard(id) {
    this.db.collection("card").doc(id).delete()
  }
  addProduct(product): Promise<any> {
    product.id = firebase.auth().currentUser.uid;
    return this.db.collection("product").add(product);
  }
  uploadFile(file: File) {
    console.log(file);
    return firebase.storage().ref().child("uploads/" + file.name).put(file);
  }
  emailCustomer() {
    return this.db.collection("emailCustomer").get()
  }
  addEmailCustomer(emailCustomer): Promise<any> {

    return this.db.collection("emailCustomer").add(emailCustomer);
  }
  getFile(path: string) {
    if (path)
      return firebase.storage().ref().child(path).getDownloadURL();
    else return new Promise((resolve) => { resolve(null) });
  }
}
