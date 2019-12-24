import { observable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
const axios = require('axios')

import makeApolloClient from '../utils/apollo'

const STORE_KEY = '@YAZARA'
// AsyncStorage.clear()

class Store {
  @observable theme = 'dark'
  @observable user = null

  constructor() {
    this.urlAuth = 'https://yazara-auth.herokuapp.com/'
    this.urlData = 'https://yazara.herokuapp.com/v1/graphql'
    this.serviceData = null
    this.serviceAuth = null
    this.createServiceAuth()
  }

  async getData() {
    try {
      const data = await AsyncStorage.getItem(STORE_KEY)
      if (!data) return
      this.user = data.user
      this.createServiceData()
    } catch (e) {
      console.log(e)
    }
  }

  createServiceAuth() {
    this.serviceAuth = axios.create({
      baseURL: this.urlAuth
    })
  }

  createServiceData() {
    this.serviceData = makeApolloClient(this.urlData, this.user.token)
  }

  async signUp(payload) {
    try {
      const { data } = await this.serviceAuth.post('/signup', payload)
      this.user = data
      this.createServiceData()
    } catch (e) {
      if (e.response) throw e.response.data
      throw e
    }
  }

  async logIn(payload) {
    try {
      const { data } = await this.serviceAuth.post('/login', payload)
      this.user = data
      this.createServiceData()
    } catch (e) {
      if (e.response) throw e.response.data
      throw e
    }
  }
}

export default new Store()
