const DOMAIN = process.env.API_DOMAIN;
const PROTOCOL = process.env.REACT_APP_PROTOCOL;
const PERFIOS_PORT = process.env.REACT_APP_PERFIOS_PORT;
const MDM_PORT = process.env.REACT_APP_MDM_PORT;
const NPS_BUY_PORT = process.env.REACT_APP_NPS_BUY_PORT;
const NPS_PORT = process.env.REACT_APP_NPS_PORT;
const FISDOM_PORT = process.env.REACT_APP_FISDOM_PORT;
const CMS_PORT = process.env.REACT_APP_CMS_PORT;
const ANNUITY_PORT = process.env.REACT_APP_ANNUITY_PORT;
const GTI_PORT = process.env.REACT_APP_GTI_PORT;
const ECUBE_PORTAL_SERVICE_URL = process.env.REACT_APP_ECUBE_API_URL;
const ECUBE_FE_LOGIN_URL = process.env.REACT_APP_ECUBE_FE_URL;
const GETSETUP_URL = process.env.GETSETUP_URL;
const GETSETUP_IFRAME_URL = process.env.GETSETUP_IFRAME_URL;

const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY;
const ENCRYPTION_IV = process.env.REACT_APP_ENCRYPTION_IV;
const PADDSPACES = process.env.REACT_APP_PADDSPACES;

const NSDL_URL = process.env.NSDL_URL;
const KFintech_URL = process.env.KFintech_URL;

const CUSTOMER_CARE_CONTACT_NO = process.env.CUSTOMER_CARE_CONTACT_NO;
const ALL_NEWS_URL = process.env.ALL_NEWS_URL;
const MARKET_NEWS_URL = process.env.MARKET_NEWS_URL;
const COMPANIES_NEWS_URL = process.env.COMPANIES_NEWS_URL;
const MONEY_AND_BANKING_NEWS_URL = process.env.MONEY_AND_BANKING_NEWS_URL;
const INFOTECH_NEWS_URL = process.env.INFOTECH_NEWS_URL;
const ECONOMY_NEWS_URL = process.env.ECONOMY_NEWS_URL;
const SUPER_ADMIN_URL = process.env.REACT_APP_SUPERADMIN;

const PERFIOS_RETURN_URL =
  PROTOCOL +
  "://" +
  DOMAIN +
  "/portal/employee/updateinvestments/ppf/connectaccount";
const PERFIOS_BASE_URL = PROTOCOL + "//" + DOMAIN + PERFIOS_PORT + "perfios/";
const USERS = PERFIOS_BASE_URL + "users/";
const ACCOUNT = PERFIOS_BASE_URL + "accounts/";
const STATMENT = PERFIOS_BASE_URL + "statements/";
const PERFIOS_URL = process.env.REACT_APP_PERFIOS_URL;
const IFRAME_SITELINK_URL = PERFIOS_URL + "/siteLinkWidget";
const IFRAME_SECURED_SESSION_URL = PERFIOS_URL + "/userSecuredUISession";

const API_URLs = {
  PRODUCT_ACCOUNTS: ACCOUNT,
  USER_LOGIN: USERS + "userLogin",
  PARTNER_LOGIN: USERS + "partnerLogin",
  USER_UI_TOKEN: USERS + "userUIToken",
  USER_KEYS: USERS + "userKeys",
  MANUAL_ACCOUNT: ACCOUNT + "manualAccount",
  STATMENT_UPLOAD: STATMENT + "userStatementStart",
  LIST_USER_ACCOUNT: ACCOUNT + "listUserAccounts",
  LIST_ACCOUNTS: ACCOUNT + "list",
  USER_ACCOUNT_NAMES: ACCOUNT + "names",
  USER_REGISTRATION: USERS + "userRegistration",
  ACCOUNT_TRANSACTIONS: ACCOUNT + "account-transactions",
  UNLINK_ACCOUNT: ACCOUNT + "unlink",
  USER_TOKENIZED_WIDGET_URL: USERS + "userUIWidgetTokenizedURL",
};

const MDM_BASE_URL = PROTOCOL + "//" + DOMAIN + MDM_PORT;
const OTHER_INVESTMENT = MDM_BASE_URL + "otherinvestment/";
const FD = OTHER_INVESTMENT + "fd/";
const GOLD = OTHER_INVESTMENT + "gold/";

const KFINTECH_FUND_URL = `${MDM_BASE_URL}nav-data?riskType=`;

const LOGIN = MDM_BASE_URL + "auth/";
const INVESTMENT_URL = OTHER_INVESTMENT + "productinvestments/";
const INDIVIDUAL_EMPLOYMENT_URL = MDM_BASE_URL + "individualemployment/";
const MASTER_DATA_BASE_URL = MDM_BASE_URL + "master-data/";
const AGE_TYMER_BASE_URL = MDM_BASE_URL + "age-tymer/";
const LOG_EVENT = MDM_BASE_URL + "individual/report-logs";
const PROFILE = MDM_BASE_URL + "individual/profile/";

