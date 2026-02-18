export const loginAdmin = async (credentials) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

 