// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  withings_auth_url: 'https://account.withings.com/oauth2_user/authorize2',
  withings_url: 'https://wbsapi.withings.net/',
  redirect_url: 'https://weight.osom.company/withings',
  client_id: '13dacd3295dfb36b90c86a711fc307a8006a04f359b752562859a5e377060183',
  client_secret: '692f1a3b626ff660b2f050da3670bad79bdf66e2ab8647eea42163fd428ec1ea',
  demo: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
