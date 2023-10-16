import { useContext } from "react"
import { Authcontext } from "../context/AuthContext"

export function useAuth() {
    return useContext(Authcontext)
}