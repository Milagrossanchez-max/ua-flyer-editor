window.UA_APP_CONFIG = {
  // Poner en false solo para demo local. Para UA debe quedar true.
  enableAuth: true,

  // Completar con datos de Microsoft Entra ID / Azure AD de UA.
  tenantId: "TU_TENANT_ID_DE_UA",
  clientId: "TU_CLIENT_ID_DE_APP_REGISTRATION",
  redirectUri: window.location.origin + window.location.pathname,

  // Ajustar si el dominio corporativo de UA es otro.
  allowedDomains: ["universal-assistance.com"],

  // Opcional: IDs de grupos autorizados de Entra ID.
  // La validacion fina de grupos debe reforzarse desde IT/hosting.
  allowedGroups: [],

  appName: "UA Flyer Editor"
};
