export async function createComplain(category,message) {
  const response = await fetch("http://localhost:5000/api/complaints", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category ,message}),
  });
  return response
}

export async function getAll(token) {
 const response = await fetch('http://localhost:5000/api/complaints', {
  headers: {
    'Authorization': `Bearer ${token}`,
  }
});
return await response.json()
}
