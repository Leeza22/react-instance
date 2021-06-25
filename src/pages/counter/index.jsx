import React, { memo, useState } from 'react'

export default memo(function index() {
  let [count, setCount] = useState(0)
  return (
    <div>
      计数器: {count} <br/>
      <button onClick={() => setCount(count + 1)}>增加</button><br/>
      <button onClick={() => setCount(count - 1)}>减少</button><br/>
    </div>
  )
})
