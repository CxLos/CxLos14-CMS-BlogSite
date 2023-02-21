// Create new blog
const newBlogPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const body = document.querySelector('#blog-body').value.trim();

  if (title && body) {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      let result = await response.json();
      document.location.replace(`/blogs/${result.id}`);
      // document.location.replace(`/profile`);
    } else {
      alert('Failed to post blog');
    }
  }
};

document.querySelector('#new-blog-form').addEventListener('submit', newBlogPost);