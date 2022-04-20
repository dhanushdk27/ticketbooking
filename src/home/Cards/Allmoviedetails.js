import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase-config';
import { StarOutlined, DollarOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Row } from 'reactstrap';
import './Movies.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CardHeader } from '@mui/material';



export default function Allmoviedetails() {
    const [getdata, setGetdata] = useState([])

    useEffect(() => {
        const getdata = async () => {
            const querySnapshot = await getDocs(collection(db, "movies"));
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

    const ima1 = {

        "Etharkkum Thunindhavan": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/etharkkum-thunindhavan-et00313071-27-12-2021-08-02-06.jpg",
        "RRR": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rrr-et00094579-27-07-2021-11-33-17.jpg",
        "Valimai": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/valimai-et00132669-13-07-2021-02-12-59.jpg",
        "The Batman": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-batman-et00129624-31-01-2022-02-23-17.jpg"



    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "6rem"
        }}>
            {getdata.map(k => (
                <Card style={{ width: "80rem" }} sx={{
                    maxWidth: "100rem",
                    height: "fit-content"
                }}>

                    <CardMedia
                        component="img"
                        height="200"
                        image={ima1[k.name]}
                        alt="green iguana"
                    />
                    <CardContent style={{ boxShadow: "linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.8))" }}>

                        <CardHeader title={k.name}></CardHeader>
                        <CardContent> <HeartFilled style={{
                            color: "rgb(248, 68, 100)",
                            height: "1rem"
                        }} />{k.rating}</CardContent>
                        <CardContent>{k.hours}</CardContent>
                        <h6 style={{fontWeight:"bolder"}}>About Movie</h6>
                        <CardContent>{k.about}</CardContent>
                        <Link to={'/Ticket'}>
                            <Button style={{ borderRadius: '0.60rem' }}
                                type='primary' danger>BookNow</Button>
                        </Link>
                    </CardContent>

                   

                </Card>
            ))}
        </div>
    );
}