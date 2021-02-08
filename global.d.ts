declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";
declare module "*.mp4";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

//global全局数据声明
export interface Global {
  //是否为开发环境
  debug:boolean;
  console:any;
  /*****设备相关信息*******/
  iphoneX: boolean;
  SDKVersion: any;
  brand: any;
  fontSizeSetting: number;
  language: any;
  model: any;
  pixelRatio: number;
  platform: string;
  screenHeight: number;
  screenWidth: number;
  statusBarHeight: number;
  system: string;
  version: any;
  windowHeight: number;
}

declare const IS_H5: any;
declare const IS_WEAPP: any;
declare const IS_RN: any;
