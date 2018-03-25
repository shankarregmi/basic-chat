import React, { PureComponent } from 'react';
import { Modal, Button} from 'react-bootstrap';
// module.exports = {
//     open: function openModal() {
        
//     }
// }

class MyModal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        console.log('here...');
    }
    open = () => {
        this.setState({
            isOpen: true
        });
    }

    render() {
        return(
            this.state.isOpen && <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>One fine body...</Modal.Body>

                <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
        )   
    }
}
export default MyModal;