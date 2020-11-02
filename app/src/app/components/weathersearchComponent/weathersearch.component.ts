
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core'
//import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { HttpClient } from '@angular/common/http';

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
    selector: 'bh-weathersearch',
    templateUrl: './weathersearch.template.html'
})

export class weathersearchComponent extends NBaseComponent implements OnInit {
    searchString: string;
    logArray = [];

    constructor(private http: HttpClient) {
        super();
    }

    ngOnInit() {

    }

    updateLog(logObject) {
        this.logArray.push(logObject);
    }
   
}
