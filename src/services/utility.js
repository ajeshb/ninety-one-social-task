const users = [
    {
        username: 'admin',
        password: 'admin@123',
        key: 'dd05a445-701b-4297-9f74-55a682811780'
    }, {
        username: 'user',
        password: 'user@123',
        key: 'b4aeb1ae-2f5e-41e5-9d9e-bb4ac6d7df90'
    }
]
export const validateUser = (username, password) => {
    const selectedUser = users.find(user => user.username === username && user.password === password)
    if(selectedUser) {
        return { isValid: true, key: selectedUser.key}
    } else {
        return { isValid: false }
    }
}