import './style.css';

const LoginText = () => {
    return (
        <div className="login-text">
            <div className="login-text__image">
                <img src="/images/log-in.svg" alt="logo" className="login-text__seta" />
                <h1 className="login-text__title">Faça seu login</h1>
            </div>
            <p className="login-text__text">Entre com suas informações de cadastro.</p>
        </div>
    );
}

export default LoginText;