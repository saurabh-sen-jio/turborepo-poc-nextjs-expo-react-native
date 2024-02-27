import * as http from "http";

// Function to check if the host is up
// Returns a Promise that resolves to a boolean indicating whether the host is up
function isHostUp(url: string): Promise<boolean> {
  return new Promise(resolve => {
    // Send a GET request to the specified URL
    http.get(url, () => resolve(true))
      // Handle errors during the request
      .on("error", () => resolve(false));
  });
}

// Async function to wait for the server to be up
export async function waitForServerUp(url: string) {
  console.log("Local server: Waiting");
  // Wait for the host to be up by awaiting the result of 'isHostUp'
  await isHostUp(url);
  console.log("Local server: Up");
}
