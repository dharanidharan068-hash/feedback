import { useState } from "react";

function Student({ user, menu, feedback, setFeedback }) {
  const [meal, setMeal] = useState("lunch");
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");

  function submitFeedback(e) {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      student: user.name,
      meal,
      rating: Number(rating),
      comment,
      date: new Date().toLocaleDateString()
    };

    setFeedback([newFeedback, ...feedback]);
    setComment("");
    alert("Feedback submitted successfully!");
  }

  return (
    <main className="container">
      <h1>Student Dashboard</h1>
      <p>Welcome, {user.name}!</p>

      <section className="card">
        <h2>Today's Food Menu</h2>

        {Object.entries(menu).map(([mealName, food]) => (
          <div className="menu-item" key={mealName}>
            <strong>
              {mealName.charAt(0).toUpperCase() +
                mealName.slice(1)}
            </strong>
            <span>{food || "Menu not updated"}</span>
          </div>
        ))}
      </section>

      <section className="card">
        <h2>Submit Food Feedback</h2>

        <form onSubmit={submitFeedback}>
          <label>Select Meal</label>
          <select
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="snacks">Snacks</option>
            <option value="dinner">Dinner</option>
          </select>

          <label>Food Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Very Poor</option>
          </select>

          <label>Comments</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your feedback..."
            required
          />

          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    </main>
  );
}

export default Student;