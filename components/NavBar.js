import NavImg from '../pic/nav.svg';
import Image from 'next/image';
import styles from '../styles/navbar.module.scss';

const Navbar =()=>{
    return(
        <div className={styles.mainDiv} style={{width:"15%",float:"right",position:"relative"}}>
            
            <Image src={NavImg} layout="responsive"/>
        </div>
    )

}

export default Navbar;