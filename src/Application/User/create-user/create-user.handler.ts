import { User } from "@express-ddd/domain"
import { CreateUserRequest } from "./create-user.request"

export const createUser = ({username, firstName, lastName}: CreateUserRequest) => {
    return User.create(username, firstName, lastName);
}
