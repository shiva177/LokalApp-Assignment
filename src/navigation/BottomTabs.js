import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { MaterialIcons } from "@expo/vector-icons"
import JobsScreen from "../screens/JobsScreen"
import BookmarksScreen from "../screens/BookmarksScreen"
import JobDetailsScreen from "../screens/JobDetailsScreen"

const Tab = createBottomTabNavigator()
const JobsStack = createStackNavigator()

// Stack navigator for Jobs tab to handle navigation to job details
function JobsStackScreen() {
  return (
    <JobsStack.Navigator>
      <JobsStack.Screen name="JobsList" component={JobsScreen} options={{ headerShown: false }} />
      <JobsStack.Screen name="JobDetails" component={JobDetailsScreen} options={{ title: "Job Details" }} />
    </JobsStack.Navigator>
  )
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === "Jobs") {
            iconName = "work"
          } else if (route.name === "Bookmarks") {
            iconName = "bookmark"
          }
          return <MaterialIcons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="Jobs" component={JobsStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
    </Tab.Navigator>
  )
}
