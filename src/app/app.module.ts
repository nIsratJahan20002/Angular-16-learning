import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainManuComponent } from './header/main-manu/main-manu.component';
import { containerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FormsModule} from '@angular/forms';//add form module 
@NgModule({
  declarations: [
    AppComponent,
    containerComponent,
    SearchComponent,
    headerComponent,
    MainManuComponent,
    TopMenuComponent,
    TopHeaderComponent,
    ProductListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
