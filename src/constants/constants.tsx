
export const BASE_URL:string = 'https://www.googleapis.com/youtube/v3';
export const CHART:string = 'mostPopular';
export const REGION_CODE:string = 'US';
export const PART:string = 'snippet,contentDetails,statistics';
export const MAX_RESULT:number = 20;
export const TYPE:string = 'video';
export const API_KEY:any = process.env.REACT_APP_API_KEY;
export const CLIENT_ID:any = process.env.REACT_APP_CLIENT_ID;
export const DISCOVERY_DOCS:[string] = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];
export const SCOPES:string = 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner';
export const STORAGE_ACCESS_TOKEN:string = 'accesstoken';
