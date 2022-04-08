import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged

} from 'firebase/auth'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function signup(auth, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = { currentUser, signup, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}