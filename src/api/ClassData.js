export const addClass = async classData => {
    const res = await fetch('https://music-shcool-server.vercel.app/class', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(classData),
    })
  
    const data = await res.json()
    return data
  }