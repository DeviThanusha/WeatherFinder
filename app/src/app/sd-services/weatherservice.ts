/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
//CORE_REFERENCE_IMPORTS
import { SDBaseService } from '../../app/n-services/SDBaseService';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
//append_imports_start

//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class weatherservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  //   service flows_weatherservice

  async getWeather(cityName = '', ...others) {
    try {
      var bh = {
        input: {
          cityName: cityName
        },
        local: {
          currentWeather: '',
          ssdWeatherApiUrl: ''
        }
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.cityNameNullCheck(bh);
      //appendnew_next_getWeather
      return (
        // formatting output variables
        {
          input: {},
          local: {
            currentWeather: bh.local.currentWeather
          }
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U1a2ods2GroaBkXm');
    }
  }

  //appendnew_flow_weatherservice_Start

  async cityNameNullCheck(bh) {
    try {
      if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.snackbar(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.snackbar(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.snackbar(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'string',
          undefined,
          undefined
        )
      ) {
        bh = await this.constructApiUrl(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SI1pYNPEsiNQIyfz');
    }
  }

  async snackbar(bh) {
    try {
      this.matSnackBar.open('Invalid city name', 'okay', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      //appendnew_next_snackbar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9tZ9b9yJ2OItgaQh');
    }
  }

  async constructApiUrl(bh) {
    try {
      bh.local.ssdWeatherApiUrl = `{{CODE_HLITED}}amp;lt;/span>{bh.system.environment.properties.ssdURL}weather`;
      bh.local.qparams = {
        cityName: bh.input.cityName
      };
      bh = await this.callServerFlow(bh);
      this.logSsdWeatherApiUrl(bh);
      //appendnew_next_constructApiUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uRLHAzvim6Q7IFca');
    }
  }

  async callServerFlow(bh) {
    try {
      let requestOptions = {
        url: 'ssdWeatherApiUrl ',
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: { 'bh.local': 'qparams ' },
        body: undefined
      };
      bh.local.currentWeather = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_callServerFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8Fhx7j592X3aOS4u');
    }
  }

  async logSsdWeatherApiUrl(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.ssdWeatherApiUrl);
      //appendnew_next_logSsdWeatherApiUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AYew7ZkzfIaqORzc');
    }
  }

  async errorSnackbar(bh) {
    try {
      this.matSnackBar.open('Something went wrong!', 'okay', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      //appendnew_next_errorSnackbar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5p7g8GXFoRHQHkAY');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_wgai2WOktI536W83(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_wgai2WOktI536W83(bh) {
    const nodes = [
      'sd_U1a2ods2GroaBkXm',
      'sd_SI1pYNPEsiNQIyfz',
      'sd_9tZ9b9yJ2OItgaQh',
      'sd_uRLHAzvim6Q7IFca',
      'sd_8Fhx7j592X3aOS4u',
      'sd_AYew7ZkzfIaqORzc'
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.errorSnackbar(bh);
      //appendnew_next_sd_wgai2WOktI536W83
      return true;
    }
    return false;
  }
  //appendnew_flow_weatherservice_Catch
}
