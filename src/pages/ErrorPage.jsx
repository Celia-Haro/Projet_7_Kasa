import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <>
            <h1> {error.status}</h1>
            <p>Oups ! La page que vous avez demandé n'existe pas.</p>
        </>
    )

}