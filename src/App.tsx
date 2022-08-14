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

  let 김이름: string | number = "kim"
  let 김나이: string | number = 100
  return (
    <div className="App">
      {이름}
      {나이}
      {결혼했니}
      {회원들}
      {김이름}
      {김나이}
    </div>
  )
}

export default App

// any 타입은 실드 해제 문법이기 때문에 갑자기 타입을 마구 바꿔도 에러가 나지 않습니다.
// any 타입은 좋다고 막쓰면 안되는데
// 그럼 타입관련 버그가 생길 경우 왜 그런지 추적하기가 어려우니까요. 
// 타입 실드를 안씌우면 타입스크립트를 쓸 이유가 없습니다. 
// 그래서 비상시 쓰는 변수 타입체크 해제기능 이런 용도로 씁시다.