import { ReactElement, useCallback, useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginFormContainer = styled.div`
    max-width: 500px;
    width: 100%;
    min-height: 500px;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0 10px 30px #ddd;
`;

const Logo = styled.h1`
    font-size: 28px;
    font-weight: 700;
`;
const Description = styled.p`
    margin-top: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #888;
`;

const LoginForm = styled.form`
    margin-top: 30px;
`;
const InputWrap = styled.div`
    position: relative;

    & + & {
        margin-top: 30px;
    }
`;
const InputLabel = styled.label`
    padding: 2px;
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 500;
    transition: 0.3s;
    border: none;
    color: #555;
`;
const Input = styled.input`
    padding: 18px;
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    background-color: #f8f8fa;
    border-radius: 4px;
    border: none;
    transition: 0.3s;

    &::placeholder {
        color: transparent;
    }

    &:focus,
    &:not(:placeholder-shown) {
        border: 1px solid #eee;
        background-color: #fff;
    }

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
        background-color: #fff;
        transform: translateY(0);
        top: -11px;
    }
`;

const SubmitButton = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 48px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    transition: 0.3s;

    &:hover {
        color: #fff;
        background-color: #111;
    }
`;

function LoginPage() {
    const [formData, setFormData] = useState({
        id: "",
        password: "",
    });

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

    const onChangeInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        },
        []
    );

    return (
        <LoginContainer>
            <LoginFormContainer>
                <Logo>Study Notes.</Logo>
                <Description>????????? ????????? ?????? ??????????????????.</Description>
                <LoginForm onSubmit={onSubmit}>
                    <InputWrap>
                        <Input
                            id="id"
                            value={formData.id}
                            onChange={onChangeInput}
                            placeholder="?????????"
                        ></Input>
                        <InputLabel>?????????</InputLabel>
                    </InputWrap>
                    <InputWrap>
                        <Input
                            id="password"
                            onChange={onChangeInput}
                            value={formData.password}
                            placeholder="????????????"
                        ></Input>
                        <InputLabel>????????????</InputLabel>
                    </InputWrap>
                    <SubmitButton>?????????</SubmitButton>
                </LoginForm>
            </LoginFormContainer>
        </LoginContainer>
    );
}

export default LoginPage;
