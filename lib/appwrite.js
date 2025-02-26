import { Account, Client, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.zerobytes.trial-app",
  projectId: "67bf278f002396aae4ca",
  databaseId: "67bf2a02002120fa0b26",
  userCollectionId: "67bf2a2b002b36e3c09e",
  videoCollectionId: "67bf2a6e002200a36902",
  storageId: "67bf2d8a002f8d986e58",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
