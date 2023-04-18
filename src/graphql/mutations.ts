/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      title
      type
      accountNumber
      balance
      due
      createdAt
      updatedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      title
      type
      accountNumber
      balance
      due
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      title
      type
      accountNumber
      balance
      due
      createdAt
      updatedAt
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createLocalization = /* GraphQL */ `
  mutation CreateLocalization(
    $input: CreateLocalizationInput!
    $condition: ModelLocalizationConditionInput
  ) {
    createLocalization(input: $input, condition: $condition) {
      id
      locale
      label
      key
      is_default
      order
      page_name
      field_type
      icon
      organization_id
      createdAt
      updatedAt
    }
  }
`;
export const updateLocalization = /* GraphQL */ `
  mutation UpdateLocalization(
    $input: UpdateLocalizationInput!
    $condition: ModelLocalizationConditionInput
  ) {
    updateLocalization(input: $input, condition: $condition) {
      id
      locale
      label
      key
      is_default
      order
      page_name
      field_type
      icon
      organization_id
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocalization = /* GraphQL */ `
  mutation DeleteLocalization(
    $input: DeleteLocalizationInput!
    $condition: ModelLocalizationConditionInput
  ) {
    deleteLocalization(input: $input, condition: $condition) {
      id
      locale
      label
      key
      is_default
      order
      page_name
      field_type
      icon
      organization_id
      createdAt
      updatedAt
    }
  }
`;
export const createTheme = /* GraphQL */ `
  mutation CreateTheme(
    $input: CreateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    createTheme(input: $input, condition: $condition) {
      id
      mode
      is_default
      bottom_bar_color
      scaffold_bg_color
      app_bar_color
      primary_color
      black_color
      white_color
      grey_color
      red_color
      green_color
      orange_color
      organization_id
      createdAt
      updatedAt
    }
  }
`;
export const updateTheme = /* GraphQL */ `
  mutation UpdateTheme(
    $input: UpdateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    updateTheme(input: $input, condition: $condition) {
      id
      mode
      is_default
      bottom_bar_color
      scaffold_bg_color
      app_bar_color
      primary_color
      black_color
      white_color
      grey_color
      red_color
      green_color
      orange_color
      organization_id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTheme = /* GraphQL */ `
  mutation DeleteTheme(
    $input: DeleteThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    deleteTheme(input: $input, condition: $condition) {
      id
      mode
      is_default
      bottom_bar_color
      scaffold_bg_color
      app_bar_color
      primary_color
      black_color
      white_color
      grey_color
      red_color
      green_color
      orange_color
      organization_id
      createdAt
      updatedAt
    }
  }
`;
