import "../styles/makePlayer.css";
import { useState } from "react";
import Axios from "axios";
import { Button} from 'react-bootstrap'

function MakePlayer() {
  const [name, setName] = useState("");  

  const [newName, setNewName] = useState(0);

  const [playerList, setPlayerList] = useState([]);

  const addplayer = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
    }).then(() => {
      setPlayerList([
        ...playerList,
        {
          name: name,
        },
      ]);
    });
  };

  const getplayers = () => {
    Axios.get("http://localhost:3001/player")
    .then((response) => {
      setPlayerList(response.data);
    });
  };

  const updatePlayerName = (id) => {
    Axios.put("http://localhost:3001/update", { name: newName, id: id }).then(
      (response) => {
        setPlayerList(
          playerList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteplayer = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setPlayerList(
        playerList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="MakePlayer">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Button onClick={addplayer}>Menambahkan player</Button>
      </div>
      <div className="players">
        <Button onClick={getplayers}>all players</Button>

        {playerList.map((val, key) => {
          return (
            <div className="player">
              <div>
                <h3>Name: {val.name}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Change Name to..."
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    updatePlayerName(val.id);
                  }}
                >
                  {" "}
                  Update
                </Button>

                <Button
                  bsStyle={'primary'}
                  onClick={() => {
                    deleteplayer(val.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MakePlayer;
