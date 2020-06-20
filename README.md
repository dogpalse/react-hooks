# Hooks
------
 리액트 v16.8에 도입된 기술로 함수형 컴포넌트에서도 상태 관리를 할 수 있게 해주는 기능을 제공한다.

 ### useState
 함수형 컴포넌트에서 가변적인 상태를 지닐 수 있게 해주는 Hook.

```javascript 
const [value, setValue] = useState(0);
```

1. useState는 배열을 반환.  
2. 배열의 첫 번째 원소는 상태값, 두 번째 원소는 상태를 설정하는 함수 
3. useState의 파라미터는 상태의 초기값