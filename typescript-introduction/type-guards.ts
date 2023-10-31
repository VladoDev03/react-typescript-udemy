type Role = 'admin' | 'user' | 'editor';

function performAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
        // ...
    }
}
