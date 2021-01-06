import { MenuSideBar } from './models/MenuDTO';

// tslint:disable-next-line: eofline
 export const API_ENDPOINT = 'http://localhost:51954/';
// export const API_ENDPOINT = 'http://localhost:8081/';
export const localStorageKey = 'access_token';
export const SITENAME = 'KOIAPP';


export const StatusCodeHttp: any = {
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404
};

// admin
export const MENUS_SIDEBAR: MenuSideBar[] = [
    {
        id: '11111',
        level: 1,
        title: 'Quản lý danh mục',
        path: '',
        icon: 'dashboard',
        open: true,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Tình trạng phòng',
                path: '', // home
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Danh mục',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Loại phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
            {
                id: '11111',
                level: 2,
                title: 'Chức vụ',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
            {
                id: '11111',
                level: 2,
                title: 'đ',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý đặt phòng',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Danh sách khách hàng',
                path: 'customer-management',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
            {
                id: '11111',
                level: 2,
                title: 'Danh sách phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý nhân viên',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Danh sách nhân viên',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý hệ thống',
        path: '',
        icon: 'team',
        open: true,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Tài khoản',
                path: '',
                icon: '',
                selected: false,
                disabled: false,
                open: false,

            },
            {
                id: '11111',
                level: 2,
                title: 'Vai trò',
                path: '',
                icon: '',
                selected: false,
                disabled: false,
                open: false,

            },
            // {
            //     id: '11111',
            //     level: 2,
            //     title: 'Quản lý API',
            //     path: 'api-management',
            //     icon: '',
            //     selected: false,
            //     disabled: false,
            //     open: false,

            // },
            {
                id: '11111',
                level: 2,
                title: 'Quyền truy cập',
                path: '',
                icon: '',
                selected: false,
                disabled: false,
                open: false,

            },
            // {
            //     id: '11111',
            //     level: 2,
            //     title: 'Menu hệ thống',
            //     path: 'menus-management',
            //     icon: '',
            //     selected: false,
            //     disabled: false,
            //     open: false,

            // },
        ]
    },
];

//Nhân viên 

export const MENUS_EMPLOYEE_SIDEBAR: MenuSideBar[] = [
    {
        id: '11111',
        level: 1,
        title: 'Dashboard',
        path: '',
        icon: 'dashboard',
        open: true,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Tình trạng phòng',
                path: 'qldatphong', // home
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Danh mục',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Loại phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
            {
                id: '11111',
                level: 2,
                title: 'Dịch vụ',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý đặt phòng',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Danh sách khách hàng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
            {
                id: '11111',
                level: 2,
                title: 'Danh sách phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
            {
                id: '11111',
                level: 2,
                title: 'Danh sách hóa đơn',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,

            },
        ]
    },
];

