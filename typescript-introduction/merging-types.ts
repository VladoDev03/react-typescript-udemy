type Admin = {
    permissions: string[]
};

type AppUser = {
    username: string
}

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    username: 'Me123abc'
}
