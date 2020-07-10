import DashboardLayout from '@/layout/DashboardLayout'
import NormalLayout from '@/layout/NormalLayout'
import AuthLayout from '@/layout/AuthLayout'


const routes = [
    {
        path: '/',
        redirect: 'home',
        component: NormalLayout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home/Home'),
                meta: { requiresAuth: true },
            },
            // {
            //     path: '/profile-groups/new',
            //     name: 'New Profile Group',
            //     component: () => import('@/components/ProfileGroups/NewProfileGroup'),
            //     meta: { requiresAuth: true },
            // },
            // {
            //     path: '/profile-groups/:id/edit',
            //     name: 'Edit Profile Group',
            //     component: () => import('@/components/ProfileGroups/EditProfileGroup'),
            //     meta: { requiresAuth: true },
            // },
            // {
            //     path: '/calendars/new',
            //     name: 'New Calendar',
            //     component: () => import('@/components/Calendars/NewCalendar'),
            //     meta: { requiresAuth: true },
            // },
            {
                path: '/quotations/new',
                name: 'New Quotation',
                component: () => import('@/components/Quotations/NewQuotation'),
                meta: { requiresAuth: true },
            },
            {
                path: '/quotations/:id/edit',
                name: 'Edit Quotation',
                component: () => import('@/components/Quotations/EditQuotation'),
                meta: { requiresAuth: true },
            },
            {
                path: '/products/new',
                name: 'New Product',
                component: () => import('@/components/Products/NewProduct'),
                meta: { requiresAuth: true },
            },
            {
                path: '/products/:id/edit',
                name: 'Edit Product',
                component: () => import('@/components/Products/EditProduct'),
                meta: { requiresAuth: true },
            },
            {
                path: '/companies/new',
                name: 'New Company',
                component: () => import('@/components/Companies/NewCompany'),
                meta: { requiresAuth: true },
            },
            {
                path: '/companies/:id/edit',
                name: 'Edit Company',
                component: () => import('@/components/Companies/EditCompany'),
                meta: { requiresAuth: true },
            },
        ]
    },
    {
        path: '/',
        redirect: 'login',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: () => import(/* webpackChunkName: "demo" */ '@/views/Login.vue'),
                requiresVisitor: true
            },
            {
                path: 'logout',
                name: 'logout',
                component: () => import('@/views/auth/Logout'),
                requiresAuth: true
            },
            {
                path: '/register',
                name: 'register',
                component: () => import(/* webpackChunkName: "demo" */ '@/views/Register.vue'),
                requiresVisitor: true
            }
        ]
    }
]

export default routes