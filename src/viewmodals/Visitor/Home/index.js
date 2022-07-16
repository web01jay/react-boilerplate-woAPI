import { useState } from "react"
import { useNavigate } from "react-router-dom";

const HomeViewModal = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const navigateAbout = () => {
        setLoading(true)
        navigate('/about')
        setLoading(false)
    }

    return { navigateAbout, loading }

}
export default HomeViewModal