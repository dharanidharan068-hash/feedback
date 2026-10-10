function Admin({ menu, setMenu, feedback }) {
  function updateMeal(meal, value) {
    setMenu({ ...menu, [meal]: value });
  }

  return (
    <main className="container">
      <h1>Admin Dashboard</h1>

      <section className="card">
        <h2>Manage Daily Food Menu</h2>

        {Object.entries(menu).map(([meal, food]) => (
          <div key={meal} className="form-group">
            <label>
              {meal.charAt(0).toUpperCase() + meal.slice(1)}
            </label>

            <input
              value={food}
              onChange={(e) => updateMeal(meal, e.target.value)}
            />
          </div>
        ))}

        <p className="success">
          Menu changes are applied automatically.
        </p>
      </section>

      <section className="card">
        <h2>Student Feedback ({feedback.length})</h2>

        {feedback.length === 0 ? (
          <p>No feedback submitted yet.</p>
        ) : (
          feedback.map((item) => (
            <article className="feedback-item" key={item.id}>
              <strong>{item.student}</strong>
              <span> · {item.meal} · {item.rating}/5</span>
              <p>{item.comment}</p>
              <small>{item.date}</small>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default Admin;