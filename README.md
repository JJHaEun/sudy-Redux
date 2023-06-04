# sudy-Redux

Redux 학습용

- 단순히 html,js css만을 사용한 방법

하나를 클릭했을때 다른 부품을 변화시키는 코드를 작성해 보았다.

```js
document.getElementById("component_green").style.backgroundColor = "green";
document.getElementById("component_red").style.backgroundColor = "green";
```

green이라는 이름의 상자의 버튼을 클릭시 red라는 상자도 똑같이 green으로 바뀌고 반대로 red를 클릭하면 green상자도 red색으로 바뀌는 코드를 작성해보았다.
보다시피 각 개수에 따라 한 줄 씩 늘어났다.

만약 이 코드가 단순한 한 줄이 아니라 매우 복잡한 코드이고 각기 부품들간 어떠한 특별한 관계에 의해 나름 고유한 특성을 가지고, 부픔이 만약 엄청 많다면,
우리가 신경써야하는 코드는 더 많아진다.

---

## Redux 사용.

````js
 function reducer(state, action) {
        // 기존의 state값, 그리고 action값을 받음.
        if (state === undefined) {
          // state값이 정의되지 않은 최초일때(초기화를 위해 최초로 실행되는 reducer에 대한 호출.)
          return { color: "yellow" }; // 기본값 설정. 이렇게 return 해주면
        }
 }
      const store = Redux.createStore(reducer); // redux의 store에 초기값이 지정되고
      console.log(store.getState()); // store에 저장된 state값 가져옴!!
      const state = store.getState();
      ```
````

store을 만든다. 이때 reducer라는 것을 통해 만들게 된다.
이 reducer에는 이전 state값과 action이 매개변수로 들어간다.
만약 state가 undefined라면 state가 정해져있지 않은 초기상태라는 의미이다.
return을 해주면 기본값이 설정이되면서 redux store에 초기값이 지정이 되고, getState() 를 사용하면 값을 꺼내올 수 있다.

---

### state 변경

state를 변경하기 위해서는 action이라는 것을 만들어야 한다.
이것을 dispatch()에 전달하면 dispatch는 reducer을 호출하는데 이전 state값과 action의 값을 동시에 주고, 우리가 작성하는 reducer함수가 이것을 분석하여 state의 최종적인 값을 return해주면된다.

>

```js
store.dispatch({ type: "Change_Color", color: "red" });
```

store에 dispatch를 호출하며 객체를 주는데 , 여기 객체에서 가장 중요한 프로퍼티는 type이라는 것이다.(반드시 있어야함.)
type:"타입이름",변경할 state값 // 얘네가 action부분에 들어갈 것.

state가 바뀌면 render가 통보받아 그때마다 state값을 가져와서 화면에 그려준다.

>

````js
function reducer(state, action) {
        console.log(state, action);
        let newState;
        if (state === undefined) {
          // state값이 정의되지 않은 최초일때(초기화를 위해 최초로 실행되는 reducer에 대한 호출.)
          return { color: "yellow" }; // 기본값 설정. 이렇게 return 해주면
        }

        if (action.type === "CHANGE_COLOR") {
          newState = Object.assign({}, state, { color: action.color }); // 객체 복제 첫번째 인자는 반드시 빈객체, 그 다음 인자로는 빈객체에 복제할 속성을 가진 객체, 그다음도...
          // 그럼 하나의 객체에 속성들이 복제되어 들어감(state라는 객체=> {color:"yellow"} 같은 키면 덮어쓰기됨.)
          // 복제해서 그 결과를 return해야
          // redux의 시간여행등의 기능들을 최대한으로 활용이 가능하다.
        }
        return newState; // 변경된 값 return
        console.log(newState);
      }

      const store = Redux.createStore(reducer); // redux의 store에 초기값이 지정되고
      // console.log(store.getState()); // store에 저장된 state값 가져옴!!

      function red() {
        const state = store.getState(); //state가져오기
        document.querySelector("#red").innerHTML = `
                      <div class="container" id="component_red" style="background-color:${state.color}">
                              <h1>red</h1>
                              <input type="button" value="fire" onclick="
                              store.dispatch({type:'CHANGE_COLOR',color:'red'})
                              "/>
                      </div>`;
      }
      // state값이 바뀔때마다 이 함수를 호출하게하려면
      // subscribe()에 render를 등록해 놓으면 됨.
      store.subscribe(red); // 즉, state값이 바뀔때마다 red함수 호출(ui에 반영하기)
      red();

      function blue() {
        const state = store.getState(); //state가져오기
        document.querySelector("#blue").innerHTML = `
                      <div class="container" id="component_blue" style="background-color:${state.color}">
                              <h1>blue</h1>
                              <input type="button" value="fire" onclick="
                              store.dispatch({type:'CHANGE_COLOR',color:'blue'})
                              "/>
                      </div>`;
      }
      // state값이 바뀔때마다 이 함수를 호출하게하려면
      // subscribe()에 render를 등록해 놓으면 됨.
      store.subscribe(blue); // 즉, state값이 바뀔때마다 red함수 호출(ui에 반영하기)
      blue();

      function green() {
        const state = store.getState(); //state가져오기
        document.querySelector("#green").innerHTML = `
                      <div class="container" id="component_green" style="background-color:${state.color}">
                              <h1>green</h1>
                              <input type="button" value="fire" onclick="
                              store.dispatch({type:'CHANGE_COLOR',color:'green'})
                              "/>
                      </div>`;
      }
      // state값이 바뀔때마다 이 함수를 호출하게하려면
      // subscribe()에 render를 등록해 놓으면 됨.
      store.subscribe(green); // 즉, state값이 바뀔때마다 red함수 호출(ui에 반영하기)
      green(); // 처음에는 무조건 실행
      ```

      이렇게 같은 함수로 state를 변경해보았다.
      store.getState() 로 생성한 state에서 기존 값을 가져오고,
       store.dispatch({type:'CHANGE_COLOR',color:'green'})로 state 업데이트를 하고 이것은 reducer함수의 action으로 들어가게된다.
       그럼 action이 해당타입일경우에 기존state객체의 값을 복사하고, 이것을 action의 값으로 덮어씌우면 state가 바뀌는 형식이다.
