export const botFlow = {
    start: {
      message: "Nice! What is your role at Acme Corp?",
      options: ["Marketing", "Sales", "Support"],
      next: "role"
    },
    role: {
      message: "Our tool is great for teams! How many people are on yours?",
      next: "team"
    }
  };