import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailComponent from '../../components/detail/DetailComponent'
import client from '../../libs/api/client';

function DetailContainer() {
    const params = useParams();
    const [detailData, setDetailData] = useState({});

    const getDetailData = async()=>{
        const response = await client.get(`/main/${params.id}`)
        setDetailData(response.data.data);    
    }

    useEffect(()=>{
        getDetailData();
    }, []);

    return (
        <DetailComponent detailData={detailData} />
    )
}

export default DetailContainer
