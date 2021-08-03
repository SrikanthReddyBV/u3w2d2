function navbar() {
  return ` <div id="navbar">
      <h2>Food App</h2>
      <div id="options">
        <div>
          <input type="text" id="inp" oninput="suggetions()" />
          <!-- <div id="suggetion"></div> -->
          <button id="go" onclick="go()">Go</button>
        </div>
        <div>
          <button><a href="./recipeofday.html">Recipe of the day</a></button>
        </div>
        <div><button><a href="./latest.html">latest</a></button></div>
      </div>
      <div id="suggetion"></div>
    </div>
    <div id="cont"></div>`;
}

export default navbar;
