import { observable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
const axios = require('axios')

import makeApolloClient from '../utils/apollo'

const STORE_KEY = '@YAZARA'
// AsyncStorage.clear()

class Store {
  @observable theme = 'dark'

  constructor() {
    this.urlAuth = 'https://yazara-auth.herokuapp.com/'
    this.urlData = 'https://yazara.herokuapp.com/v1/graphql'
    this.token = null
    this.serviceData = null
    this.serviceAuth = null

    this.createServiceAuth()
  }

  async getData() {
    try {
      const data = await AsyncStorage.getItem(STORE_KEY)
      if (!data) return
      this.token = data.token
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
    this.serviceData = makeApolloClient(this.urlData, this.token)
  }

  async register(payload) {
    try {
      const response = await this.serviceAuth.post('/auth/register', payload)
      console.log('register', response.data)
      return response
    } catch (e) {
      if (e.response) throw e.response.data
      throw e
    }
  }
}

export default new Store()
