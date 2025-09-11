import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import List, { Item, ListHeader } from "./components/List/List";
type FetchMethod = 'get' | 'put' | 'post' | 'delete'
function assertMethodIntoColors(method: FetchMethod) {
  let output = '';
  switch (method) {
    case 'get':
      output = 'green'
      break;
    case 'put':
      output = 'yellow'
      break;
    case 'post':
      output = 'blue'
      break;
    case 'delete':
      output = 'red'
      break;
  }
  return output
}
function App() {
  const [routes, setRoutes] = useState<{ path: string; method: FetchMethod }[]>([]);
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const res = await fetch("/dest/routes")
    const data = await res.json()
    setRoutes(data)
    console.log(data);
  }
  const attemptSend = async (route: { path: string; method: FetchMethod; }) => {
    try {
      const res = await fetch(route.path, {
        method: route.method
      })
      const data = await res.json()
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <List>
        <ListHeader title={"Routes"} />
        {routes.map((route) => (
          <Item>
            <span style={{
              backgroundColor: assertMethodIntoColors(route.method),
              padding: '0.5em 2em',
              borderRadius: '0.5em'
            }}>{route.method.toUpperCase()}</span>
            <span
              style={{
                padding: '0.5em 2em',
                borderRadius: '0.5em',
                marginLeft: '1em',
                boxShadow: '0 0 5px rgb(200,200,200)',
                textAlign: 'left'
              }}
            >{route.path}</span>
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
