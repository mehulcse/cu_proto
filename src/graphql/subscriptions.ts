/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocalization = /* GraphQL */ `
  subscription OnCreateLocalization(
    $filter: ModelSubscriptionLocalizationFilterInput
  ) {
    onCreateLocalization(filter: $filter) {
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
export const onUpdateLocalization = /* GraphQL */ `
  subscription OnUpdateLocalization(
    $filter: ModelSubscriptionLocalizationFilterInput
  ) {
    onUpdateLocalization(filter: $filter) {
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
export const onDeleteLocalization = /* GraphQL */ `
  subscription OnDeleteLocalization(
    $filter: ModelSubscriptionLocalizationFilterInput
  ) {
    onDeleteLocalization(filter: $filter) {
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
export const onCreateTheme = /* GraphQL */ `
  subscription OnCreateTheme($filter: ModelSubscriptionThemeFilterInput) {
    onCreateTheme(filter: $filter) {
      id
      mode
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
export const onUpdateTheme = /* GraphQL */ `
  subscription OnUpdateTheme($filter: ModelSubscriptionThemeFilterInput) {
    onUpdateTheme(filter: $filter) {
      id
      mode
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
export const onDeleteTheme = /* GraphQL */ `
  subscription OnDeleteTheme($filter: ModelSubscriptionThemeFilterInput) {
    onDeleteTheme(filter: $filter) {
      id
      mode
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