const MDM_API_URL = {
  // start otherinvestment URLs
  SSO_VERIFY_TOKEN: `${LOGIN}verify-token`,
  SAVE_FD_FOR_USER: FD + "saveProductDetails",
  SAVE_GOLD_FOR_USER: GOLD + "saveProductDetails",
  GET_FD_FOR_USER: FD + "getProductByUserId",
  GET_GOLD_FOR_USER: GOLD + "getProductByUserId",
  GET_INVESTMENT_DETAILS: INVESTMENT_URL + "getUserInvestments/",
  GET_PROTECTION_DETAILS: INVESTMENT_URL + "getUserprotections/",
  UPDATE_INVESTMENT_DETAILS: INVESTMENT_URL + "update/",
  GET_INVESTMENT_TRANSACTIONS: INVESTMENT_URL + "getInvestmentTransactions/",
  ADD_INVESTMENTS_MANUALLY: INVESTMENT_URL + "manual",
  DELETE_MANUAL_INVESTMENT_ENTRY: INVESTMENT_URL + "delete",
  GET_ANNUITYDETAILS:
    OTHER_INVESTMENT + "productinvestments/getUserInvestments/ANNUITY",
  GET_RECOMMENDATED_PRODUCTS: MDM_BASE_URL + "recommended-product",

  GET_SUPERANNUITYDETAILS:
    MDM_BASE_URL + "individualinvestments/summury/super-annuation",
  ANNUITY_POLICIES_URL: INVESTMENT_URL + "getUserInvestments/ANNUITY",
  ANNUITY_MINI_STATEMENT: INVESTMENT_URL + "getTransactionMiniStatement",
  // End otherinvestment URLs

  UPLOAD_EMPLOYEES: MDM_BASE_URL + "individual/uploadEmployees",

  // start Login URLs
  LOGIN_USER: LOGIN + "login",
  VERIFY_TOKEN: LOGIN + "verify-token",
  VERIFY_FORGOT_PASSWORD_TOKEN: LOGIN + "verify-forgot-password-token",
  GET_PROUCT_MASTER: MDM_BASE_URL + "product/",
  GET_GRATUITY_ELIGIBILITY_YEARS:
    INDIVIDUAL_EMPLOYMENT_URL + "gratuity-eligibility",
  POST_GTI_DOGH_SUBMISSION: INDIVIDUAL_EMPLOYMENT_URL + "dogh-submission",
  GET_GTI_DOGH_SUBMITTED: INDIVIDUAL_EMPLOYMENT_URL + "check-dogh",
  GET_INDIVIDUAL_DETAILS: MDM_BASE_URL + "individual/",
  SEND_LOGIN_OTP_EMAIL: LOGIN + "send-login-otp",
  FORGOT_PASSWORD: LOGIN + "forgot-password",
  SET_PASSWORD: LOGIN + "set-password",
  RESEND_REGISTRATION_LINK:
    MDM_BASE_URL + "individual/resend-registration-link",
  CONFIRMATION_DETAILS: MDM_BASE_URL + "individual/update-details",
  SUBMIT_OTP: LOGIN + "validate-otp",
  SSO_LOGIN: LOGIN + "sso-login",
  REGISTER_TOKEN: `${LOGIN}register-token`,
  GET_CONFIRMATION_DETAILS: `${MDM_BASE_URL}individual/user-details`,
  // End Login URLs

  GET_BANK_LIST: MDM_BASE_URL + "masterbanks/getbanks",

  // MASTER DATA APIs
  GET_STATE_MASTER: MASTER_DATA_BASE_URL + "/state-master",
  REDIRECT_SHORTLINK: MDM_BASE_URL + "redirect/",

  // Age Tymer APIs
  POST_USER_PIC: AGE_TYMER_BASE_URL + "new-employee-image/",
  SET_PROFILE_PIC: AGE_TYMER_BASE_URL + "set-profile-pic/",
  RESET_AGE_TYMER: AGE_TYMER_BASE_URL + "reset-age-tymer/",
  GET_PICS_URL: AGE_TYMER_BASE_URL + "get-pics-url/",

  //Retiral-Advisor API
  CREATE_NEW_QUERY: MDM_BASE_URL + "retiral-advisor/add-query",

  //User Feedback API
  GET_FEEDBACK_STATUS: MDM_BASE_URL + "feedback/user-feedback",
  POST_FEEDBACK: MDM_BASE_URL + "feedback/post-feedback",
  SET_LAST_PROMPT: MDM_BASE_URL + "feedback/set-last-prompt",
};

