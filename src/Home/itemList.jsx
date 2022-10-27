import React from 'react'
import { Container, Col, Table, } from 'react-bootstrap';

export const ItemList = (props) => {

    const { itemArray } = props;

    const renderItems = () => {
        let itemsArray = [];
        for (let item of itemArray) {
            itemsArray.push(
                <tr>
                    <td> <p className="blogslist-titile">{item.title}</p></td>
                    <td>{item.completed ? "Completed" :"Not Completed"}</td>
                </tr>
            )
        }
        return itemsArray;
    }

    return (
        <Container className=" mt-3 mb-4">

            <Col md={12} >
                <Container className="blogs-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                    {itemArray && itemArray.length > 0 &&
                        <Table className="table manage-candidates-top mb-0">
                            <thead>
                                <tr>
                                    <th >Title</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderItems()}
                            </tbody>
                        </Table>}
                </Container>
            </Col>
        </Container>
    )
}

