import React, {useState, useEffect} from 'react'
import "./Arrays.css"



function Arrays() {
<<<<<<< HEAD
    const [array, setArray] = useState([9,8,7])

  
=======
    const [array, setArray] = useState([9])

>>>>>>> f67f9e2c14e0bd33ef36e8db9f2fa639761a309c
    function insertToArray(){
        console.log(array)
        setArray([...array, 1])
    }

    function deleteFromArray(){
        console.log(array)
        setArray(array.slice(0, array.length))
    }

<<<<<<< HEAD

=======
>>>>>>> f67f9e2c14e0bd33ef36e8db9f2fa639761a309c
    useEffect(() => {

    }, [array])


    return (
        <div>

            <div>
                {
                array.map(node => (
                    <div style = {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                         <ArrayNode key = {node} value = {node} />
                    </div>
                   
                ))
                }
            </div>

            <button onClick = {() => insertToArray()}>Insert</button>
            <button onClick = {() => deleteFromArray()}>Delete</button>
        
        </div>
    )
}

export default Arrays



export function ArrayNode({value}){ 
    return(
        <div className = "array-node">
            <p>{value}</p>
        </div>
    )
}
