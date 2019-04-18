import Vue from 'vue'
import Router from 'vue-router'
import Customers from './../components/Customers'
import About from './../components/About'
import AddUser from './../components/AddUser'
import CustomerDetails from './../components/CustomerDetails'
import EditCustomer from './../components/EditCustomer'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'customers',
            component: Customers
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/addUser',
            name: 'addUser',
            component: AddUser
        },
        {
            path: '/customers/:id',
            name: 'customerDetails',
            component: CustomerDetails
        }
        ,
        {
            path: '/editCustomer/:id',
            name: 'editCustomer',
            component: EditCustomer
        }
    ]
})
