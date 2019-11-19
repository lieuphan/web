import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CardComponent } from './card/card.component';
import { ChalkComponent } from './chalk/chalk.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { EmailCustomerComponent } from './email-customer/email-customer.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "introduction", component: IntroductionComponent },
  { path: "contact", component: ContactComponent },
  { path: "product", component: ProductComponent },
  { path: "card/:id", component: CardComponent },
  { path: "edit_product/:id", component: EditProductComponent },
  { path: "product_details/:id", component: ProductDetailsComponent },
  { path: "email_customer", component: EmailCustomerComponent },
  { path: "search/:name", component: SearchComponent },
  { path: "chark/:type", component: ChalkComponent },
  { path: "admin", component: AdminComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
