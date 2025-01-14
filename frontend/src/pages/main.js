import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, NavLink, useNavigate } from "react-router-dom";

const MainPage = observer(() => {
  document.body.style.backgroundColor = "#313131"
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()


  return (
    <Container
      style={{ backgroundColor: '#313131', borderRadius: '15px', width: '1240px', marginTop: '6px', fontFamily: "Play" }}>
      <Card style={{ borderRadius: 80, fontFamily: "Play", backgroundColor: '#C9E956', marginTop: '60px' }} className="p-5 #FFFAF4">
        <Form className="d-flex flex-column">
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            type="login"
            value = {login}
            placeholder="Введите логин..."
            size="lg"
            onChange = { e => setLogin(e.target.value)}
            />
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            placeholder="Выберите пароль..."
            type="password"
            size="lg"
            onChange = { e => setPassword(e.target.value)}
            />
            
          <p style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              size={"lg"}
              variant={"outline-success"}
              style={{ fontWeight: 'bold', borderRadius: 37, width: '180px', height: '70px' }}
            >
              Отправить
            </Button></p>
        </Form>
      </Card>
    </Container>
  );
}
);

export default MainPage;