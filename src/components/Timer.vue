import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
  const now = new Date().toLocaleTimeString()
  let [time, setTime] = useState(now)

  function updateTime() {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div class="timer">{time}</div>
}

export default Timer