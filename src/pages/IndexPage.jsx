import SimpleForm from '../components/Forms/SimpleForm'
import AddRecentFiles from '../components/Banco/AddRecentFiles'
import PrintRecentFiles from "../components/Banco/PrintRecentFiles"
import GetApi from '../components/GetApi/GetApi'
import Test from "../components/Banco/Test"

function InitialPage() {
    return (
        <>
            <AddRecentFiles />
            <PrintRecentFiles />
            <GetApi url="http://localhost:8080/users" />
            <GetApi url="https://jsonplaceholder.typicode.com/todos/1" />
            {/* <Test /> */}
        </>
    )
}

export default InitialPage