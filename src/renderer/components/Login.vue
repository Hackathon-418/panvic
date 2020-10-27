<template>
  <button @click="authGitHub">LOGIN</button>
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/storage'
  import 'firebase/database'

  export default {
    name: 'Login',
    methods: {
      authGitHub () {
        // ログイン処理
        const provider = new firebase.auth.GithubAuthProvider()
        provider.addScope('repo')

        firebase.auth().signInWithPopup(provider).then(function (result) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const token = result.credential.accessToken
          console.log(token)
          // The signed-in user info.
          const user = result.user
          console.log(user)
        }).catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code
          console.log(errorCode)
          const errorMessage = error.message
          console.log(errorMessage)
          // The email of the user's account used.
          const email = error.email
          console.log(email)
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          console.log(credential)
          // ...
        })
      }
    }
  }
</script>

<style scoped>

</style>