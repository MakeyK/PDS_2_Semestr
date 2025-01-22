import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { getAll } from "../http/userApi";
import UserRequest from "../store/userRequest";

const GetAllPage = observer(() => {
    document.body.style.backgroundColor = "#313131"
    const { user } = useContext(Context)
    const {UserRequest} = useContext(Context)
    const location = useLocation()
    const click = async () => {
        try {
            const response = await getAll()
            user.setIsAuth(true)
            user.setUser()
        } catch (error) {
            alert(error)
        }
    }


    useEffect(() => {
        getAll().then(data => { UserRequest.setUserRequest(data) })
    }, [])
    return (
        <Container
            style={{ backgroundColor: '#313131', borderRadius: '15px', width: window.innerWidth - 74, marginTop: '6px', fontFamily: "Play" }}>
            <Card style={{ borderRadius: 80, fontFamily: "Play", backgroundColor: '#C9E956', marginTop: '60px' }} className="p-5 #FFFAF4">

                <p style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type="submit"
                        size={"lg"}
                        variant={"outline-success"}
                        style={{ fontWeight: 'bold', borderRadius: 37, width: '180px', height: '70px' }}
                        onClick={click}
                    >
                        Посмотреть данные Пользователей
                    </Button></p>
            </Card>
        </Container>
    );
}
);

export default GetAllPage;