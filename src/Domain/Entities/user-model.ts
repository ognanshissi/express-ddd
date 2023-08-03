import {BaseEntity} from "./base.entity";


export class User extends BaseEntity<string>{
    readonly username!: string;
    readonly firstName!: string;
    readonly lastName!: string;
    readonly isRoot!: boolean;

    readonly birthDate!: Date;

    private constructor(
        username: string, firstName: string, lastName: string
    ) {
        super();
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isRoot = false;
    }

    /**
     * Create user factory
     */
    public static create(username: string, firstName: string, lastName: string): User {
        return  new User(username, firstName, lastName);
    }

    /**
     * Create Admin
     * @param username
     * @param firstName
     * @param lastName
     */
    public static createAdmin(username: string, firstName: string, lastName: string): User {
        const user = new User(username, firstName, lastName);
        // this.isRoot = true;
        return user;
    }
}