const SUPER_ADMIN = {
  // Offer Cards
  OFFER_CARDS: `${SUPER_ADMIN_URL}/offer-card`,
  GET_COUPON: `${SUPER_ADMIN_URL}/coupons`,
  UPDATE_COUPON: `${SUPER_ADMIN_URL}/coupons`,
};

const SANCHAY_PLUS_POLICY_STATUS = `${PROTOCOL}//${DOMAIN}${MDM_PORT}sanchay-plus/get-sanchay-policy-status`;
const FIT_PASS_URL = MDM_BASE_URL + "fitpass/getFitpassToken";
const FIT_PASS_STATUS_URL = MDM_BASE_URL + "fitpass/get-fitpass-status";
const RETIREMENT_CALCULATOR_BASE_URL = MDM_BASE_URL + "retiralcalculator/";
const RET_CALC_APIS = {
  GET_EARNINGS: RETIREMENT_CALCULATOR_BASE_URL + "getyourernings/",
  GET_RECOMMENDATIONS: RETIREMENT_CALCULATOR_BASE_URL + "getrecommendations/",
  POST_EARNINGS: RETIREMENT_CALCULATOR_BASE_URL + "setyourernings/",
  GET_EXPENSES: RETIREMENT_CALCULATOR_BASE_URL + "getindividualexpenses/",
  POST_EXPENSES: RETIREMENT_CALCULATOR_BASE_URL + "setindividualexpenses/",
  GET_INDIVIDUAL_GOALS: RETIREMENT_CALCULATOR_BASE_URL + "getindividualgoals/",
  POST_INDIVIDUAL_GOALS: RETIREMENT_CALCULATOR_BASE_URL + "setindividualgoals/",
  GET_RETIRAL_SCORE: RETIREMENT_CALCULATOR_BASE_URL + "getretiralscore/",
  POST_RETIRAL_SCORE: RETIREMENT_CALCULATOR_BASE_URL + "updateretiralscore/",
  UPDATE_RETIRAL_SCORE: RETIREMENT_CALCULATOR_BASE_URL + "updateretiralscore/",
  POST_RECOMMENDATIONS: RETIREMENT_CALCULATOR_BASE_URL + "setrecommendations/",
  GET_ASSUMPTIONS: RETIREMENT_CALCULATOR_BASE_URL + "getassumptions/",
  POST_ASSUMPTIONS: RETIREMENT_CALCULATOR_BASE_URL + "updateassumptions/",
  GET_RETIRAL_DISP_DATA: RETIREMENT_CALCULATOR_BASE_URL + "getretiraldata/",
  GET_USER_PRODUCT_INTEREST_RATE:
    RETIREMENT_CALCULATOR_BASE_URL + "userproductinterestrate/",
  POST_USER_PRODUCT_INTEREST_RATE:
    RETIREMENT_CALCULATOR_BASE_URL + "setproductinterestrate/",
  GET_USER_PRODUCT_WITHDRAWAL_AGE:
    RETIREMENT_CALCULATOR_BASE_URL + "userproductwithdrawalage/",
  POST_USER_PRODUCT_WITHDRAWAL_AGE:
    RETIREMENT_CALCULATOR_BASE_URL + "setproductwithdrawalage/",
};

