const updateBlog = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogsu/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update blog');
      }
    }
  };

  document.querySelector('.blog-up').addEventListener('click', updateBlog);