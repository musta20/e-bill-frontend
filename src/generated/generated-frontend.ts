import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Bill = {
  __typename?: 'Bill';
  CustomerId: Scalars['Float'];
  CustomerName: Scalars['String'];
  PdfName: Scalars['String'];
  Total: Scalars['Float'];
  UserID: Scalars['Float'];
  _id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type BillResponse = {
  __typename?: 'BillResponse';
  Bill?: Maybe<Bill>;
  errors?: Maybe<Array<ErrorFiled>>;
};

export type ErrorFiled = {
  __typename?: 'ErrorFiled';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type InputBill = {
  CustomerId?: InputMaybe<Scalars['Float']>;
  CustomerName: Scalars['String'];
  PdfName?: InputMaybe<Scalars['String']>;
  Total?: InputMaybe<Scalars['Float']>;
  UserID?: InputMaybe<Scalars['Float']>;
};

export type InputProduct = {
  BillId?: InputMaybe<Scalars['Float']>;
  Name: Scalars['String'];
  Price?: InputMaybe<Scalars['Float']>;
  Quantity?: InputMaybe<Scalars['Float']>;
  UserId?: InputMaybe<Scalars['Float']>;
};

export type InputUser = {
  Adress: Scalars['String'];
  Contact: Scalars['String'];
  Name: Scalars['String'];
  Password: Scalars['String'];
  RegistrationNumber?: InputMaybe<Scalars['Float']>;
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBill: BillResponse;
  createProduct: Product;
  createUser: UserResponse;
  deleteUser: Scalars['Boolean'];
  loginUser: UserResponse;
  logout: Scalars['Boolean'];
  updateProduct?: Maybe<Product>;
  updateUser?: Maybe<User>;
};


export type MutationCreateBillArgs = {
  BillInput: InputBill;
  List: Array<InputProduct>;
};


export type MutationCreateProductArgs = {
  ProductInput: InputProduct;
};


export type MutationCreateUserArgs = {
  UserInput: InputUser;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationLoginUserArgs = {
  userNameAndPassword: UsernameAndPassword;
};


export type MutationUpdateProductArgs = {
  ProductInput: InputProduct;
  id: Scalars['Float'];
};


export type MutationUpdateUserArgs = {
  UserInput: InputUser;
  id: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  BillId: Scalars['Float'];
  Name: Scalars['String'];
  Price: Scalars['Float'];
  Quantity: Scalars['Float'];
  UserId: Scalars['Float'];
  _id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  Bill?: Maybe<Bill>;
  Bills: Array<Bill>;
  Product?: Maybe<Product>;
  Products: Array<Product>;
  Profile?: Maybe<User>;
  User?: Maybe<User>;
  Users: Array<User>;
};


export type QueryBillArgs = {
  id: Scalars['Float'];
};


export type QueryProductArgs = {
  id: Scalars['Float'];
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  Adress: Scalars['String'];
  Contact: Scalars['String'];
  Name: Scalars['String'];
  Password: Scalars['String'];
  RegistrationNumber: Scalars['Float'];
  _id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<ErrorFiled>>;
  user?: Maybe<User>;
};

export type UsernameAndPassword = {
  Password: Scalars['String'];
  email: Scalars['String'];
};

export type LoginUserMutationVariables = Exact<{
  userNameAndPassword: UsernameAndPassword;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'ErrorFiled', field: string, message: string }> | null, user?: { __typename?: 'User', _id: number, Name: string, email: string, Password: string, Contact: string, Adress: string, RegistrationNumber: number, createdAt: any } | null } };

export type CreateUserMutationVariables = Exact<{
  userInput: InputUser;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'ErrorFiled', field: string, message: string }> | null, user?: { __typename?: 'User', _id: number, Name: string, email: string, Password: string, Contact: string, Adress: string, RegistrationNumber: number, createdAt: any } | null } };

export type CreateBillMutationVariables = Exact<{
  list: Array<InputProduct> | InputProduct;
  billInput: InputBill;
}>;


export type CreateBillMutation = { __typename?: 'Mutation', createBill: { __typename?: 'BillResponse', errors?: Array<{ __typename?: 'ErrorFiled', field: string, message: string }> | null, Bill?: { __typename?: 'Bill', _id: number, UserID: number, CustomerName: string, PdfName: string, CustomerId: number, Total: number, createdAt: any, updatedAt: any } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type BillsQueryVariables = Exact<{ [key: string]: never; }>;


export type BillsQuery = { __typename?: 'Query', Bills: Array<{ __typename?: 'Bill', _id: number, UserID: number, CustomerName: string, PdfName: string, CustomerId: number, Total: number, createdAt: any, updatedAt: any }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', Profile?: { __typename?: 'User', _id: number, Name: string, email: string, Password: string, Contact: string, Adress: string, RegistrationNumber: number, createdAt: any } | null };


export const LoginUserDocument = gql`
    mutation LoginUser($userNameAndPassword: UsernameAndPassword!) {
  loginUser(userNameAndPassword: $userNameAndPassword) {
    errors {
      field
      message
    }
    user {
      _id
      Name
      email
      Password
      Contact
      Adress
      RegistrationNumber
      createdAt
    }
  }
}
    `;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};
export const CreateUserDocument = gql`
    mutation createUser($userInput: InputUser!) {
  createUser(UserInput: $userInput) {
    errors {
      field
      message
    }
    user {
      _id
      Name
      email
      Password
      Contact
      Adress
      RegistrationNumber
      createdAt
    }
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const CreateBillDocument = gql`
    mutation CreateBill($list: [InputProduct!]!, $billInput: InputBill!) {
  createBill(List: $list, BillInput: $billInput) {
    errors {
      field
      message
    }
    Bill {
      _id
      UserID
      CustomerName
      PdfName
      CustomerId
      Total
      createdAt
      updatedAt
    }
  }
}
    `;

export function useCreateBillMutation() {
  return Urql.useMutation<CreateBillMutation, CreateBillMutationVariables>(CreateBillDocument);
};
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const BillsDocument = gql`
    query Bills {
  Bills {
    _id
    UserID
    CustomerName
    PdfName
    CustomerId
    Total
    createdAt
    updatedAt
  }
}
    `;

export function useBillsQuery(options?: Omit<Urql.UseQueryArgs<BillsQueryVariables>, 'query'>) {
  return Urql.useQuery<BillsQuery>({ query: BillsDocument, ...options });
};
export const ProfileDocument = gql`
    query Profile {
  Profile {
    _id
    Name
    email
    Password
    Contact
    Adress
    RegistrationNumber
    createdAt
  }
}
    `;

export function useProfileQuery(options?: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<ProfileQuery>({ query: ProfileDocument, ...options });
};