import React from "react";
import SongList from "./SongList"

const ReduxApp = () => {
  return <div className="ui container grid">
    <div className="ui row">
      <div className="column eight wide">
      <SongList/>
      </div>
    </div>
  </div>
}


export default ReduxApp;