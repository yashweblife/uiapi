import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import List, { Item, ListFooter, ListHeader } from "./components/List/List";

function App() {
  const [routes, setRoutes] = useState<{ path: string; method: string; }[]>([]);
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const res = await fetch("/dest/routes")
    const data = await res.json()
    setRoutes(data)
    console.log(data);
  }
  const attemptSend = async (route: { path: string; method: string; }) => {
    try {
      const res = await fetch(route.path, {
        method: route.method
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Routes</h1>
      <ul>
        {routes.map((route) => (
          <List key={route.path}>
            <ListHeader title={route.path} />
            <Item>Method: {route.method}</Item>
            <ListFooter>
              <Button
                click={() => {
                  attemptSend(route)
                }}
              >
                Send
              </Button>
            </ListFooter>
          </List>
        ))}
      </ul>
    </div>
  )
}

export default App
