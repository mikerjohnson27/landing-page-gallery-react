import React, { Component } from 'react';

class Nav extends Component {

    state = {
        count: 0,
    };

    render() { 
        return (
<Nav variant="pills" defaultActiveKey="/home">
    <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>
        );
    }
}
 
export default Nav