import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    imports : [
        RouterModule,
        SharedModule,
    ],
    declarations : [
        LoginComponent,
    ],
  
})
export class AuthModule {

}