import Header from "../components/Header/Header"
import TopMenu from "../components/Menu/TopMenu"
import LongPoster from "../components/Poster/LongPoster"
import long_poster from '../images/long_poster.jpeg'
import SimpleForm from '../components/Forms/SimpleForm'
import AddRecentFiles from '../components/Banco/AddRecentFiles'

function InitialPage() {
    const electron = window.electron

    return (
        <>
            {/* <Header />
            <TopMenu />
            <LongPoster poster={long_poster} altPoster={"Poster do Overwatch"} /> */}
            {/* <p>To rodando aqui: {electron.homeDir()}</p> */}
            {/* <SimpleForm /> */}
            <AddRecentFiles />
        </>
    )
}

export default InitialPage