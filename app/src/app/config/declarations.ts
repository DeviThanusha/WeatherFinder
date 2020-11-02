import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-customercreationComponent
import { customercreationComponent } from '../components/customercreationComponent/customercreation.component';
//CORE_REFERENCE_IMPORT-accountsComponent
import { accountsComponent } from '../components/accountsComponent/accounts.component';
//CORE_REFERENCE_IMPORT-sampleComponent
import { sampleComponent } from '../components/sampleComponent/sample.component';
//CORE_REFERENCE_IMPORT-logComponent
import { logComponent } from '../components/logComponent/log.component';
//CORE_REFERENCE_IMPORT-weathersearchComponent
import { weathersearchComponent } from '../components/weathersearchComponent/weathersearch.component';
//CORE_REFERENCE_IMPORT-weathercardComponent
import { weathercardComponent } from '../components/weathercardComponent/weathercard.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-customercreationComponent
customercreationComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-accountsComponent
accountsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sampleComponent
sampleComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-logComponent
logComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-weathersearchComponent
weathersearchComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-weathercardComponent
weathercardComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'login', component: sampleComponent},{path: 'accounts', component: accountsComponent},{path: 'customer', component: customercreationComponent},{path: '', redirectTo: 'login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
