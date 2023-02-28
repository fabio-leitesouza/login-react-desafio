import './styles.css';

const RememberPass = () => {
    return (
        <div className='remember-pass'>
            <div className='box'>
                <input type="checkbox" className='checkbox'/>
                <a href='/' className='remember-pass__link'>
                    Lembre-me
                </a>
            </div>

            <span className='remember-pass__span'>Esqueci minha senha</span>
        </div>
    );
};

export default RememberPass;