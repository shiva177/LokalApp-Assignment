"use client"

import { useEffect, useState } from "react"
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from "react-native"
import { fetchJobs } from "../api/jobsApi"
import JobCard from "../components/JobCard"

const JobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    loadJobs()
  }, [page])

  const loadJobs = async () => {
    try {
      setLoading(true)
      setError(null)
      const newJobs = await fetchJobs(page)
      setJobs((prevJobs) => [...prevJobs, ...newJobs])
    } catch (err) {
      setError("Failed to load jobs. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    setPage(1)
    setJobs([])
    try {
      const newJobs = await fetchJobs(1)
      setJobs(newJobs)
    } catch (err) {
      setError("Failed to refresh jobs. Please try again.")
    } finally {
      setRefreshing(false)
    }
  }

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  if (error && jobs.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.retryText} onPress={loadJobs}>
          Tap to retry
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <JobCard job={item} onPress={() => navigation.navigate("JobDetails", { job: item })} />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => setPage((prevPage) => prevPage + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={
          !loading && (
            <View style={styles.centered}>
              <Text>No jobs available</Text>
            </View>
          )
        }
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  retryText: {
    color: "blue",
    fontSize: 16,
    textDecorationLine: "underline",
  },
})

export default JobsScreen
