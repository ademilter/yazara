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
    this.urlGraphql = 'https://yazara.herokuapp.com/v1/graphql'
    this.token = null
    this.client = null
  }

  async getData() {
    try {
      const data = await AsyncStorage.getItem(STORE_KEY)
      if (!data) return
      this.token = data.token
      this.createClient()
    } catch (e) {
      console.log(e)
    }
  }

  createClient() {
    this.client = makeApolloClient(this.urlGraphql, this.token)
  }

  // async register(payload) {
  //   try {
  //     const response = await this.api.post('/auth/register', payload)
  //     console.log('register', response.data)
  //     return response
  //   } catch (e) {
  //     if (e.response) throw e.response.data
  //     throw e
  //   }
  // }
}

export default new Store()
