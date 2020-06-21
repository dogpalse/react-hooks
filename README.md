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
클랙스형 컴포넌트에서 componentDidMount와 componentDidUpdate와 비슷한 기능.

```javascript
기본형
useEffect(() => { ... });

Mount될 때만
useEffect(() => { ...}, []);

특정 값이 업데이트될 때만
useEffect(() => { ... }, [value]);
```

