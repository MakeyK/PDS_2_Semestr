import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MASTER_ROUTE } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import {registration} from '../http/userApi'
import {Context} from "../index";

const MainPage = observer(() => {
  document.body.style.backgroundColor = "#313131"
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const click = async () => {
    try {
        const response = await registration(login, password)
        user.setIsAuth(true)
        user.setUser()
        console.log(response)
        navigate(MASTER_ROUTE)
    } catch (error) {
        alert(error)}}

  return (
    <Container
      style={{ backgroundColor: '#313131', borderRadius: '15px', width: '340px', marginTop: '6px', fontFamily: "Play" }}>
      <Card style={{ borderRadius: 80, fontFamily: "Play", backgroundColor: '#C9E956', marginTop: '60px' }} className="p-5 #FFFAF4">
        <Form className="d-flex flex-column">
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            type="login"
            value = {login}
            placeholder="Введите логин..."
            size="lg"
            onChange = { e => setLogin(e.target.value)}/>
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            placeholder="Выберите пароль..."
            type="password"
            size="lg"
            value={password}
            onChange = { e => setPassword(e.target.value)}/>
            
          <p style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              size={"lg"}
              variant={"outline-success"}
              style={{ fontWeight: 'bold', borderRadius: 37, width: '180px', height: '70px' }}
              onClick={click}
            >
              Войти
            </Button></p>
        </Form>
      </Card>
    </Container>
  );
}
);

export default MainPage;