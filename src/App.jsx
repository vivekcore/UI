import ReactDOM from "react-dom/client"
import MyPage from "./components";
import "./style.css"
function App(){
    return(
        <>
            <MyPage></MyPage>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)