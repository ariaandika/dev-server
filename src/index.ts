
const server = Bun.serve({
  async fetch(req, server) {
    const u = new URL(req.url)
      
    if (u.pathname.startsWith('/api')) {
      return new Response(JSON.stringify(
        {
          nice: 'api',
          version: (await Bun.file('package.json').json()).version }
      ))
    }
    return new Response(Bun.file('src/index.html'))
  }
})

console.log(`Environment: ${process.env.NODE_ENV ?? 'development'}`)
console.log(`use SIGINT to gracefully shutdown`)
console.log(`listening in http://localhost:${process.env.PORT || 3000}...`)

process.on('SIGINT',e => {
  console.log('Shutting down...')
  server.stop()
})

