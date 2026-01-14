const crypto = require('crypto')


let uuid = crypto.randomUUID()
const interval = setInterval(() => {
  const now = new Date()
  console.log(now.toISOString() + ': ' + uuid)
}, 5000)
