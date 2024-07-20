// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create a <ul> element to hold the list of users
    const userList = document.createElement("ul");

    // Loop through the users and create <li> elements for each user
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the <ul> to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle any errors during the fetch operation
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Invoke the function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
