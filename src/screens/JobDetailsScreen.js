"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native"
import { saveBookmark } from "../database/database"

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params
  const [bookmarked, setBookmarked] = useState(false)

  const handleBookmark = () => {
    try {
      saveBookmark(job)
      setBookmarked(true)
      Alert.alert("Success", "Job has been bookmarked!")
    } catch (error) {
      Alert.alert("Error", "Failed to bookmark job. Please try again.")
      console.error("Error bookmarking job:", error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{job.title}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.sectionContent}>📍 {job.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Salary</Text>
          <Text style={styles.sectionContent}>💰 {job.salary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.sectionContent}>📞 {job.phone}</Text>
        </View>

        {!bookmarked ? (
          <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmark}>
            <Text style={styles.bookmarkButtonText}>Bookmark Job</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.bookmarkedContainer}>
            <Text style={styles.bookmarkedText}>✓ Job Bookmarked</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    margin: 16,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  sectionContent: {
    fontSize: 18,
  },
  bookmarkButton: {
    backgroundColor: "#4a80f5",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  bookmarkButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  bookmarkedContainer: {
    backgroundColor: "#e6f0e6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  bookmarkedText: {
    color: "#2e7d32",
    fontWeight: "bold",
    fontSize: 16,
  },
})

export default JobDetailsScreen

