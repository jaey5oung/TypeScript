import React from "react"
import "./App.css"

function App() {
  let 이름: string = "kim" //변수에 타입지정가능 (장점) 타입이 실수로 변경될때 에러내줌
  let 나이: number = 50
  let 결혼했니: undefined = undefined
  let 회원들: string[] = ["kim", "park"] //문자만 담긴 array 만 가능
  // let 오브젝트회원들: { member1: string; memaber2: string } = {
  //   member1: "jang",
  //   memaber2: "kang",
  // }
  // let 장재영 = "jaeyoung"
  //대부분은 vs코드에서 타입지정을 해줌

  // 문제 1 타입지정하기
  // let project: { member: String[]; days: number; started: boolean } = {
  //   member: ["kim", "park"],
  //   days: 30,
  //   started: true,
  // }

  // let 이름 :any;
  // 이름 = 123;
  // 이름 =[];
  // any 타입 모든 자료형 허용해줌 타입쉴드해제

  let 김이름: string | number = "kim"
  //스트링도 들어올수있고 넘버도 들어올수있다
  let 김나이: string | number = 100
  // let 회원님들: { a: string | number } = { a: 123 }
  return (
    <div className="App">
      {이름}
      {나이}
      {/* {회원님들} */}
      {결혼했니}
      {회원들}
      {김이름}
      {김나이}
    </div>
  )
}

export default App

// 1. 함수로 들어오는 파라미터 타입지정은 파라미터 옆에 적으면 됩니다.

// 2. 함수가 실행된 후 남는 값 (return 우측에 있는 값) 타입지정하고 싶으면 함수명() 우측에 적으면 됩니다.

 

// 함수에 멋있게 타입 실드를 장착했기 때문에

// 이제 파라미터와 리턴값이 이상해지면 자동으로 혼내줍니다. 

 

// - 파라미터에 타입을 지정하면 필수 파라미터가 됩니다. 


