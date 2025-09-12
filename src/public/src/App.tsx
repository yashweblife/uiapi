import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Table, { TableColumn, TableHeader, TableRow } from "./components/Table";
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
      <Table>
        <TableHeader headers={['Path', 'Method', 'Body', 'Send']} />
        {
          routes.map((route) => {
            return (
              <TableRow>
                <TableColumn>{route.path}</TableColumn>
                <TableColumn>
                  <p
                    style={{
                      backgroundColor: assertMethodIntoColors(route.method),
                      padding:'0.5em',
                    }}
                  >
                    {route.method}
                  </p>
                </TableColumn>
                {route.method == 'get' ? <TableColumn>
                  <Button click={() => { }}>
                    Attach Body?
                  </Button>
                </TableColumn> : null}
                <TableColumn>
                  <Button click={() => attemptSend(route)}>Send</Button>
                </TableColumn>
              </TableRow>
            )
          })
        }
      </Table>
    </div>
  )
}

export default App
