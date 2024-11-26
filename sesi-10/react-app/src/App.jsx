import CounterClass from "./components/CounterClass"
import CounterFn from "./components/CounterFn"

function App() {

  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <CounterClass />
        <br />
        <CounterFn />
      </div>
      
  )
}

export default App
