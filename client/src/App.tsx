import { useState, useEffect } from 'react'
import './App.css'
import Card from "@/components/card"
import Container from "@/components/container"



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
    <Container>
      {habits.map((habit, idx) => (
        <Card
          key={habit.id || idx}
          title={habit.name || `Habit ${idx + 1}`}
          description={habit.description || ''}
        />
      ))}
    </Container>
  );
}

export default App