const ANNUITY_BASE_URL = PROTOCOL + "//" + DOMAIN + ANNUITY_PORT;
const ANNUITY_APIS = {
  POST_QUOTE: ANNUITY_BASE_URL + "quote/generation",
  POST_QUOTE_FINALISATION: ANNUITY_BASE_URL + "quote/finalisation",
  GET_JOURNEY_COMPLETION_STATUS: ANNUITY_BASE_URL + "quote/journey/status/",
  PUT_QUOTE_STATUS_UPDATE: ANNUITY_BASE_URL + "quote/",
  POST_USER_DETAILS: ANNUITY_BASE_URL + "users/upload/details",
  GET_LOV: ANNUITY_BASE_URL + "lov",
  UPLOAD_DOCUMENTS: ANNUITY_BASE_URL + "profile/profile/kyc-details",
  GET_CKYC_DETAILS: ANNUITY_BASE_URL + "users/get-cykc-details",
  POST_STEPPER_FORM_DATA: ANNUITY_BASE_URL + "users/upload/details",
  POST_RECOMMENDED: ANNUITY_BASE_URL + "quote/recommendation",
  GET_USER_QUOTE: ANNUITY_BASE_URL + "quote/user-quote-form",
  GET_OCR_DATA: ANNUITY_BASE_URL + "upload/getKycDetails",
  VALIDATE_PAN: ANNUITY_BASE_URL + "pan/pan-validation",
  GET_ILLUSTRATION: ANNUITY_BASE_URL + "illustration/getDocumentId",
  GENRATE_CAPTHCHA: ANNUITY_BASE_URL + "aadhar/generate-captcha",
  VARIFY_AADHAR_OTP: ANNUITY_BASE_URL + "aadhar/users-aadhaar-info",
  SEND_AADHAAR_OTP: ANNUITY_BASE_URL + "aadhar/send-aadhaar-otp",
  SEARCH_BANK_DETAILS:
    ANNUITY_BASE_URL + "bank-verification/bank-account-details/",
  SEARCH_BANK_ACCOUNT: ANNUITY_BASE_URL + "payment-merchant/check-bank-account",
  VARIFY_BANK_ACCOUNT:
    ANNUITY_BASE_URL + "payment-merchant/validate-bank-account",
  GET_APPLICATION_STATUS:
    ANNUITY_BASE_URL + "illustration/getApplicationStatus",
  SAVE_BANK_DETAILS: ANNUITY_BASE_URL + "users/save-user-bank-details",
  APP_SUB: ANNUITY_BASE_URL + "app/submit-application",
  GET_SA_PREMIUM: ANNUITY_BASE_URL + "quote/lifeasia-saf-pool",
  CROSS_VERIFY_DOB: ANNUITY_BASE_URL + "aadhar/cross-verify-dob",
  REPLACE_QUOTE_ID: ANNUITY_BASE_URL + "quote/replace-old-quote",
  CHECK_AADHAAR_ATTEMPTS:
    ANNUITY_BASE_URL + "aadhar/aadhaar-attempts-remaining",
  SAVE_DROP_OFF_SCREEN: ANNUITY_BASE_URL + "quote/saveUserDropOffScreen",
};
/* ---------------------------------------------------------------------
Buy Services APIs
--------------------------------------------------------------------- */
const NEWZEAL_BUY_SERVICE_BASE_URL = MDM_BASE_URL + "buyservice/";
const NEWZEAL_BUY_SERVICE_APIS = {
  NZ_GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  GET_DATETIMESLOTS: NEWZEAL_BUY_SERVICE_BASE_URL + "getdatetimeslot/",
  GET_ADDRESSES: NEWZEAL_BUY_SERVICE_BASE_URL + "getaddresses/",
  GET_FAMILY_MEMBERS: NEWZEAL_BUY_SERVICE_BASE_URL + "getmembers/",
  POST_SAVE_ADDRESS: NEWZEAL_BUY_SERVICE_BASE_URL + "saveaddress/",
  POST_SAVE_MEMBER: NEWZEAL_BUY_SERVICE_BASE_URL + "savemember/",
  POST_BOOK_ORDER: NEWZEAL_BUY_SERVICE_BASE_URL + "bookservice/",
  GET_NEWZEAL_USER: NEWZEAL_BUY_SERVICE_BASE_URL + "checknewzealuser/",
  GET_ORDER_LIST: NEWZEAL_BUY_SERVICE_BASE_URL + "getorderlist/",
  GET_SENIOR_CARE_CAT_LIST:
    NEWZEAL_BUY_SERVICE_BASE_URL + "getservicecategories/",
  GET_CITY_DATA: NEWZEAL_BUY_SERVICE_BASE_URL + "getcitydata/",
};

const INVESTMENTS_APIS = {
  GET_INVESTMENT_TYPES: MDM_BASE_URL + "masterInvestmentType/",
  GET_USER_INVESTMENTS: MDM_BASE_URL + "individualinvestments/",
  GET_PRODUCT_INVESTMENT_SUMMURY:
    MDM_BASE_URL + "individualinvestments/summury/",
  GET_PRODUCT_POLICY_STATEMENT:
    MDM_BASE_URL + "individualinvestments/get-policy-statement",
  GET_RETIREE_USER_INVESTMENTS:
    MDM_BASE_URL + "individualinvestments/retiree/investment",
};

const PROTECTION_APIS = {};

const ONE_VIEW_COPUS_BASE_URL = MDM_BASE_URL + "oneViewCorpus/";
const ONE_VIEW_COPUS_APIS = {
  GET_ONE_VIEW_CORPUS: ONE_VIEW_COPUS_BASE_URL + "getmycorpus/",
  SYNC_INVESTMENTS: ONE_VIEW_COPUS_BASE_URL + "syncmycorpus/",
  RECALCULATE_INVESTMENTS: ONE_VIEW_COPUS_BASE_URL + "recalculate-corpus/",
};

const NPS_SERVER = PROTOCOL + `//${DOMAIN}${NPS_PORT}`;
const NPS_URL_SERVER = PROTOCOL + `//${DOMAIN}${NPS_BUY_PORT}`;
const FISDOM_SERVER = `${PROTOCOL}//${DOMAIN}${FISDOM_PORT}`;
const CMS_BASE_URL = PROTOCOL + `//${DOMAIN}${CMS_PORT}`;
const EMPLOYER_PRODUCT_FAQ_MASTER = "employerproductfaqs";
const EMPLOYER_PRODUCT_SERVICES_MASTER = "employerproductservices";

