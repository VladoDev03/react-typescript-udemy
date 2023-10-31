interface Admin {
    permissions: string[]
};

interface AppUser {
    username: string
}

interface AppAdmin extends Admin, AppUser { }

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    username: 'Me123abc'
}
