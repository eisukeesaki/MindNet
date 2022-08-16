import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Menu/Menu.css'

function MenuTab() {
    return (
        <Nav variant="tabs" defaultActiveKey="newMap">
            <Nav.Item>
                <Nav.Link eventKey="newMap" href='/'> Mindmaps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='/maplist'>Mind list</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="logout" href='/signin' >
                    signin

                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MenuTab;