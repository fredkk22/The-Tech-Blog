// const newCommentHandler = async (event) => {
//     event.preventDefault();
  
//     const content = document.querySelector('#comment-content').value.trim();
  
//     if (content) {
//       const response = await fetch(`/api/comments`, {
//         method: 'POST',
//         body: JSON.stringify({ content }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to add comment');
//       }
//     }
//   };
  
//   const updateCommentHandler = async (event) => {
//     event.preventDefault();
  
//     const comment = document.querySelector('#comment-content').value.trim();
  
//     if (comment) {
//       const response = await fetch(`/api/comments`, {
//         method: 'PUT',
//         body: JSON.stringify({ comment }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };

// document
//   .querySelector('.new-comment-form')
//   .addEventListener('submit', newCommentHandler);