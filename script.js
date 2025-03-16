 
        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.getElementById('navMenu').classList.toggle('active');
        });
        
        // Search form handling
        document.getElementById('search-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const location = document.getElementById('location').value;
            const budget = document.getElementById('budget').value;
            const amenities = document.getElementById('amenities').value;
            
            // You would typically handle this with backend integration
            // For now, let's redirect to the rooms page with query parameters
            window.location.href = `rooms.html?location=${encodeURIComponent(location)}&budget=${encodeURIComponent(budget)}&amenities=${encodeURIComponent(amenities)}`;
        });
    
