"use client"

import { useState, useCallback } from "react"
import { View, FlatList, Text, StyleSheet, RefreshControl } from "react-native"
import { getBookmarks } from "../database/database"
import JobCard from "../components/JobCard"
import { useFocusEffect } from "@react-navigation/native"

const BookmarksScreen = ({ navigation }) => {
  const [bookmarks, setBookmarks] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const loadBookmarks = useCallback(() => {
    getBookmarks(setBookmarks)
  }, [])

  // Refresh bookmarks when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadBookmarks()
    }, [loadBookmarks]),
  )

  const onRefresh = () => {
    setRefreshing(true)
    loadBookmarks()
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        renderItem={({ item }) => (
          <JobCard job={item} onPress={() => navigation.navigate("JobDetails", { job: item })} />
        )}
        keyExtractor={(item, index) => `bookmark-${item.id}-${index}`}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Bookmarks Yet</Text>
            <Text style={styles.subText}>Jobs you bookmark will appear here</Text>
          </View>
        }
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 300,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    color: "#666",
    textAlign: "center",
  },
})

export default BookmarksScreen
