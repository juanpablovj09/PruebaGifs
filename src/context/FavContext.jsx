import React, { useContext, useState, useEffect } from "react";
import firebaseApp from "../firebase/firebaseConfig";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {useAuth} from '../context/AuthContext';

const firestore = getFirestore(firebaseApp);

const FavsContext = React.createContext()

export const useFavs = () => {
  return useContext(FavsContext)
}

export function FavsProvider({children}) {  
  const [favs, setFavs] = useState([]) 
  const [loading, setLoading] = useState(false)
  const {currentUser} = useAuth()

  const addFav = async(obj) => {
    const docuRef = doc(firestore, `favs/${currentUser.email}`)
    const consulta = await getDoc(docuRef);
    const arrayFavs = consulta.data().favs.filter(fav => fav.id === obj.id)
    if(arrayFavs.length > 0) return;
    
    const newArrayFavs = [
      ...favs,
      {
        id: obj.id,
        title: obj.title,
        url: obj.url
      }
    ]
    updateDoc(docuRef, { favs: [...newArrayFavs]})
    setFavs(newArrayFavs)
  }

  const removeFav = (id) => {
    const newArrayFavs = favs.filter(fav => fav.id !== id)
    const docuRef = doc(firestore, `favs/${currentUser.email}`)
    updateDoc(docuRef, { favs: [...newArrayFavs]})
    setFavs(newArrayFavs)
  }

  const fetchData = async(emailUser) => {
    setLoading(true)
    const docuRef = doc(firestore, `favs/${emailUser}`)
    const consulta = await getDoc(docuRef)

    if(consulta.exists()) {
      const infoDocu = consulta.data()
      return infoDocu.favs
    } else {
      await setDoc(docuRef, { favs: []})
      const consulta = await getDoc(docuRef)
      const infoDocu = consulta.data()
      return infoDocu.favs
    }
  }

  useEffect(() => {
    if(!currentUser) return
    async function data() {
      const data = await fetchData(currentUser.email);
      setFavs(data)
      setLoading(false)
    }
    data()
  }, [currentUser])

  const value = {
    favs,
    loading,
    addFav,
    removeFav
  }

  return (
    <FavsContext.Provider value={value}>
      {children}
    </FavsContext.Provider>
  )
}