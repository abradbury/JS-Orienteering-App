// import * as types from '../mutations'

const state = {
  allClubs: JSON.parse('["loading data..."]')
}

const mutations = {
  updateAllClubs (state, payload) {
    state.allClubs = payload
  }
}

const actions = {
  getAllClubs (context) {
    return new Promise((resolve, reject) => {
      // This is a jQuery call, find a suitable library/method to make such calls
      // TODO: Fix this
      // get('/api?v=2/clubs/syo').then((response) => {
      get('http://localhost:3000/clubs').then((response) => {
        try {
          JSON.parse(response)

          console.log(response)
          context.commit('updateAllClubs', JSON.parse(response))
          resolve()
        } catch (error) {
          console.error('Returned data is not JSON')
          reject(Error(error))
        }
      }).catch((e) => console.error(e))
    })
  }
}

// From: https://developers.google.com/web/fundamentals/getting-started/primers/promises#promisifying_xmlhttprequest
function get (url) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest()
    req.open('GET', url)

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response)
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText))
      }
    }

    // Handle network errors
    req.onerror = function () {
      reject(Error('Network Error'))
    }

    // Make the request
    req.send()
  })
}

export default {
  state,
  actions,
  mutations
}
