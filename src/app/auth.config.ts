// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
      redirectUri: window.location.origin + '/test',
      clientId: '492465313364-7aoea143olo5bq1f0lpjlsl1ff9r55a7.apps.googleusercontent.com',
      issuer: 'https://accounts.google.com',
      scope: 'openid profile email https://mail.google.com/',
      responseType: 'token id_token',
      strictDiscoveryDocumentValidation: false,

  showDebugInformation: true,

  sessionChecksEnabled: false
};