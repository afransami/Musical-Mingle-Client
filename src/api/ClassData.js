export const addClass = async classData => {
    const res = await fetch('http://localhost:5000/class', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(classData),
    })
  
    const data = await res.json()
    return data
  }