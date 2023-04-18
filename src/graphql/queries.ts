/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        accountNumber
        balance
        due
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocalization = /* GraphQL */ `
  query GetLocalization($id: ID!) {
    getLocalization(id: $id) {
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
export const listLocalizations = /* GraphQL */ `
  query ListLocalizations(
    $filter: ModelLocalizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocalizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTheme = /* GraphQL */ `
  query GetTheme($id: ID!) {
    getTheme(id: $id) {
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
export const listThemes = /* GraphQL */ `
  query ListThemes(
    $filter: ModelThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