const PRODUCTS_API_URL = {
  GET_MASTER_PRODUCTS: CMS_BASE_URL + "product/master",
  GET_PRODUCT_DETAILS: CMS_BASE_URL + "product/details/get-by-tag",
  GET_PRODUCT_FAQ: CMS_BASE_URL + "product/faq/get-by-tag",
  GET_PRODUCT_SERVICES: CMS_BASE_URL + "product/services/get-by-tag",
};

const CMS_SERVICES_URL = PROTOCOL + "//" + DOMAIN + CMS_PORT;
const SERVICES_MASTER_LIST = "services";
const KNOWLEGE_CENTRE = "knowledge-center/get-articles/";
const HEALTH_SCORE = MDM_BASE_URL + "health-score/";
const TAX2WIN = MDM_BASE_URL + "tax-2-win/get-sso-auth";

const SERVICES_API_URL = {
  GET_MASTER_SERVICES: CMS_SERVICES_URL + SERVICES_MASTER_LIST + "/master-list",
  GET_SENIOR_CARE_LIST: CMS_SERVICES_URL + SERVICES_MASTER_LIST + "/list",
  GET_CHECKIN_CARE_CONTENT:
    CMS_SERVICES_URL + SERVICES_MASTER_LIST + "/contents",
  GET_KNOWLEGE_CENTRE_ARTICLE: CMS_SERVICES_URL + KNOWLEGE_CENTRE,
  GET_HEALTH_SCORE: MDM_BASE_URL + "health-score/",
  GET_CALCULATE_SCORE: HEALTH_SCORE + "calculate-health-score",
  BMI_CALCULATE: HEALTH_SCORE + "calculate-bmi",
  BP_CALCULATE: HEALTH_SCORE + "calculate-blood-pressure",
};

const EMPLOYER_PRODUCT_API = {
  GET_PRODUCT_SERVICES:
    CMS_BASE_URL + EMPLOYER_PRODUCT_SERVICES_MASTER + "/byproduct",
  GET_PRODUCT_FAQ: CMS_BASE_URL + EMPLOYER_PRODUCT_FAQ_MASTER + "/byproduct",
};

const ECUBE_API_URL = {
  POST_ECUBE_USER_LOGIN: ECUBE_PORTAL_SERVICE_URL + "/users/login/retiral",
};

const GTI_BASE_URL = PROTOCOL + "//" + DOMAIN + GTI_PORT;

const GTI_APIS = {
  GET_EMPLOYEE_DETAILS:
    GTI_BASE_URL + "employee-details/getGTIDetailsByClientId",
};

const VOUCHER_CODES = `${MDM_BASE_URL}vouchers`;
const GET_EMPLOYER_DETAILS = MDM_BASE_URL + "employermaster";
const GET_INDIVIDUAL_CONTACT_DETAILS =
  MDM_BASE_URL + "individual-contact-details";
const USER_ID = "c11e20d5-9f14-4d57-ad94-9d32f82cef3e"; // "a3edb619-f696-430c-9060-d5f6c746f734"//"a3edb619-f696-430c-9060-d5f6c746f734"
const FISDOM_USER_ID = "0fb477de-b167-4de1-9f01-e2a8fcbf31d5";
const FISDOM_IFRAME_TOKEN = "5073896158003201";

const CITY_LIST = `${MDM_BASE_URL}generic-list/city-list`;
const STATE_LIST = `${MDM_BASE_URL}generic-list/state-list`;

const EDUCATION_QUALIFICATION_LIST = `${MDM_BASE_URL}retiree/education`;
const RETIREE_FINANCIAL_CONSULTANT = `${MDM_BASE_URL}retiree/agency-onboarding`;

const HIDE_RETIRAL_RECOMMENDATION_PAGE = true;
const HIDE_ANNUITY = false;
const FRESHDESK_SUPPORT_TICKET_URL = process.env.FRESHDESK_SUPPORT_TICKET_URL;

/**
 * Karvy CRA Parameters - NPS Buying
 */
