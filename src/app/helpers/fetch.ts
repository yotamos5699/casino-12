const PermissionsListUrl =
  "https://script.google.com/macros/s/AKfycbw1oRlSbZFWu6VxyoHKjINhSZuhzHyHyLtoB1HqY3fbBI_3VN5lN4_1ve81MzNwl0IC/exec";

type User = {
  name: string;
  email: string;
  admin: boolean;
};
export const getPermissionsList = async (): Promise<User[]> => fetch(PermissionsListUrl).then((res) => res.json());
