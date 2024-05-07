type UserType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<UserType>>(initialValues: T) {}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
