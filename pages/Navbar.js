import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
height: 80px;
background: #000;
color: #fff;
`;

const Navbar= () => {
    return (
        <Nav>
            <div>
                <Link href= "/">
                    <a>VakilBot</a>
                </Link>
            </div>
            <div>
                <Link href= "/">
                    <a>VakilBot</a>
                </Link>
            </div>
            <div>
                <button>Sign up</button>
            </div>
        </Nav>
    );
};

export default Navbar;