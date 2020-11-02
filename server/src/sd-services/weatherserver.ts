import { SDBaseService } from '../services/SDBaseService';
import * as httpStatusCodes from 'http-status-codes';
import { Middleware } from '../middleware/Middleware';
import log from '../utils/Logger';
import * as cookieParser from 'cookie-parser';
import { Readable } from 'stream';
import { setInterval } from 'timers';
import * as settings from '../config/config';
import { Issuer, custom } from 'openid-client';
import * as crypto from 'crypto';
import * as url from 'url';

let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as safeStringify from 'fast-safe-stringify'; //_splitter_
//append_imports_end

export class weatherserver {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'weatherserver';
    this.app = app;
    this.serviceBasePath = `${this.app.settings.base}`;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new weatherserver(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_weatherserver_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: weatherserver');

    //appendnew_flow_weatherserver_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: weatherserver');

    if (!this.swaggerDocument['paths']['/weather ']) {
      this.swaggerDocument['paths']['/weather '] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/weather ']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/weather `,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.constructUrlParams(bh);
          //appendnew_next_sd_AyqZWZO8qqXadqzO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AyqZWZO8qqXadqzO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_weatherserver_HttpIn
  }
  //   service flows_weatherserver

  //appendnew_flow_weatherserver_Start

  async constructUrlParams(bh) {
    try {
      bh.url = process.env.weatherProviderURL;
      bh.qparams = {
        q: bh.input.query.cityName,
        APPID: process.env.apiId,
        units: 'metric'
      };
      bh = await this.sd_b1ZRuftgXcG1anpQ(bh);
      //appendnew_next_constructUrlParams
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A4bZGqXY3a6du34D');
    }
  }

  async sd_b1ZRuftgXcG1anpQ(bh) {
    try {
      let requestOptions = {
        url: 'url',
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: { bh: 'qparams' },
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: false
      };
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.result = responseMsg;
      await this.sendResponse(bh);
      this.logResult(bh);
      //appendnew_next_sd_b1ZRuftgXcG1anpQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b1ZRuftgXcG1anpQ');
    }
  }

  async sendResponse(bh) {
    try {
      bh.web.res.status(bh.result.statusCode).send(bh.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_STHukpDW7xjPhCzO');
    }
  }

  async logResult(bh) {
    try {
      let logobj: any = bh.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      //appendnew_next_logResult
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0bMbWVrx0n2TyNK1');
    }
  }

  async sd_HccwhYC0rPBAZWJQ(bh) {
    try {
      bh.web.res.status(500).send({ message: 'Something went wrong!' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HccwhYC0rPBAZWJQ');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_j9Uv48ura7fXJbF4(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_j9Uv48ura7fXJbF4(bh) {
    const nodes = [
      'sd_AyqZWZO8qqXadqzO',
      'sd_A4bZGqXY3a6du34D',
      'sd_b1ZRuftgXcG1anpQ',
      'sd_STHukpDW7xjPhCzO',
      'sd_0bMbWVrx0n2TyNK1'
    ];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_HccwhYC0rPBAZWJQ(bh);
      //appendnew_next_sd_j9Uv48ura7fXJbF4
      return true;
    }
    return false;
  }
  //appendnew_flow_weatherserver_Catch
}
