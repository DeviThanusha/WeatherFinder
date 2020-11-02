
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input, OnChanges, Output } from '@angular/core'
//import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { weatherservice } from '../../sd-services/weatherservice';
import { EventEmitter } from '@angular/core';
import { logobject } from 'app/models';
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
    selector: 'bh-weathercard',
    templateUrl: './weathercard.template.html'
})

export class weathercardComponent extends NBaseComponent implements OnInit {
    //mm: ModelMethods;
    @Output('log') res: EventEmitter<logobject> = new EventEmitter<logobject>();

    weatherdata: any;
    localStorage = localStorage;
    showCard = false;

    constructor(//private bdms: NDataModelService,
        public weatherService: weatherservice) {
        super();
        //this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    async getWeatherModelr(cityName) {
        try {
            this.weatherdata = (await this.weatherService.getWeather(cityName)).local.currentWeather;
        } catch (e) {
            this.weatherdata = {};
            this.res.emit({
                type: 'error',
                message: typeof e.message === 'string' ? e.message : 'Error Occured While Retrieving the Weather Data.'
            });
        }
        this.processWeather(cityName);
    }

    async processWeather(cityName) {
        if (typeof this.weatherdata === 'object' && Object.keys(this.weatherdata).length > 2) {
            this.showCard = true;
            localStorage.lastCity = cityName;
            this.res.emit({
                type: 'info',
                message: 'Successfully Retrieved the Weather Data for city: ' + cityName
            });
        } else {
            this.showCard = false;
            this.res.emit({
                type: 'error',
                message: `Weather Data Not Found${cityName ? ` For the City: ${cityName}` : ''}!`
            });
        }
    }


}
