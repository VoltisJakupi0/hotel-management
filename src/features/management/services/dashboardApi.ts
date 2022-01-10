import { api } from "../../../services/api";
import { getAuthToken } from "../../auth/utils/localStorage";

export interface User {
  email: string;
  passwd: string;
  username: string;
  role_id: any;
  first_name: string;
  surname: string;
  personal_number: number;
}

export interface Status {
  status_name: string;
}

export interface Category {
  category_name: string;
}

export interface Invoice {
  category_name: string;
  total_price: number;
}

export interface Room {
  category_id: any;
  room_number: any;
  status_id: any;
  room_price: any;
}

export interface BookedRoom {
  room_id: number;
  entry_date: string;
  leave_date: string;
  client_personal_number: number;
  client_email: string;
  client_name: string;
  client_surname: string;
}

export const dashboardApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User, void>({
      query() {
        return {
          url: "users",
          method: "GET",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    addUser: build.mutation<any, User>({
      query(body) {
        return {
          url: "users",
          method: "POST",
          body,
        };
      },
    }),
    editUser: build.mutation<any, any>({
      query(body: any) {
        return {
          url: "users/" + body.id,
          method: "PATCH",
          body: body.payload,
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    deleteUser: build.mutation<any, any>({
      query(id) {
        return {
          url: `users/${id}`,
          method: "DELETE",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    getRooms: build.query<Room[], void>({
      query() {
        return {
          url: "rooms",
          method: "GET",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    addRoom: build.mutation<any, Room>({
      query(body) {
        return {
          url: "rooms",
          method: "POST",
          body,
        };
      },
    }),
    editRoom: build.mutation<any, any>({
      query(body: any) {
        return {
          url: "rooms/" + body.id,
          method: "PATCH",
          body: body.payload,
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    deleteRoom: build.mutation<any, any>({
      query(id) {
        return {
          url: `rooms/${id}`,
          method: "DELETE",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    getCategories: build.query<Category[], void>({
      query() {
        return {
          url: "category",
          method: "GET",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    addCategory: build.mutation<any, Category>({
      query(body) {
        return {
          url: "category",
          method: "POST",
          body,
        };
      },
    }),
    editCategory: build.mutation<any, any>({
      query(body: any) {
        return {
          url: "category/" + body.id,
          method: "PATCH",
          body: body.payload,
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    deleteCategory: build.mutation<any, any>({
      query(id) {
        return {
          url: `category/${id}`,
          method: "DELETE",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    getStatus: build.query<Status[], void>({
      query() {
        return {
          url: "status",
          method: "GET",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    addStatus: build.mutation<any, Status>({
      query(body) {
        return {
          url: "status",
          method: "POST",
          body,
        };
      },
    }),
    editStatus: build.mutation<any, any>({
      query(body: any) {
        return {
          url: "status/" + body.id,
          method: "PATCH",
          body: body.payload,
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    deleteStatus: build.mutation<any, any>({
      query(id) {
        return {
          url: `status/${id}`,
          method: "DELETE",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),

    getInvoices: build.query<Invoice[], void>({
      query() {
        return {
          url: "invoices",
          method: "GET",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    addInvoices: build.mutation<any, Invoice>({
      query(body) {
        return {
          url: "invoices",
          method: "POST",
          body,
        };
      },
    }),
    editInvoices: build.mutation<any, any>({
      query(body: any) {
        return {
          url: "invoices/" + body.id,
          method: "PATCH",
          body: body.payload,
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    deleteInvoices: build.mutation<any, any>({
      query(id) {
        return {
          url: `invoices/${id}`,
          method: "DELETE",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),

    getBookedRooms: build.query<BookedRoom[], void>({
      query() {
        return {
          url: "bookedrooms",
          method: "GET",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    addBookedRoom: build.mutation<any, BookedRoom>({
      query(body) {
        return {
          url: "bookedrooms",
          method: "POST",
          body,
        };
      },
    }),
    editBookedRoom: build.mutation<any, any>({
      query(body: any) {
        return {
          url: "bookedrooms/" + body.id,
          method: "PATCH",
          body: body.payload,
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
    deleteBookedRoom: build.mutation<any, any>({
      query(id) {
        return {
          url: `bookedrooms/${id}`,
          method: "DELETE",
          // headers: {
          //   authorization: "Bearer " + token,
          // },
        };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useAddBookedRoomMutation,
  useGetBookedRoomsQuery,
  useEditBookedRoomMutation,
  useDeleteBookedRoomMutation,
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
  useGetInvoicesQuery,
  useAddInvoicesMutation,
  useEditInvoicesMutation,
  useDeleteInvoicesMutation,
  useGetRoomsQuery,
  useAddRoomMutation,
  useEditRoomMutation,
  useDeleteRoomMutation,
  useGetStatusQuery,
  useAddStatusMutation,
  useEditStatusMutation,
  useDeleteStatusMutation,
} = dashboardApi;
