import image from '../images/logo192.png';
import classes from './Header.module.css'; 

const Header = ()=>{



    return(
        <header className={classes.header}>
            <img src={image} alt='' />
            <p>ReduxOpedia</p>
        </header>
    )


}
export default Header;