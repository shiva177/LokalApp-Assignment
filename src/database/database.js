import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("bookmarks.db")

console.log("Database instance: ", db)
export const initDB = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS bookmarks (id INTEGER PRIMARY KEY AUTOINCREMENT, jobData TEXT);",
      [],
      () => console.log("Database Initialized"),
      (error) => console.log("Error initializing database:", error),
    )
  })
}

export const saveBookmark = (job) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO bookmarks (jobData) VALUES (?);",
      [JSON.stringify(job)],
      () => console.log("Job bookmarked"),
      (error) => console.log("Error saving bookmark:", error),
    )
  })
}

export const getBookmarks = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM bookmarks;",
      [],
      (_, { rows }) => callback(rows._array.map((row) => JSON.parse(row.jobData))),
      (error) => console.log("Error fetching bookmarks:", error),
    )
  })
}
