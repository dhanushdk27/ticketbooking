import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase-config';
import { Spin } from 'antd';
import { Image } from 'antd';

const { Meta } = Card;





function Tamil(props) {
  const [getdata, setGetdata] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const querySnapshot = await getDocs(collection(db, "allthemoviedetails"));
      let totaldata = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        totaldata.push(doc.data());
      });
      setGetdata(totaldata)
    };
    getdata();

  }, [])

  const image = {


    "Etharkkum Thunindhavan": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/etharkkum-thunindhavan-et00313071-27-12-2021-08-02-06.jpg",
    "RRR": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rrr-et00094579-27-07-2021-11-33-17.jpg",
    "Valimai": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/valimai-et00132669-13-07-2021-02-12-59.jpg",
    "The Batman": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-batman-et00129624-31-01-2022-02-23-17.jpg"


  }
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
    }}>

      {getdata.length ? (getdata.map((k) => (
        <Link to={'/Allmoviedetails/'}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img style={{ height: "13rem" }} alt="example" src={image[k.name]} />}
          >

            <Meta title={k.name} description="" />
            <p>{k.IMDb}</p>
            <Button style={{ borderRadius: "2rem" }} type='primary' danger>BookNow</Button>
          </Card></Link>
      ))) : <Spin />}
    </div>
  );
}

export default Tamil;