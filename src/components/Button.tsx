// import { AiOutlineHome, AiOutlineMessage, AiOutlineRead, AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";

export type ButtonProp = {
    onClick?: () => void;
    value: string;
    link?: string;
    classNameBtn?: string;
    icon?: "home" | "about" | "connection" | "services"
}

// const icons = {
//     home: <AiOutlineHome className="header__button"/>,
//     about: <AiOutlineTeam className="header__button"/>,
//     connection: <AiOutlineMessage className="header__button"/>,
//     services: <AiOutlineRead className={"header__button"}/>
// }

export const Button = ({
                        onClick,
                        value,
                        link,
                        classNameBtn,
                        icon
}: ButtonProp) => {

    const getLinkedBtn = () => {
    return (
            <Link to={link as string}>
                {/* {icon && icons[icon]} */}
                <button className={classNameBtn ? classNameBtn : 'header__button'} onClick={onClick}>{value && value}</button>
            </Link>
            )
    }
    
    return(
        <>
            {link ? getLinkedBtn() : <button className={classNameBtn ? classNameBtn : 'header__button'} onClick={onClick}>{value && value}</button>}
        </>
    )
}