const KARVY_CRA_VARS = {
  KARVY_CRA_URL: process.env.REACT_APP_KARVY_CRA_URL,
  KARVY_INTEGRATION_LICENSE: process.env.REACT_APP_INTEGRATION_LICENSE,
  KARVY_CRA_CODE: process.env.REACT_APP_CRA_CODE,
  KARVY_NPS_BUY_URL: process.env.KARVY_NPS_BUY_URL,
};
const PASA_URL = process.env.PASA_URL;
const NPS_BUY_DEFAULT_URL = process.env.NPS_BUY_DEFAULT_URL;
const TERM_INSURANCE_URL = process.env.TERM_INSURANCE_URL;
const SANCHAY_BANNER_URL = process.env.SANCHAY_BANNER_URL;
const LOGIN_PAGE_VIDEO_URL = process.env.LOGIN_PAGE_VIDEO_URL;
const ANNUITY_PAYMENT_URL_PGP = process.env.ANNUITY_PAYMENT_URL_PGP;
const ANNUITY_PAYMENT_URL_NIA = process.env.ANNUITY_PAYMENT_URL_NIA;
const SAVING_PLAN_URL = process.env.SAVING_PLAN_URL;
const SANCHAY_URL = process.env.SANCHAY_URL;
const ANNUITY_NIA_BROCHURE_URL = process.env.ANNUITY_NIA_BROCHURE_URL;
const ANNUITY_PGP_BROCHURE_URL = process.env.ANNUITY_PGP_BROCHURE_URL;
const CLICK2WEALTH_BUY = process.env.CLICK2WEALTH_BUY;
const CLICK2WEALTH_PDF = process.env.CLICK2WEALTH_PDF;
const SANCHAY_PLUS_BUY = process.env.SANCHAY_PLUS_BUY;
const SANCHAY_PLUS_PDF = process.env.SANCHAY_PLUS_PDF;
const SANCHAY_PLUS_BROCHURE = process.env.SANCHAY_PLUS_BROCHURE;
const SANCHAY_PAR_ADVANTAGE_BUY = process.env.SANCHAY_PAR_ADVANTAGE_BUY;
const SANCHAY_PAR_ADVANTAGE_PDF = process.env.SANCHAY_PAR_ADVANTAGE_PDF;
const ANNUITY_NPS_CRA_URL_NSDL = process.env.ANNUITY_NPS_CRA_URL_NSDL;
const ANNUITY_NPS_CRA_URL_KF = process.env.ANNUITY_NPS_CRA_URL_KF;
const NPS_BUY_URL_COMPARISON_STRING = process.env.NPS_BUY_URL_COMPARISON_STRING;

const SANCHAY_PLUS_RETIREE = process.env.SANCHAY_PLUS_RETIREE;
const SANCHAY_PAR_ADV_RETIREE = process.env.SANCHAY_PAR_ADV_RETIREE;
const SANCHAY_RETIREE = process.env.SANCHAY_RETIREE;
const AGE_RETIREE = process.env.AGE_RETIREE;
const CANCER_CARE = process.env.CANCER_CARE;
const CLICK2WEALTH = process.env.CLICK2WEALTH;
const GPS = process.env.GPS;
const HEALTHCARE_MEMBERSHIP_SUBSCRIPTION =
  process.env.HEALTHCARE_MEMBERSHIP_SUBSCRIPTION;

const USER_REGISTRATIONS_APIS = {
  EMPLOYER_AUTHENTICATION: GET_EMPLOYER_DETAILS + "/onBoardKey",
  USER_EXISTS: LOGIN + "verify-on-board-user-v2",
  SET_REGISTRATION_SOURCE: LOGIN + "set-registration-source",
  ON_BOARD_EMPLOYEES: MDM_API_URL.GET_INDIVIDUAL_DETAILS + "onBoardEmployees",
  VALIDATE_OTP_PASSWORD: LOGIN + "validateotp-setpassword",
  PINCODE_DETAILS: GET_INDIVIDUAL_CONTACT_DETAILS + "/profile/pincode",
  RESEND_OTP: LOGIN + "resend-otp",
  REFERRAL_AUTHENTICATION: LOGIN + "validate-referral",
  VALIDATE_SOURCE_REGISTER_PAYLOAD: `${LOGIN}validate-source-register-payload`,
  AGENT_USER_REGISTERATION: `${LOGIN}generate-assisted-register-url`,
  VALIDATE_AGENT_USER_REGISTER_TOKEN: `${LOGIN}validate-agent-user-register-token`,
};

