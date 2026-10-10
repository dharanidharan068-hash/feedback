function Warden({ feedback }) {
  const average = feedback.length
    ? (
        feedback.reduce((sum, item) => sum + item.rating, 0) /
        feedback.length
      ).toFixed(1)
    : "0.0";

  return (
    <main className="container">
      <h1>Warden Dashboard</h1>

      <div className="stats">
        <section className="card">
          <h2>{feedback.length}</h2>
          <p>Total Feedback</p>
        </section>

        <section className="card">
          <h2>{average}/5</h2>
          <p>Average Food Rating</p>
        </section>
      </div>

      <section className="card">
        <h2>Review Student Feedback</h2>

        {feedback.length === 0 ? (
          <p>No feedback available yet.</p>
        ) : (
          feedback.map((item) => (
            <article className="feedback-item" key={item.id}>
              <strong>{item.student}</strong>
              <p>
                Meal: {item.meal} | Rating: {item.rating}/5
              </p>
              <p>{item.comment}</p>
              <small>{item.date}</small>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default Warden;