import { Text, TouchableOpacity, StyleSheet } from "react-native"

const BookmarkCard = ({ job, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(job)}>
      <Text style={styles.title}>{job.title}</Text>
      <Text>📍 {job.location}</Text>
      <Text>💰 {job.salary}</Text>
      <Text>📞 {job.phone}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: { padding: 16, margin: 10, backgroundColor: "white", borderRadius: 10, elevation: 3 },
  title: { fontSize: 18, fontWeight: "bold" },
})

export default BookmarkCard

