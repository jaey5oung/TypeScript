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

  return (
    <div className="App">
      {이름}
      {나이}
      {결혼했니}
      {회원들}
    </div>
  )
}

export default App
