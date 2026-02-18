export const loginAdmin = async (credentials) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

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
