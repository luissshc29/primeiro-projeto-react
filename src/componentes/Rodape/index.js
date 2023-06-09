import './Rodape.css'
import tw from './imagens/tw.png'
import fb from './imagens/fb.png'
import ig from './imagens/ig.png'
import logo from './imagens/logo.png'

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className='redes-sociais'>
                <img src={fb} alt='Logo Facebook' className='logo-rede-social'/>
                <img src={tw} alt='Logo Twitter' className='logo-rede-social'/>
                <img src={ig} alt='Logo Instagram' className='logo-rede-social'/>
            </div>
            
            <img src={logo} alt='Logo Organo' className='logo-organo'/>
            <h4 className='rodape-texto'>Desenvolvido por Alura.</h4>
        </footer>
    )
}

export default Rodape
