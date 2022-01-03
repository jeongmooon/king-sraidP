import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SigInContainer from './containers/auth/user/SigInContainer';
import SignUpContainer from './containers/auth/user/SignUpContainer';
import client from './libs/api/client';
import GlobalStyle from './libs/styles/GlobalStyle';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import NaviPage from './pages/NaviPage';
import WritePage from './pages/WritePage';

function App() {
  const [mainData, setMainData] = useState([]);

  // 자동로그인
  const [isLogined, setIsLogined] = useState(false);
  const [user, setUser] = useState(null);

  // 자동로그인
  useEffect(()=>{
    const token = localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken') : null;

    const test = async () =>{
      client.defaults.headers['authorization'] = token;
      let result;

      try {
        result = await client.get('/user')
      } catch (error) {
        console.log('토큰에러>>>>', error)
      }

      const targetUser = result.data.data;
      setIsLogined(true);
      setUser(targetUser)
    }

    if(token){
      test();
      console.log("자동로그인중")
    }
  },[]);

  

  // 메인 데이터 불러오기
  useEffect(() => {
      getMainData();
  }, [])

  const getMainData = async()=>{
      const response = await client.get("/main");
      setMainData(response.data.dataList)
  }
  return (
    <>
      <NaviPage />
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage mainData={mainData} />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/signin" element={<SigInContainer />} />
          <Route path="/signup" element={<SignUpContainer />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
    </>
  );
}

export default App;