````

그렇다면 redux를 사용하지 않았을때와 비교해보자.
사용하지 않았을 시,

red컴포넌트와 green컴포넌트 등 각 컴포넌트는 서로 밀접한 관계를 갖고 있어, 하나라도 없다면 에러를 발생시켰다.
그리고 새로운 컴포넌트를 추가할 경우, 모든 컴포넌트를 업데이트 해야했다.

그런데 redux를 사용하여 중앙집중적으로 상태를 관리하기에 각각의 부품들은 상태가 바뀌었음을 store에 dispatch하여 알려주고 그에따라서 자신이 어떻게 변화되어야 하는지를 알려준다.

```js
function green() {
  const state = store.getState(); //state가져오기
  document.querySelector("#green").innerHTML = `
                      <div class="container" id="component_green" style="background-color:${state.color}">
                              <h1>green</h1>
                              <input type="button" value="fire" onclick="
                              store.dispatch({type:'CHANGE_COLOR',color:'green'})
                              "/>
                      </div>`;
}
// state값이 바뀔때마다 이 함수를 호출하게하려면
// subscribe()에 render를 등록해 놓으면 됨.
store.subscribe(green); // 즉, state값이 바뀔때마다 red함수 호출(ui에 반영하기)
green(); // 처음에는 무조건 실행
```

요롷게.
그리고 이것을 `store.subscribe(green)` 이런식으로 store에 구독을 시켜놓으면 state가 바뀔때 마다 통보받기에 그때마다 자신의 모양을 바꿔줄 수 있다.
따라서 각 컴포넌트는 자신의 일에만 집중할 수 있어 서로간의 의존성을 낮출 수 있다.
