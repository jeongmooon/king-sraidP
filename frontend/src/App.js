import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SigInContainer from './containers/auth/user/SigInContainer';
import SignUpContainer from './containers/auth/user/SignUpContainer';
import UserContext from './context/UserContext';
import client from './libs/api/client';
import GlobalStyle from './libs/styles/GlobalStyle';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NaviPage from './pages/NaviPage';
import SubDetailPage from './pages/SubDetailPage';
import WritePage from './pages/WritePage';

function App() {
  const [mainData, setMainData] = useState([]);

  // 자동로그인
  const {user, setUser, setIsLoggedIn} = useContext(UserContext);
  const userInfo = user ? 1 :0;

  // 자동로그인
  useEffect(()=>{
    const fetchUser = async() =>{
      if(localStorage.getItem('accessToken')) {
        const accessToken = localStorage.getItem('accessToken');
        client.defaults.headers['Authorization'] = accessToken;

        let res;
        try {
          res = await client.get('/user')
        } catch (error) {
          console.log('토큰에러>>>>', error)
        }
        setUser(res.data.data)
        setIsLoggedIn(true)
      }
    }

    fetchUser();
  },[userInfo, setUser, setIsLoggedIn]);
  

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
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/subdetail" element={<SubDetailPage />} />
        </Routes>
    </>
  );
}

export default App;
