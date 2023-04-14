/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  title: string,
  type: AccountType,
  accountNumber: string,
  balance: number,
  due?: number | null,
};

export enum AccountType {
  SHARED = "SHARED",
  LOAN = "LOAN",
}


export type ModelAccountConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelAccountTypeInput | null,
  accountNumber?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  due?: ModelFloatInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelAccountTypeInput = {
  eq?: AccountType | null,
  ne?: AccountType | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  title: string,
  type: AccountType,
  accountNumber: string,
  balance: number,
  due?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAccountInput = {
  id: string,
  title?: string | null,
  type?: AccountType | null,
  accountNumber?: string | null,
  balance?: number | null,
  due?: number | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateOrganizationInput = {
  id?: string | null,
  name: string,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type CreateLocalizationInput = {
  id?: string | null,
  locale: string,
  label: string,
  key: string,
  is_default: boolean,
  order?: number | null,
  page_name: Page,
  field_type: FieldType,
  icon?: string | null,
  organization_id?: string | null,
};

export enum Page {
  ACCOUNTS = "ACCOUNTS",
  ACCOUNT = "ACCOUNT",
  TRANSACTIONS = "TRANSACTIONS",
  DEPOSITS = "DEPOSITS",
  SUPPORT = "SUPPORT",
  MENU = "MENU",
}


export enum FieldType {
  MENU = "MENU",
  LIST = "LIST",
  TEXT = "TEXT",
}


export type ModelLocalizationConditionInput = {
  locale?: ModelStringInput | null,
  label?: ModelStringInput | null,
  key?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  order?: ModelIntInput | null,
  page_name?: ModelPageInput | null,
  field_type?: ModelFieldTypeInput | null,
  icon?: ModelStringInput | null,
  organization_id?: ModelIDInput | null,
  and?: Array< ModelLocalizationConditionInput | null > | null,
  or?: Array< ModelLocalizationConditionInput | null > | null,
  not?: ModelLocalizationConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPageInput = {
  eq?: Page | null,
  ne?: Page | null,
};

export type ModelFieldTypeInput = {
  eq?: FieldType | null,
  ne?: FieldType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Localization = {
  __typename: "Localization",
  id: string,
  locale: string,
  label: string,
  key: string,
  is_default: boolean,
  order?: number | null,
  page_name: Page,
  field_type: FieldType,
  icon?: string | null,
  organization_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLocalizationInput = {
  id: string,
  locale?: string | null,
  label?: string | null,
  key?: string | null,
  is_default?: boolean | null,
  order?: number | null,
  page_name?: Page | null,
  field_type?: FieldType | null,
  icon?: string | null,
  organization_id?: string | null,
};

export type DeleteLocalizationInput = {
  id: string,
};

export type CreateThemeInput = {
  id?: string | null,
  mode: ThemeType,
  bottom_bar_color: string,
  scaffold_bg_color: string,
  app_bar_color: string,
  primary_color: string,
  black_color: string,
  white_color: string,
  grey_color: string,
  red_color: string,
  green_color: string,
  orange_color: string,
  organization_id: string,
};

export enum ThemeType {
  DARK = "DARK",
  LIGHT = "LIGHT",
}


export type ModelThemeConditionInput = {
  mode?: ModelThemeTypeInput | null,
  bottom_bar_color?: ModelStringInput | null,
  scaffold_bg_color?: ModelStringInput | null,
  app_bar_color?: ModelStringInput | null,
  primary_color?: ModelStringInput | null,
  black_color?: ModelStringInput | null,
  white_color?: ModelStringInput | null,
  grey_color?: ModelStringInput | null,
  red_color?: ModelStringInput | null,
  green_color?: ModelStringInput | null,
  orange_color?: ModelStringInput | null,
  organization_id?: ModelIDInput | null,
  and?: Array< ModelThemeConditionInput | null > | null,
  or?: Array< ModelThemeConditionInput | null > | null,
  not?: ModelThemeConditionInput | null,
};

export type ModelThemeTypeInput = {
  eq?: ThemeType | null,
  ne?: ThemeType | null,
};

export type Theme = {
  __typename: "Theme",
  id: string,
  mode: ThemeType,
  bottom_bar_color: string,
  scaffold_bg_color: string,
  app_bar_color: string,
  primary_color: string,
  black_color: string,
  white_color: string,
  grey_color: string,
  red_color: string,
  green_color: string,
  orange_color: string,
  organization_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateThemeInput = {
  id: string,
  mode?: ThemeType | null,
  bottom_bar_color?: string | null,
  scaffold_bg_color?: string | null,
  app_bar_color?: string | null,
  primary_color?: string | null,
  black_color?: string | null,
  white_color?: string | null,
  grey_color?: string | null,
  red_color?: string | null,
  green_color?: string | null,
  orange_color?: string | null,
  organization_id?: string | null,
};

export type DeleteThemeInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelAccountTypeInput | null,
  accountNumber?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  due?: ModelFloatInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type ModelLocalizationFilterInput = {
  id?: ModelIDInput | null,
  locale?: ModelStringInput | null,
  label?: ModelStringInput | null,
  key?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  order?: ModelIntInput | null,
  page_name?: ModelPageInput | null,
  field_type?: ModelFieldTypeInput | null,
  icon?: ModelStringInput | null,
  organization_id?: ModelIDInput | null,
  and?: Array< ModelLocalizationFilterInput | null > | null,
  or?: Array< ModelLocalizationFilterInput | null > | null,
  not?: ModelLocalizationFilterInput | null,
};

export type ModelLocalizationConnection = {
  __typename: "ModelLocalizationConnection",
  items:  Array<Localization | null >,
  nextToken?: string | null,
};

export type ModelThemeFilterInput = {
  id?: ModelIDInput | null,
  mode?: ModelThemeTypeInput | null,
  bottom_bar_color?: ModelStringInput | null,
  scaffold_bg_color?: ModelStringInput | null,
  app_bar_color?: ModelStringInput | null,
  primary_color?: ModelStringInput | null,
  black_color?: ModelStringInput | null,
  white_color?: ModelStringInput | null,
  grey_color?: ModelStringInput | null,
  red_color?: ModelStringInput | null,
  green_color?: ModelStringInput | null,
  orange_color?: ModelStringInput | null,
  organization_id?: ModelIDInput | null,
  and?: Array< ModelThemeFilterInput | null > | null,
  or?: Array< ModelThemeFilterInput | null > | null,
  not?: ModelThemeFilterInput | null,
};

export type ModelThemeConnection = {
  __typename: "ModelThemeConnection",
  items:  Array<Theme | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  accountNumber?: ModelSubscriptionStringInput | null,
  balance?: ModelSubscriptionFloatInput | null,
  due?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
};

export type ModelSubscriptionLocalizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  locale?: ModelSubscriptionStringInput | null,
  label?: ModelSubscriptionStringInput | null,
  key?: ModelSubscriptionStringInput | null,
  is_default?: ModelSubscriptionBooleanInput | null,
  order?: ModelSubscriptionIntInput | null,
  page_name?: ModelSubscriptionStringInput | null,
  field_type?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  organization_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLocalizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocalizationFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionThemeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mode?: ModelSubscriptionStringInput | null,
  bottom_bar_color?: ModelSubscriptionStringInput | null,
  scaffold_bg_color?: ModelSubscriptionStringInput | null,
  app_bar_color?: ModelSubscriptionStringInput | null,
  primary_color?: ModelSubscriptionStringInput | null,
  black_color?: ModelSubscriptionStringInput | null,
  white_color?: ModelSubscriptionStringInput | null,
  grey_color?: ModelSubscriptionStringInput | null,
  red_color?: ModelSubscriptionStringInput | null,
  green_color?: ModelSubscriptionStringInput | null,
  orange_color?: ModelSubscriptionStringInput | null,
  organization_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionThemeFilterInput | null > | null,
  or?: Array< ModelSubscriptionThemeFilterInput | null > | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    title: string,
    type: AccountType,
    accountNumber: string,
    balance: number,
    due?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    title: string,
    type: AccountType,
    accountNumber: string,
    balance: number,
    due?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    title: string,
    type: AccountType,
    accountNumber: string,
    balance: number,
    due?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLocalizationMutationVariables = {
  input: CreateLocalizationInput,
  condition?: ModelLocalizationConditionInput | null,
};

export type CreateLocalizationMutation = {
  createLocalization?:  {
    __typename: "Localization",
    id: string,
    locale: string,
    label: string,
    key: string,
    is_default: boolean,
    order?: number | null,
    page_name: Page,
    field_type: FieldType,
    icon?: string | null,
    organization_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocalizationMutationVariables = {
  input: UpdateLocalizationInput,
  condition?: ModelLocalizationConditionInput | null,
};

export type UpdateLocalizationMutation = {
  updateLocalization?:  {
    __typename: "Localization",
    id: string,
    locale: string,
    label: string,
    key: string,
    is_default: boolean,
    order?: number | null,
    page_name: Page,
    field_type: FieldType,
    icon?: string | null,
    organization_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocalizationMutationVariables = {
  input: DeleteLocalizationInput,
  condition?: ModelLocalizationConditionInput | null,
};

export type DeleteLocalizationMutation = {
  deleteLocalization?:  {
    __typename: "Localization",
    id: string,
    locale: string,
    label: string,
    key: string,
    is_default: boolean,
    order?: number | null,
    page_name: Page,
    field_type: FieldType,
    icon?: string | null,
    organization_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThemeMutationVariables = {
  input: CreateThemeInput,
  condition?: ModelThemeConditionInput | null,
};

export type CreateThemeMutation = {
  createTheme?:  {
    __typename: "Theme",
    id: string,
    mode: ThemeType,
    bottom_bar_color: string,
    scaffold_bg_color: string,
    app_bar_color: string,
    primary_color: string,
    black_color: string,
    white_color: string,
    grey_color: string,
    red_color: string,
    green_color: string,
    orange_color: string,
    organization_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateThemeMutationVariables = {
  input: UpdateThemeInput,
  condition?: ModelThemeConditionInput | null,
};

export type UpdateThemeMutation = {
  updateTheme?:  {
    __typename: "Theme",
    id: string,
    mode: ThemeType,
    bottom_bar_color: string,
    scaffold_bg_color: string,
    app_bar_color: string,
    primary_color: string,
    black_color: string,
    white_color: string,
    grey_color: string,
    red_color: string,
    green_color: string,
    orange_color: string,
    organization_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteThemeMutationVariables = {
  input: DeleteThemeInput,
  condition?: ModelThemeConditionInput | null,
};

export type DeleteThemeMutation = {
  deleteTheme?:  {
    __typename: "Theme",
    id: string,
    mode: ThemeType,
    bottom_bar_color: string,
    scaffold_bg_color: string,
    app_bar_color: string,
    primary_color: string,
    black_color: string,
    white_color: string,
    grey_color: string,
    red_color: string,
    green_color: string,
    orange_color: string,
    organization_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    title: string,
    type: AccountType,
    accountNumber: string,
    balance: number,
    due?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      title: string,
      type: AccountType,
      accountNumber: string,
      balance: number,
      due?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLocalizationQueryVariables = {
  id: string,
};

export type GetLocalizationQuery = {
  getLocalization?:  {
    __typename: "Localization",
    id: string,
    locale: string,
    label: string,
    key: string,
    is_default: boolean,
    order?: number | null,
    page_name: Page,
    field_type: FieldType,
    icon?: string | null,
    organization_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocalizationsQueryVariables = {
  filter?: ModelLocalizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocalizationsQuery = {
  listLocalizations?:  {
    __typename: "ModelLocalizationConnection",
    items:  Array< {
      __typename: "Localization",
      id: string,
      locale: string,
      label: string,
      key: string,
      is_default: boolean,
      order?: number | null,
      page_name: Page,
      field_type: FieldType,
      icon?: string | null,
      organization_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetThemeQueryVariables = {
  id: string,
};

export type GetThemeQuery = {
  getTheme?:  {
    __typename: "Theme",
    id: string,
    mode: ThemeType,
    bottom_bar_color: string,
    scaffold_bg_color: string,
    app_bar_color: string,
    primary_color: string,
    black_color: string,
    white_color: string,
    grey_color: string,
    red_color: string,
    green_color: string,
    orange_color: string,
    organization_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListThemesQueryVariables = {
  filter?: ModelThemeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThemesQuery = {
  listThemes?:  {
    __typename: "ModelThemeConnection",
    items:  Array< {
      __typename: "Theme",
      id: string,
      mode: ThemeType,
      bottom_bar_color: string,
      scaffold_bg_color: string,
      app_bar_color: string,
      primary_color: string,
      black_color: string,
      white_color: string,
      grey_color: string,
      red_color: string,
      green_color: string,
      orange_color: string,
      organization_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    title: string,
    type: AccountType,
    accountNumber: string,
    balance: number,
    due?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    title: string,
    type: AccountType,
    accountNumber: string,
    balance: number,
    due?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    title: string,
    type: AccountType,
    accountNumber: string,
    balance: number,
    due?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocalizationSubscriptionVariables = {
  filter?: ModelSubscriptionLocalizationFilterInput | null,
};

export type OnCreateLocalizationSubscription = {
  onCreateLocalization?:  {
    __typename: "Localization",
    id: string,
    locale: string,
    label: string,
    key: string,
    is_default: boolean,
    order?: number | null,
    page_name: Page,
    field_type: FieldType,
    icon?: string | null,
    organization_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocalizationSubscriptionVariables = {
  filter?: ModelSubscriptionLocalizationFilterInput | null,
};

export type OnUpdateLocalizationSubscription = {
  onUpdateLocalization?:  {
    __typename: "Localization",
    id: string,
    locale: string,
    label: string,
    key: string,
    is_default: boolean,
    order?: number | null,
    page_name: Page,
    field_type: FieldType,
    icon?: string | null,
    organization_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocalizationSubscriptionVariables = {
  filter?: ModelSubscriptionLocalizationFilterInput | null,
};

export type OnDeleteLocalizationSubscription = {
  onDeleteLocalization?:  {
    __typename: "Localization",
    id: string,
    locale: string,
    label: string,
    key: string,
    is_default: boolean,
    order?: number | null,
    page_name: Page,
    field_type: FieldType,
    icon?: string | null,
    organization_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThemeSubscriptionVariables = {
  filter?: ModelSubscriptionThemeFilterInput | null,
};

export type OnCreateThemeSubscription = {
  onCreateTheme?:  {
    __typename: "Theme",
    id: string,
    mode: ThemeType,
    bottom_bar_color: string,
    scaffold_bg_color: string,
    app_bar_color: string,
    primary_color: string,
    black_color: string,
    white_color: string,
    grey_color: string,
    red_color: string,
    green_color: string,
    orange_color: string,
    organization_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThemeSubscriptionVariables = {
  filter?: ModelSubscriptionThemeFilterInput | null,
};

export type OnUpdateThemeSubscription = {
  onUpdateTheme?:  {
    __typename: "Theme",
    id: string,
    mode: ThemeType,
    bottom_bar_color: string,
    scaffold_bg_color: string,
    app_bar_color: string,
    primary_color: string,
    black_color: string,
    white_color: string,
    grey_color: string,
    red_color: string,
    green_color: string,
    orange_color: string,
    organization_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThemeSubscriptionVariables = {
  filter?: ModelSubscriptionThemeFilterInput | null,
};

export type OnDeleteThemeSubscription = {
  onDeleteTheme?:  {
    __typename: "Theme",
    id: string,
    mode: ThemeType,
    bottom_bar_color: string,
    scaffold_bg_color: string,
    app_bar_color: string,
    primary_color: string,
    black_color: string,
    white_color: string,
    grey_color: string,
    red_color: string,
    green_color: string,
    orange_color: string,
    organization_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
