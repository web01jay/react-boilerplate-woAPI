import { useState } from "react"

const AppViewModal = () => {

    const [loading, setLoading] = useState(true)

    const localData = localStorage.getItem("userData")

    setLoading(false)

    return { userDetails: localData, loading }

}

export default AppViewModal