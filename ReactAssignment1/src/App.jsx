import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Footer from "./components/Footer";

function App() {
  const users = [
    { name: "Arpit", age: 24 },
    { name: "Drake", age: 25 },
    { name: "Sam", age: 28 },
    { name: "Sudhir", age: 24 },
    { name: "King", age: 22 },
    { name: "Cena", age: 25 },
    { name: "Rani", age: 28 },
    { name: "Ripley", age: 24 }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-blue-100">
      <Header />
      <main className="flex-grow">
        <UserList users={users} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
