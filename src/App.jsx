import { useState } from 'react'

function App() {
  const [serverTime, setServerTime] = useState('시간을 불러와주세요')

  // [중요] 여기에 Backend 배포 후 얻은 URL을 넣습니다.
  const API_URL = "https://y8uwis0swh.execute-api.ap-northeast-2.amazonaws.com/Prod/time";

  const fetchTime = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setServerTime(data.time);
    } catch (error) {
      console.error(error);
      setServerTime("에러 발생!");
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Serverless Time Check</h1>
      <button onClick={fetchTime}>지금 몇 시?</button>
      <h2 style={{ color: 'blue' }}>{serverTime}</h2>
    </div>
  )
}
export default App