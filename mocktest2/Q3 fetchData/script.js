const postsContainer = document.getElementById('posts-container');

// Function to fetch data from the JSON Placeholder API
async function fetchData() {
  try {
    // Display skeleton loader while data is being fetched
    postsContainer.innerHTML = generateSkeletonLoader(50);

    // Fetch data from the JSON Placeholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Clear the skeleton loader
    postsContainer.innerHTML = '';

    // Display the fetched data
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post-container');

      const titleElement = document.createElement('h3');
      titleElement.classList.add('post-title');
      titleElement.textContent = post.title;

      const bodyElement = document.createElement('p');
      bodyElement.textContent = post.body;

      postElement.appendChild(titleElement);
      postElement.appendChild(bodyElement);

      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.log('Error fetching data:', error); 
    postsContainer.innerHTML = 'Error fetching data';
  }
}

// Function to generate skeleton loader HTML
function generateSkeletonLoader(count) {
  let skeletonHTML = '';
  for (let i = 0; i < count; i++) {
    skeletonHTML += '<div class="skeleton-loader"></div>';
  }
  return skeletonHTML;
}

// Call the fetchData function to initiate the data fetching
fetchData();
