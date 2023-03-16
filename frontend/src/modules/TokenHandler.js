import Cookies from 'universal-cookie';

export function saveTokenData(user, token, role){
    const cookies = new Cookies();

    cookies.set('user', user, {path: '/'});
    cookies.set('token', token, {path: '/'});
    cookies.set('role', role, {path: '/'})
}

export function tempSaveTokenData(user, token, role) {
    const cookies = new Cookies();

    cookies.set('user', user, {path: '/', maxAge: 3600000});
    cookies.set('token', token, {path: '/', maxAge: 3600000});
    cookies.set('role', role, {path: '/', maxAge: 3600000});
}

export function clearTokenData() {
    const cookies = new Cookies();

    cookies.remove('user')
    cookies.remove('token')
    cookies.remove('role')
}

export function getTokenData(){
    const cookies = new Cookies();

    const user = cookies.get('user') ?? "";
    const token = cookies.get('token') ?? "";
    const role = cookies.get('role') ?? "";

    return {user, token, role}
}

export function verifyCredentials(){
    const data = getTokenData();

    return fetch(`http://127.0.0.1:8888/api/auth/verifytoken`,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: data.user, token: data.token, role: data.role})
    }).then(res => res.json())
}