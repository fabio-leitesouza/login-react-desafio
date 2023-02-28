import ButtonAlt from '../ButtonAlt';
import LoginText from '../LoginText';
import RememberPass from '../RememberPass';
import TextBox from '../TextBox';
import './style.css';

const Form = ({ children }) => {
    return (
        <section className='form'>
            <LoginText className='form__login' />

            <TextBox label='E-mail' placeholder='Digite seu e-mail' image='/images/mail.svg' imageSecond='' />
            <TextBox label='Senha' placeholder='Digite seu e-mail' image='/images/lock.svg' imageSecond='/images/eye.svg' />
            <RememberPass />
            <ButtonAlt text='ENTRAR' />
            <div className="span">
                <span >Não tem uma conta? </span>
                <a href="#" className="link">Registre-se</a>
            </div>


        </section>
    )
};

export default Form;