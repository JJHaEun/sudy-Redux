const onClickChangeComponentBackGround = () => {
  document.getElementById("component_red").style.backgroundColor = "red";
  document.getElementById("component_green").style.backgroundColor = "red";
};

function red() {
  document.querySelector("#red").innerHTML = `
                    <div class="container" id="component_red">
                            <h1>red</h1>
                            <input type="button" value="fire" onclick="onClickChangeComponentBackGround()"/>
                    </div>`;
}
red();

function green() {
  document.querySelector("#green").innerHTML = `
                      <div class="container" id="component_green">
                              <h1>green</h1>
                              <input type="button" value="fire" onclick="
                              document.getElementById('component_green').style.backgroundColor = 'green'
                              document.getElementById('component_red').style.backgroundColor = 'green';

                              "/>
                      </div>`;
}
green();
