export class Auth {
    username: string | undefined;
    password: string | undefined;
  
    constructor(username: string | undefined,password: string | undefined){
      this.username = username;
      this.password = password;
    }
  }