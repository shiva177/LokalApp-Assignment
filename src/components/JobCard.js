import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const JobCard = ({ job, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{job.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>📍 {job.location}</Text>
        <Text style={styles.detail}>💰 {job.salary}</Text>
        <Text style={styles.detail}>📞 {job.phone}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailsContainer: {
    gap: 4,
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
})

export default JobCard

