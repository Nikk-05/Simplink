import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Routes
import url from '../Routes/url.routes'
app.route('api/v1/url/', url)
app.route('', url)

export default app
