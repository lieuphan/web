import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import * as firebase from 'firebase/app';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CardComponent } from './card/card.component';
import { ChalkComponent } from './chalk/chalk.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { EmailCustomerComponent } from './email-customer/email-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailsComponent,
    EditProductComponent,
    CardComponent,
    ChalkComponent,
    AdminComponent,
    SearchComponent,
    EmailCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//tạo form
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    var config = {
      apiKey: "AIzaSyC1HbW-J9XBnR5fNwvSuMIsd1bFv-tdM_0",
      authDomain: "text-cfd3d.firebaseapp.com",
      databaseURL: "https://text-cfd3d.firebaseio.com",
      projectId: "text-cfd3d",
      storageBucket: "text-cfd3d.appspot.com",
      messagingSenderId: "605385582208"
    };
    firebase.initializeApp(config);
  }
}
