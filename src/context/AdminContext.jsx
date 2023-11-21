import { createContext,  useState } from "react";
import axios from '../config/axios'

export const AdminContext = createContext()
export default function AdminContextProvider ({children}) {
    const [cancel,setCancel] = useState([])


    const hdl_confirm = async () => {
        await axios.patch("/admin/confirmOrder").then((res) => {
          setCancel(res.data.result);
          console.log(cancel)
          window.location.reload();
        });
      };
    const hdl_cancel = async () => {
        await axios.patch("/vendor/canceled").then((res) => {
            setCancel(res.data.result);
            window.location.reload();
          });
        };
    
      return(
        <AdminContext.Provider
        value = {{
            hdl_confirm,
            hdl_cancel,
            cancel
        }}
        >{children}</AdminContext.Provider>
      )

}