import React, {useState} from 'react'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default function Navbar() {
  const [toggle, setToggle] = useState({dropdownOpen: false});
  function changeToggle() {
    setToggle({dropdownOpen: !toggle.dropdownOpen})
    console.log(toggle.dropdownOpen)
  }
  return (
    <div>
      <Nav className="navigation" tabs>
        <NavItem>
          <NavLink href="#" active>Link</NavLink>
        </NavItem>
        <Dropdown nav isOpen={toggle.dropdownOpen} toggle={changeToggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}



// import React from 'react';


// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

//   toggle() {
//     this.setState({
//       dropdownOpen: !this.state.dropdownOpen
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Nav tabs>
//           <NavItem>
//             <NavLink href="#" active>Link</NavLink>
//           </NavItem>
//           <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//             <DropdownToggle nav caret>
//               Dropdown
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem header>Header</DropdownItem>
//               <DropdownItem disabled>Action</DropdownItem>
//               <DropdownItem>Another Action</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem>Another Action</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//           <NavItem>
//             <NavLink href="#">Link</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">Another Link</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink disabled href="#">Disabled Link</NavLink>
//           </NavItem>
//         </Nav>
//       </div>
//     );
//   }
// }
