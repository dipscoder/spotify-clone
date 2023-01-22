import axios from "axios"

const instance = axios.create({
    baseURL: window.location.hostname === "localhost" ? "http://localhost:9000" : "https://spotify-clone-server.vercel.app/"
})

export default instance