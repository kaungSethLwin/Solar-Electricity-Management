import { UserRole } from "./user-role";

  export class SignUpRequest {
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: UserRole;
    isActive: boolean;

    constructor(
      username: string,
      email: string,
      password: string,
      phoneNumber: string,
      role: UserRole,
      isActive: boolean = false,
    ) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.phoneNumber = phoneNumber;
      this.role = role;
      this.isActive = isActive;
    }
  }

export { UserRole };
