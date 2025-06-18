document.addEventListener('DOMContentLoaded', function() {
    // Example: Fetching news from a Headless CMS
    const fetchNews = async () => {
        try {
            // Replace with your Headless CMS API endpoint
            const response = await fetch('https://api.your-headless-cms.com/entries'); 
            const data = await response.json();

            // Process and display news
            const newsSegments = document.querySelectorAll('.news-segment .insight-tiles');
            newsSegments.forEach(segment => {
                // Logic to populate each segment with relevant articles
            });

        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    fetchNews();

    // Initialize GridStack for editor view
    // This would be loaded conditionally after an editor logs in
    if (isEditorLoggedIn()) { // isEditorLoggedIn() is a function you'd create
        var grid = GridStack.init();
        
        // Example of adding a new widget
        grid.addWidget({w: 2, h: 2, content: 'New Tile'});
    }
});

function isEditorLoggedIn() {
    // This function would check for the authentication token from your auth service
    return !!localStorage.getItem('authToken'); 
}
