import React, { useEffect, useState } from 'react'
import CrudContext from './CrudContext'
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore'
import { fireDB } from '../firebase'
import { toast } from 'react-toastify'

const Mystate = (props) => {
    const [product, setproduct] = useState({
        name: "",
        price: "",
        size: "",
        collaction: "",
        image: "",
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-degit",
            year: "numeric"
        })
    })
    //fetch all the data

    const [data, setdata] = useState([])

    const getdata = () => {
        try {
            const q = query(collection(fireDB, "product"), orderBy("time"));
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productarray = [];
                QuerySnapshot.forEach
                    ((doc) => {
                        productarray.push({ ...doc.data(), id: doc.id });
                    })
                setdata(productarray);
            })

            return () => data;
        } catch (error) {
            toast.error("get all the data")
        }
    }

    useEffect(()=>{
        getdata()
    })
    return (
        <div>
            <CrudContext.Provider>
                {props.children}
            </CrudContext.Provider>
        </div>
    )
}

export default Mystate
