import React, { useEffect, useState } from 'react'

type Lesson = {
  id: number
  subject: string
  time: string
}

export default function App() {
  const [lessons, setLessons] = useState<Lesson[]>([])

  useEffect(() => {
    fetch('/api/schedule')
      .then((res) => res.json())
      .then(setLessons)
      .catch(console.error)
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto' }}>
      <h1>Расписание</h1>
      <ul>
        {lessons.map((item) => (
          <li key={item.id}>
            <strong>{item.time}</strong> — {item.subject}
          </li>
        ))}
      </ul>
    </main>
  )
}