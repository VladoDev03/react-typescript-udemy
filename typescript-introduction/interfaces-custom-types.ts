interface Credentials {
    email: string;
    password: string;
}

// interface Credentials {
//     mode: string
// }

let creds: Credentials;

creds = {
    email: 'test@test.test',
    password: '123abc'
}

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    username: string;
}

function login(credentials: Credentials) { }

login(creds)
login(new AuthCredentials())
