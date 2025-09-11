import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import List, { Item, ListHeader } from "./components/List/List";

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
      <List>
        <ListHeader title={"Routes"} />
        {routes.map((route) => (
          <Item>Method: {route.method}
            <Button
              click={() => {
                attemptSend(route)
              }}
            >
              Send
            </Button>
          </Item>
        ))}
      </List>
    </div>
  )
}

export default App
