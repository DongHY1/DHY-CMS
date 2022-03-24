import axiosRequest from '../index'
const LoginAPI = {
    AccountLogin:'/login',
    LoginUserInfo:'/users/',
    UserMenus:'/role/'
}
export function requestAccountLogin(account){
    return axiosRequest.post({
        url:LoginAPI.AccountLogin,
        data:account
    })
}
export function requestUserInfoById(id){
    return axiosRequest.get({
        url:LoginAPI.LoginUserInfo+id
    })
}
export function requestUserMenusByRoleId(id){
    return axiosRequest.get({
        url:LoginAPI.UserMenus+id+'/menu'
    })
}