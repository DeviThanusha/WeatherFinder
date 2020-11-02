/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit , Input } from '@angular/core'
//import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

@Component({
    selector: 'bh-log',
    templateUrl: './log.template.html'
})

export class logComponent extends NBaseComponent implements OnInit {

    @Input()logArray = [];
    showLog = true;

    constructor() {
        super();
    //this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
    }
    
     toggleLogVisibility(event) {
        
        this.showLog = event.checked;
         
    }
}
