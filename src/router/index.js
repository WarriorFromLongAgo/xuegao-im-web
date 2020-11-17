import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/Auth'
import Chat from '@/components/Chat'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Notify from '@/components/Notify'
import Register from '@/components/Register'
import ResetPasswd from '@/components/ResetPasswd'

import Contacts from '@/components/medium/Contacts'
import Sessions from '@/components/medium/Sessions'
import Settings from '@/components/medium/Settings'

import AddContact from '@/components/right/AddContact'
import Contact from '@/components/right/Contact'
import Flow from '@/components/right/Flow'
import Me from '@/components/right/Me'
import NewContact from '@/components/right/NewContact'
import Security from '@/components/right/Security'
import SettingsDetails from '@/components/right/SettingsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/Auth',
      name: 'Auth',
      component: Auth,
      // hidden: true
    }, {
      path: '/Chat',
      name: 'Chat',
      // hidden: true,
      component: Chat
    }, {
      path: '/Login',
      name: 'Login',
      // hidden: true,
      component: Login
    }, {
      path: '/Notify',
      name: 'Notify',
      // hidden: true,
      component: Notify
    }, {
      path: '/Register',
      name: 'Register',
      // hidden: true,
      component: Register
    }, {
      path: '/ResetPasswd',
      name: 'ResetPasswd',
      // hidden: true,
      component: ResetPasswd
    }, {
      path: '/Contacts',
      name: 'Contacts',
      // hidden: true,
      component: Contacts
    }, {
      path: '/Sessions',
      name: 'Sessions',
      // hidden: true,
      component: Sessions
    }, {
      path: '/Settings',
      name: 'Settings',
      // hidden: true,
      component: Settings
    }, {
      path: '/AddContact',
      name: 'AddContact',
      // hidden: true,
      component: AddContact
    }, {
      path: '/Contact',
      name: 'Contact',
      // hidden: true,
      component: Contact
    }, {
      path: '/Flow',
      name: 'Flow',
      // hidden: true,
      component: Flow
    }, {
      path: '/Me',
      name: 'Me',
      // hidden: true,
      component: Me
    }, {
      path: '/NewContact',
      name: 'NewContact',
      // hidden: true,
      component: NewContact
    }, {
      path: '/Security',
      name: 'Security',
      // hidden: true,
      component: Security
    }, {
      path: '/SettingsDetails',
      name: 'SettingsDetails',
      // hidden: true,
      component: SettingsDetails
    }
  ]
})
