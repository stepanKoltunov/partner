import { Link } from "react-router-dom"
import { Button, ButtonProp } from "../components/Button"

const buttonsConfig: ButtonProp[] = [
    {
        value:'Главная',
        link: '/',
        icon: 'home'
    },
    {
        value:'О нас',
        link: '/about',
        icon: 'about'
    },
    {
        value:'Связаться',
        link: '/connection',
        icon: 'connection'
    },
    {
        value:'Наши услуги',
        link: '/services',
        icon: 'services'
    }
]

export const Header = () => {
    return(
        <div className={'header'}>
            <div className={'header__logo-group'}>
                <Link to={'/'}>
                    <img src={require("../img/partner.svg").default} alt="Partner-strahovanie" className={'header__logo'}/>
                </Link>
                <h3 className={'header__logo-title'}>Центр страхования <b>Partner</b></h3>
            </div>
            <div className={'header__buttons'}>
                {buttonsConfig.map(btn => <Button key={btn.value} value={btn.value} link={btn.link} icon={btn.icon}/>)}
            </div>
        </div>
    )
}