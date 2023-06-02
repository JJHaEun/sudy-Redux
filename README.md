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
