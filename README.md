# Hacker News Reader Challenge

Create a React application that allows users to browse and search Hacker News posts using the Hacker News API. The application should have the following features:

## Requirements:

1. Post Retrieval and Pagination:
   - Fetch posts from the Hacker News API: https://hn.algolia.com/api/v1/search
   - Implement pagination to load 20 posts per page
   - Wire up the "Previous" and "Next" buttons to navigate between pages

2. Search Functionality:
   - Wire up the search bar to allows users to search for specific posts
   - Use the search API endpoint: http://hn.algolia.com/api/v1/search?query=...
   - Implement debounce on the search input to limit API calls

3. Post Display:
   - For each post, display the title, author, number of points, and number of comments
   - Make the title clickable, linking to the original article URL

4. Styling:
   - Create a clean, responsive layout
   - Use styled-components, or your preferred styling method

5. Loading States:
   - Show loading indicators while fetching data

6. Error Handling:
   - Implement proper error handling for API requests
   - Display user-friendly error messages
