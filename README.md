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
