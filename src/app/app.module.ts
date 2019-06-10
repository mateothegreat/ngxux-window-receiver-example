import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { NgxuxWindowReceiverModule } from '@ngxux/window-receiver';

import { AppComponent } from './app.component';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,

        NgxuxWindowReceiverModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
