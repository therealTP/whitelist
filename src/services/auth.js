import { get } from './fetch';

async const getCurrentUserAuth = () => {
    return await get('/users/auth');
}

export {
    getCurrentUserAuth
}