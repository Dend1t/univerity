import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.get('/health', (c) => {
  return c.json({ status: 'ok' })
})

app.get('/schedule', (c) => {
  return c.json([
    { id: 1, subject: 'Алгоритмы и структуры данных', time: '09:00' },
    { id: 2, subject: 'Базы данных', time: '10:45' },
  ])
})

export default app