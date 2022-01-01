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
  const [isLogined, setIsLogined] = useState();

  // 자동로그인
  useEffect(()=>{
    
  })

  

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
