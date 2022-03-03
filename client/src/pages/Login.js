import "../styles/makePlayer.css";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap'

function Login() {
  const [name, setName] = useState("");

  const [newName, setNewName] = useState(0);

  const [playerList, setPlayerList] = useState([]);

  const [inputan, setInputan] = useState("");

  const getplayers = () => {
    Axios.get("http://localhost:3001/player").then((response) => {
      setPlayerList(response.data);
    });
  };

  function getData(val){
    setInputan(val.target.value);  
    console.log(val.target.value + " <> " + val.name )
    //get every name from playerList state
    // console.log(playerList)
    playerList.map((val) => {
        console.log(inputan + " <a> " + val.name )
        if(val.name === inputan){
            window.location = "/quiz";
        }
        return 0;
    })
  }



  return (
    <div className="MakePlayer">
      <div className="players">
        <Button onClick={getplayers}>Click Saya dulu!</Button>

        {playerList.map((val, key) => {
          return (
                <h3>Player: {val.name}</h3>
          );
        })}

        <div className="information">
          <label>Anda Ingin login sebagai Player mana?</label>
          <h3>{inputan}</h3>
            <input type="text" onChange={getData}/>
            <Link to="/makePlayer"><Button>Menambahkan Player!</Button></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
