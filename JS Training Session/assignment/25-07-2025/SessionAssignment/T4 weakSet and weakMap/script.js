// Task 4:
// Use WeakMap & WeakSet:

// Storing login metadata (timestamp, Role, etc.)

// Tracking which users have been processed (e.g., logged in)

let exampleUserMetaData = {
  userName: "Dipak",
  userRole: "Admin",
  isLoggedIn: false,
  lastLoggedIn: "16-07-2025",
  userDOB: "10-10-2003",
  longestSessionTime: "3 Days",
  userLocation: "Ahemdabad",
  userDevice: "iPhone 14",
};


//weak map
const userMetadataMap = new WeakMap();

userMetadataMap.set(exampleUserMetaData, {
  timestamp: new Date(),
  ipAddress: "192.0.0.0",
  browser: "Brave",
  role: exampleUserMetaData.userRole,
});

const processedUsersSet = new WeakSet();

processedUsersSet.add(exampleUserMetaData);

if (processedUsersSet.has(exampleUserMetaData)) {
  console.log("User already processed (logged in).");
  console.log("Metadata:", userMetadataMap.get(exampleUserMetaData));
} else {
  console.log("New user, processing...");
}