import './Banner.css'
import logo from '../../imagens/banner.png'

const Banner = () => {
    return (<header className="cabecalho">
        <img src={logo} alt='Logo do Organo'/>
    </header>)
}

export default Banner