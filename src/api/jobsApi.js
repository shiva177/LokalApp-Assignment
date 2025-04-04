import axios from "axios"

const BASE_URL = "https://testapi.getlokalapp.com/common/jobs?page=1"

export const fetchJobs = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}`)
    if (!response.data) {
      throw new Error("No data received from API")
    }
    return response.data || []
  } catch (error) {
    console.error("Error fetching jobs:", error)
    throw error // Re-throw to handle in the component
  }
}
