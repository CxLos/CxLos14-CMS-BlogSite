const updateBlog = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogsu/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace(`/api/blogs/${result.id}`);
      } else {
        alert('Failed to update blog');
      }
    }
    console.log('yay updates!')
  };

//   const updateBlog = async (event) => {
//     event.preventDefault();
  
//     const title = document.querySelector('#blog-title').value.trim();
//     const body = document.querySelector('#blog-body').value.trim();
  
//     if (title && body) {
//       const response = await fetch(`/api/blogsu/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ title, body }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         let result = await response.json();
//         document.location.replace(`/blogs/${result.id}`);
//         // document.location.replace(`/profile`);
//       } else {
//         alert('Failed to post blog');
//       }
//     }
//   };

  document.querySelector('.blog-up').addEventListener('click', updateBlog);
//   document.querySelector('#new-blog-form').addEventListener('submit', updateBlog);