import React, { useState, useEffect } from 'react'
import "./FindGames.css"
import { db } from "../firebase"
import store from "../Redux/index"
import firebase from "firebase"
import GameModal from "../GameModal/GameModal"
import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';



function FindGames() {
    const [games, setGames] = useState([])
    const [open, setOpen] = useState(false);
    const [modalGameInfo, setModalGameInfo] = useState(null)

    const handleClickOpen = (instance) => {
      setOpen(true)
      setModalGameInfo(instance)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    
    useEffect(() => {
        db.collection('current_games').onSnapshot(snapshot => {
            setGames(snapshot.docs.map(doc => doc))   
            snapshot.docs.map(doc => console.log(doc.id))   
        })

        // docRef.get().then((doc) => {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch((error) => {
        //     console.log("Error getting document:", error);
        // });

        // db.collection("current_games").where("max_players", ">", "0")
        //     .get()
        //     .then((querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
        //             // doc.data() is never undefined for query doc snapshots
        //             console.log(doc.id, " => ", doc.data());
        //             setGames([...games, doc.data()])
        //             console.log(games)
        //         });
        //     })
        //     .catch((error) => {
        //         console.log("Error getting documents: ", error);
        //     });

        // db.collection("current_games")
        //     .onSnapshot()
        //     .then((doc) => {
        //         console.log("Current data: ", doc.data());
        //         setGames([doc.data()])
        //     })
        //     .catch((err) => {
        //         console.log("Error: ", err)
        //     })
    }, [])


    return (
        <div>
            <div id = "game-style">
                {games.map((instance) => (
                    <div>
                        <div onClick={() => handleClickOpen(instance)} className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                   
                                    <div id="spanner">
                                        <h2><u>{instance.data().name}</u></h2>
                                    </div>

                                    <div id="non-spanner">
                                        <h3>Starting Amount: {instance.data().starting_amount} USD</h3>
                                        <h3>Duration: {instance.data().duration - 1} {instance.data().duration - 1 === 1 ? `week`: `weeks`}</h3>
                                        <h3>Start date: {instance.data().start_date}</h3>
                                    </div>
                            
                                    {/* <div id="non-spanner">
                                        <h3>Start date: {instance.data().start_date}</h3>
                                        <h3>End date: {instance.data().end_date}</h3>
                                    </div> */}

                                    <div id="spanner">                                 
                                        <h3>Players: {instance.data().player_count} / {instance.data().max_players}</h3>
                                    </div>

                                    {/* <h3 id = "id" value = {`${instance.id}`}>{instance.id}</h3> */}
                                </div>
                            </div>
                        </div>
                    </div>      
                ))
                } 
            </div>  
            <Dialog style = {{maxWidth: "100%"}} fullScreen open = {open}>
                <Toolbar style = {{maxWidth: "90%"}}> 
                    <IconButton edge="start" color="black" onClick={handleClose} aria-label="close">
                        <p>Go Back </p>
                    </IconButton>
                </Toolbar>
                <GameModal gameInfo={modalGameInfo} />
            </Dialog> 
        </div>
    )
}

export default FindGames