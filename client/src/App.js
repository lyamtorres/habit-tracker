
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [frequency, setFrequency] = useState("");
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState(null);

  // Fetch habits from API
  const fetchHabits = () => {
    setLoading(true);
    fetch('http://localhost:5031/api/habits')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  // Handle form submit
  const handleAddHabit = (e) => {
    e.preventDefault();
    setAdding(true);
    setAddError(null);
    // Always start completedDays at 0
    const newHabit = {
      name,
      category,
      frequency,
      completedDays: 0
    };
    fetch('http://localhost:5031/api/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newHabit)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add habit');
        return res.json();
      })
      .then(() => {
        setName("");
        setCategory("");
        setFrequency("");
        fetchHabits();
      })
      .catch((err) => {
        setAddError(err.message);
      })
      .finally(() => setAdding(false));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Habits</h2>
        {/* Add Habit Form */}
        <form onSubmit={handleAddHabit} style={{ marginBottom: 24 }}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{ marginRight: 8 }}
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
              style={{ marginRight: 8 }}
            />
            <input
              type="text"
              placeholder="Frequency (e.g. daily, weekly)"
              value={frequency}
              onChange={e => setFrequency(e.target.value)}
              required
              style={{ marginRight: 8 }}
            />
            <button type="submit" disabled={adding}>
              {adding ? 'Adding...' : 'Add Habit'}
            </button>
          </div>
          {addError && <p style={{ color: 'red' }}>Error: {addError}</p>}
        </form>
        {/* List of Habits */}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <strong>{habit.name}</strong> | Category: {habit.category} | Frequency: {habit.frequency} | Completed Days: {habit.completedDays}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
