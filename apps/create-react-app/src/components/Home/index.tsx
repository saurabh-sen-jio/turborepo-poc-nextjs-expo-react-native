import { useState } from 'react'
import reactLogo from "../../assets/react.svg"
import viteLogo from '../../assets/vite.svg'

const Home = () => {

    const [count, setCount] = useState(0)

    const handleCheckPincode = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div style={{
              marginTop: "100px"  
            }}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleCheckPincode}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Home