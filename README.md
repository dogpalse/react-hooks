# Hooks
------
 리액트 v16.8에 도입된 기술로 함수형 컴포넌트에서도 상태 관리를 할 수 있게 해주는 기능을 제공한다.

 ### useState
 함수형 컴포넌트에서 가변적인 상태를 지닐 수 있게 해주는 Hook.

```javascript 
const [value, setValue] = useState(0);
```

- useState는 배열을 반환.  
- 배열의 첫 번째 원소는 상태값, 두 번째 원소는 상태를 설정하는 함수.
- 두 번째 원소 함수에 파라미터를 넣어서 호출하면 상태값에 반영되고 리렌더링.
- useState의 파라미터는 상태의 초기값.

### useEffect
리액트 컴포넌트가 렌더링될 때마다 특정 작업을 동작하게 해주는 Hook.  
클래스형 컴포넌트에서 componentDidMount와 componentDidUpdate와 비슷한 기능.
두 번째 파라미터에 따라 실행되는 방식이 다름.

```javascript
기본형
useEffect(() => { ... });

마운트될 때만
useEffect(() => { ...}, []);

특정 값이 업데이트될 때만
useEffect(() => { ... }, [value]);
```

### useReducer
더 다양한 상황에서 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook.
현재 상태와 업데이트를 하기 위한 새로운 값을 담은 액션을 전달 받아 새로운 상태를 반환.
리듀서 함수에서는 새로운 상태를 만들 때는 반드시 불변성을 지켜야함.

```javascript
const [state, dispatch] = useReducer(reducer, { ... });

function reducer(preState, action) {
    return ( ... );
}

action = {
    type: '...',
}
```
- useReducer의 첫 번째 파라미터는 리듀서 함수, 두 번째 파라미터는 state의 초기값.
- state와 dispatch를 받음.
- dispatch(action)은 액션을 발생시키는 함수.

### useMemo
함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있는 Hook

### useCallback
이벤트 핸들러 함수를 필요할 때만 생성.

```javascript
const onClick = useCallback(e => { ... }, [value]);
```
- 첫 번째 파라미터에는 생성하고 싶은 함수.
- 두 번째 파라미터에는 특정 데이터가 업데이트 될 깨만 실행 시키기 위한 조건.