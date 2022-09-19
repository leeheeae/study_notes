import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8fa;
`;

function App() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
