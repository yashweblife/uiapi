import { useEffect, useState } from "react";

function App() {
  const [routes, setRoutes] = useState<{ path: string; method: string;}[]>([]);
  useEffect(() => {
    getData();
  },[])
  const getData = async () => {
    const res = await fetch("/dest/routes")
    const data = await res.json()
    setRoutes(data)
    console.log(data); 
  }
  return (
    <div>
      <h1>Routes</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <h2>{route.path}</h2>
            <p>Method: {route.method}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
