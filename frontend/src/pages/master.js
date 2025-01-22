import React, { useState, useEffect, useContext, use } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from "react-router-dom";
import { insertPassengers, logins } from '../http/userApi'
import { Context } from "../index";

const MasterPage = observer(() => {
  document.body.style.backgroundColor = "#313131"
  const { user } = useContext(Context)
  const location = useLocation()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const click1 = async () => {
    try {
      const response = await insertPassengers(first_name, last_name)
      // console.log('front', first_name, last_name)
      user.setIsAuth(true)
      user.setUser()
    } catch (error) {
      alert(error)
    }
  }
  const click = async () => {
    try {
      const response = await logins(login, password)
      user.setIsAuth(true)
      user.setUser()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container
      style={{ backgroundColor: '#313131', borderRadius: '15px', width: window.innerWidth - 74, marginTop: '6px', fontFamily: "Play" }}>
      <Card style={{ borderRadius: 80, fontFamily: "Play", backgroundColor: '#C9E956', marginTop: '60px' }} className="p-5 #FFFAF4">
        <p style={{fontSize:'30px'}}>Авторизация</p>
        <Form className="d-flex flex-column">
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            type="login"
            value={login}
            placeholder="Введите логин..."
            size="lg"
            onChange={e => setLogin(e.target.value)} />
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            placeholder="Введите пароль..."
            type="password"
            size="lg"
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <Button
            type="submit"
            size={"lg"}
            variant={"outline-success"}
            style={{ fontWeight: 'bold', borderRadius: 37, width: '180px', height: '70px' }}
            onClick={click}
          >
            Отправить
          </Button></Form>
      </Card>

      <Card style={{ borderRadius: 80, fontFamily: "Play", backgroundColor: '#C9E956', marginTop: '60px' }} className="p-5 #FFFAF4">
      <p style={{fontSize:'30px'}}>Добавление пассажира</p>
        <Form className="d-flex flex-column">
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            type="login"
            value={first_name}
            placeholder="Введите имя..."
            size="lg"
            onChange={e => setFirstName(e.target.value)} />
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            placeholder="Введите фамилию..."
            size="lg"
            value={last_name}
            onChange={e => setLastName(e.target.value)} />
          <Button
            type="submit"
            size={"lg"}
            variant={"outline-success"}
            style={{ fontWeight: 'bold', borderRadius: 37, width: '280px', height: '70px' }}
            onClick={click1}
          >
            Отправить данные пассажира
          </Button></Form>
      </Card>

    </Container>
  );
}
);

export default MasterPage;