const REFERRAL_APIS = {
  GET_VOUCHER_CODES: `${VOUCHER_CODES}/get-issued-vouchers`,
  STATUS: `${VOUCHER_CODES}/campaign-status`,
};
const NPS_BUY_BASE_URL = PROTOCOL + "//" + DOMAIN + NPS_BUY_PORT;
const NPS_BUY = {
  PAN_ACCOUNT_STATUS: `${NPS_BUY_BASE_URL}pan/validation-status`,
  CKYC_ACCOUNT_STATUS: `${NPS_BUY_BASE_URL}ckyc/validate-ckyc`,
  DOWNLOAD_BLANK_PDF: `${NPS_BUY_BASE_URL}ckyc/registrationform/download`,
  GET_PAN_NUMBER: `${NPS_BUY_BASE_URL}pan`,
  CHANGED_PAN_NUMBER: `${NPS_BUY_BASE_URL}users/overwrite-nps-data`,
  ACCOUNT_STATUS: `${NPS_BUY_BASE_URL}pran/account-status`,
  REQUEST_SUBMISSION: `${NPS_BUY_BASE_URL}pran/request-submission`,
  GET_NPS_DETAILS: `${NPS_BUY_BASE_URL}pran`,
  FILE_UPLOAD_DETAILS: `${NPS_BUY_BASE_URL}upload/profile/kyc-details`,
  GET_DETAILS_FROM_IFSC: `${NPS_BUY_BASE_URL}investment/bank-account-details`,
  NOMINEE_DETAILS: `${NPS_BUY_BASE_URL}investment/nominee-details`,
  BANK_DETAILS: `${NPS_BUY_BASE_URL}investment/bank-details`,
  VALID_AADHAR_GEN_CAPTCHA: `${NPS_BUY_BASE_URL}aadhaar/generate-captcha`,
  SEND_OTP: `${NPS_BUY_BASE_URL}aadhaar/send-aadhaar-otp`,
  AADHAAR_SEND_OTP: `${NPS_BUY_BASE_URL}aadhaar/send-aadhaar-otp`,
  AADHAAR_OTP_VALIDITY: `${NPS_BUY_BASE_URL}aadhaar/aadhaar-otp-validity`,
  USERS_AADHAR_INFO: `${NPS_BUY_BASE_URL}aadhaar/users-aadhaar-info`,
  AADHAR_ACKNOWLEDGEMENT: `${NPS_BUY_BASE_URL}aadhaar/acknowledgement`,
  FUND_PERFORMANCES: `${MDM_BASE_URL}companyproductsetup/fund-performance-list`,
  SUBMIT_BASIC_DETAILS: `${NPS_BUY_BASE_URL}aadhaar/manual-verification`,
  SUBMIT_ADDRESS_DETAILS: `${NPS_BUY_BASE_URL}aadhaar/manual-verification`,
  GET_SCHEME_PREFERENCE: `${NPS_BUY_BASE_URL}investment/scheme-preference`,
  SEND_EMAIL_MOBILE_OTP: `${NPS_BUY_BASE_URL}aadhaar/esign/send-otp`,
  VERIFY_EMAIL_MOBILE_OTP: `${NPS_BUY_BASE_URL}aadhaar/esign/verify-otp`,
  OTP_EXPIRE_TIME: `${NPS_BUY_BASE_URL}aadhaar/esign/otp-validity`,
  STEPPER_DETAILS: `${NPS_BUY_BASE_URL}stepper/currentTab`,
  JOURNEY_TYPE: `${NPS_BUY_BASE_URL}users`,
  GET_PRAN_NUMBER: `${NPS_BUY_BASE_URL}pran`,
  CRA_REDIRECTION: `${NPS_BUY_BASE_URL}pran/cra-redirection`,
  TIER_SAVE: `${NPS_BUY_BASE_URL}aadhaar/opt-for-tier2`,
  PRAN_JOURNEY_SAVE: `${NPS_BUY_BASE_URL}users/journey`,
  AADHAR_ATTEMPTS: `${NPS_BUY_BASE_URL}aadhaar/aadhaar-attempts`,
  VALIDATE_DETAILS: `${NPS_BUY_BASE_URL}aadhaar/validate-data`,
  UPDATE_FILE_UPLOAD_DATA: `${NPS_BUY_BASE_URL}upload/profile/kyc-details/identity-number`,
  UPDATE_ACKNOWLEDGEMENT: `${NPS_BUY_BASE_URL}users/updateAcknowledgement`,
  USER_REVIEW_DATA: `${NPS_BUY_BASE_URL}users/review-data`,
};

const WEBINAR_APIS = {
  GET_WEBINAR_LIST: `${MDM_BASE_URL}webinar`,
  BOOK_WEBINAR: `${MDM_BASE_URL}webinar/book-webinar`,
  LATEST_WEBINAR: `${MDM_BASE_URL}webinar`,
};

const MF_BUY_EXTERNAL_URL = process.env.MF_BUY_EXTERNAL_URL;
const SAVE_COVER_PHOTO = `${MDM_BASE_URL}individual/retiree/coverphoto`;

const RETIREE_GIFT_INSURANCE = `${MDM_BASE_URL}retiree/gift-insurance`;
const RETIREE_FIRST_JOURNEY = `${MDM_BASE_URL}individual/retiree/firstjourney`;

const GAMING_URL = {
  SUDOKU_EASY_GAME_URL: process.env.SUDOKU_EASY_GAME_URL,
  THE_HINDU_CRYPTIC_GAME_URL: process.env.THE_HINDU_CRYPTIC_GAME_URL,
  SPORTSTAR_CROSSWORD_GAME_URL: process.env.SPORTSTAR_CROSSWORD_GAME_URL,
  GUARDIANK_QUICK_GAME_URL: process.env.GUARDIANK_QUICK_GAME_URL,
  PLAY_MORE_GAME_URL: process.env.PLAY_MORE_GAME_URL,
};
const NPS_BUY_ENVS = {
  DEFAULT_NPS_BUY_CRA: process.env.DEFAULT_NPS_BUY_CRA,
  DEFAULT_NPS_BUY_TYPE: process.env.DEFAULT_NPS_BUY_TYPE,
  NPS_BUY_NSDL: process.env.NPS_BUY_DEFAULT_URL,
  NPS_KFINTECH_URL: process.env.KFINTECH_NPS_BUY_URL,
  NPS_BUY_EXTERNAL_URL: {
    kfintech: {
      retail: process.env.KFINTECH_NPS_BUY_URL,
      corporate: process.env.KFINTECH_NPS_BUY_URL,
    },
    nsdl: {
      retail: process.env.NPS_BUY_DEFAULT_URL,
      corporate: process.env.NPS_BUY_DEFAULT_URL,
    },
  },
};

