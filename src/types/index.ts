
export type UserQuery = {
  page: string,
  pageSize: string,
  filter: string,
  showTokens: string
};

export type ExcecuteRequest = (
  endpoint: string,
  method?: string,
  params?: any,
  data?: any,
  oauthKey?: string,
) => Promise<any>;

type BasicDocument = {
  document_value: string,
  document_type: string,
  meta: {
    country_code: string,
    state_code?: string,
    address_street?: string,
    address_city?: string,
    address_subdivision?: string,
    address_postal_code?: string,
    address_country_code?: string,
    address_care_of?: string,
  }
};

export type UserDocument = {
  id?: string,
  email: string,
  phone_number: string,
  ip: string,
  name: string,
  alias: string,
  entity_type: string,
  entity_scope: string,
  day: number,
  month: number,
  year: number,
  address_street: string,
  address_city: string,
  address_subdivision: string,
  address_postal_code: string,
  address_country_code: string,
  virtual_docs: BasicDocument[],
  permission_scope?: string,
  physical_docs: BasicDocument[],
  social_docs: BasicDocument[],
};

type UserLogin = {
  email: string,
  password?: string
}

export type UserBody = {
  logins: UserLogin[],
  phone_numbers: string[],
  legal_names: string[],
  documents?: UserDocument[],
  extra: {
    supp_id: string,
    cip_tag: number,
    is_business: boolean
  }
};

export type UserData = {
  documents?: UserDocument[],
  permission?: string,
  permission_code?: string,
  update?: any,
  oauth: string
};

export type NodeData = {
  type: NodeTypeEnum,
  info: {
    account_num?: string,
    biller_id?: string,
    card_number?: string,
    class?: string,
    custody?: string,
    document_id: string,
    exp_date?: string,
    loan_type?: string,
    nickname: string,
    payee_name?: string,
    risk?: string,
    routing_num?: string,
    swift?: string,
    type?: string,
    credit_limit?: {
      amount: number,
      currency: string
    },
    interest?: {
      apr: number,
      cap: number
    },
    payee_address: {
      address_street: string,
      address_city: string,
      address_subdivision: string,
      address_country_code: string,
      address_postal_code: string
    },
    payment_node_id?: string,
    schedule?: string,
    next_payment?: number,
    num_payments?: number,
    reserve_node_id?: string,
    disbursement_node_id: string,
    auto_pay?: boolean,
  },
  extra?: {
    supp_id: string,
    note: ExtraNoteEnum
  },
  allowed?: string
  preview_only?: boolean,
  oauth: string
};

enum NodeTypeEnum {
  ACH = 'ACH-US',
  CARD = 'CARD-US',
  CHECK = 'CHECK-US',
  CLEARING = 'CLEARING-US',
  CMA = 'CMA',
  CRYPTO = 'CRYPTO-US',
  CUSTODY = 'CUSTODY-US',
  DEPOSIT = 'DEPOSIT-US',
  IBDEPOSIT = 'IB-DEPOSIT-US',
  IBSUBACCOUNT = 'IB-SUBACCOUNT-US',
  ICDEPOSIT = 'IC-DEPOSIT-US',
  INTERCHANGE = 'INTERCHANGE-US',
  IOU = 'IOU',
  LOANRESERVE = 'LOAN-RESERVE-US',
  LOAN = 'LOAN-US',
  REPAY = 'REPAY-US',
  RESERVE = 'RESERVE-US',
  RPPS = 'RPPS-US',
  SUBACCOUNT = 'SUBACCOUNT-US',
  SUBCARD = 'SUBCARD-US',
  SYNAPSE = 'SYNAPSE-US',
  TRADE = 'TRADE-US',
  TRIUMPHSUBACCOUNT = 'TRIUMPH-SUBACCOUNT-US',
  WIRE = 'WIRE-INT',
  WIREUS = 'WIRE-US',
};

enum ExtraNoteEnum {
  ACCOUNT = 'ACCOUNT',
  TOOSHORT = 'TOOSHORT'
};

export type NodeParams = {
  allowed?: string,
  allowed_status_code?: string,
  payment_node_id?: string,
  next_payment?: string,
  auto_pay?: boolean,
  reauth?: string,
  micro?: number[],
  resend_micro?: string,
  oauth: string
};

export type NodeBarcodeParams = {
  userId: string,
  nodeId: string,
  amount: number,
  currency: string,
  retailerId: number,
  oauth: string
};

export type TransactionsParams = {
  pageSize: string,
  page: string,
  nodeId?: string,
  transactioId?: string,
  oauth: string
};
