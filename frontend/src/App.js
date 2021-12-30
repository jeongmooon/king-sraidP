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

function App() {
  const [mainData, setMainData] = useState([]);

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
        </Routes>
    </>
  );
}

export default App;