const RECOMMENDATION_CARDS_FLAGS = JSON.parse(
  process.env.RECOMMENDATION_CARDS_FLAGS
);
const HDFC_C2PL_URL = process.env.HDFC_C2PL_URL;

export {
  MDM_BASE_URL,
  API_URLs,
  IFRAME_SITELINK_URL,
  IFRAME_SECURED_SESSION_URL,
  MDM_API_URL,
  SUPER_ADMIN,
  SANCHAY_PLUS_POLICY_STATUS,
  HIDE_ANNUITY,
  PRODUCTS_API_URL,
  EMPLOYER_PRODUCT_API,
  RET_CALC_APIS,
  USER_ID,
  SERVICES_API_URL,
  INVESTMENTS_APIS,
  ONE_VIEW_COPUS_APIS,
  NPS_SERVER,
  FISDOM_SERVER,
  FISDOM_USER_ID,
  FISDOM_IFRAME_TOKEN,
  NEWZEAL_BUY_SERVICE_APIS,
  ANNUITY_APIS,
  ECUBE_API_URL,
  ECUBE_FE_LOGIN_URL,
  GTI_APIS,
  ENCRYPTION_KEY,
  ENCRYPTION_IV,
  PADDSPACES,
  HIDE_RETIRAL_RECOMMENDATION_PAGE,
  FRESHDESK_SUPPORT_TICKET_URL,
  KARVY_CRA_VARS,
  GET_EMPLOYER_DETAILS,
  NPS_BUY_DEFAULT_URL,
  TERM_INSURANCE_URL,
  SANCHAY_BANNER_URL,
  USER_REGISTRATIONS_APIS,
  LOGIN_PAGE_VIDEO_URL,
  ANNUITY_PAYMENT_URL_PGP,
  ANNUITY_PAYMENT_URL_NIA,
  SAVING_PLAN_URL,
  SANCHAY_URL,
  LOG_EVENT,
  REFERRAL_APIS,
  CUSTOMER_CARE_CONTACT_NO,
  ANNUITY_PGP_BROCHURE_URL,
  ANNUITY_NIA_BROCHURE_URL,
  CITY_LIST,
  STATE_LIST,
  CLICK2WEALTH_BUY,
  CLICK2WEALTH_PDF,
  SANCHAY_PLUS_BUY,
  SANCHAY_PLUS_PDF,
  SANCHAY_PLUS_BROCHURE,
  SANCHAY_PAR_ADVANTAGE_BUY,
  SANCHAY_PAR_ADVANTAGE_PDF,
  WEBINAR_APIS,
  PASA_URL,
  ALL_NEWS_URL,
  MARKET_NEWS_URL,
  COMPANIES_NEWS_URL,
  MONEY_AND_BANKING_NEWS_URL,
  INFOTECH_NEWS_URL,
  ECONOMY_NEWS_URL,
  MF_BUY_EXTERNAL_URL,
  ANNUITY_NPS_CRA_URL_KF,
  ANNUITY_NPS_CRA_URL_NSDL,
  NPS_BUY_URL_COMPARISON_STRING,
  GAMING_URL,
  RETIREE_GIFT_INSURANCE,
  RETIREE_FIRST_JOURNEY,
  EDUCATION_QUALIFICATION_LIST,
  PROFILE,
  SAVE_COVER_PHOTO,
  RETIREE_FINANCIAL_CONSULTANT,
  SANCHAY_PLUS_RETIREE,
  SANCHAY_PAR_ADV_RETIREE,
  SANCHAY_RETIREE,
  AGE_RETIREE,
  NPS_BUY,
  NPS_BUY_ENVS,
  RECOMMENDATION_CARDS_FLAGS,
  HDFC_C2PL_URL,
  CANCER_CARE,
  CLICK2WEALTH,
  FIT_PASS_URL,
  FIT_PASS_STATUS_URL,
  NPS_URL_SERVER,
  NSDL_URL,
  KFintech_URL,
  KFINTECH_FUND_URL,
  TAX2WIN,
  GETSETUP_URL,
  GETSETUP_IFRAME_URL,
  GPS,
  HEALTHCARE_MEMBERSHIP_SUBSCRIPTION,
};
