import { Component }                  from '@angular/core';
import { NgxuxWindowReceiverService } from '@ngxux/window-receiver';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public constructor(private windowReceiverService: NgxuxWindowReceiverService) {

        this.windowReceiverService.add({

            methodName: 'myExternalFunction'

        }).subscribe(args => {

            console.log('asdf', args);

        });

    }


}
