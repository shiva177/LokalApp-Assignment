"use client"

import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabs from "./src/navigation/BottomTabs"
import { initDB } from "./src/database/database"

const App = () => {
  // Initialize database when app starts
  useEffect(() => {
    initDB()
  }, [])

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  )
}

export default App
