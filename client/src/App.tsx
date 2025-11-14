import { useState, useEffect } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"


function App() {
  const [habits, setHabits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch('/api/habits');
        if (!response.ok) {
          throw new Error('Failed to fetch habits');
        }
        const data = await response.json();
        setHabits(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchHabits();
  }, []);

  return (
    <>
      <div style={{ marginTop: 32 }}>
        <h2>Habits from API</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <ul>
            {habits.map((habit, idx) => (
              <li key={habit.id || idx}>{habit.name || JSON.stringify(habit)}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App