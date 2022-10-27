import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

import { Header } from './header';
import { ItemList } from './itemList';

import { useDispatch } from 'react-redux';
import { itemList } from "../_Actions/itemAction";


export const Home = () => {

    const [isShowItems, setShowItems] = useState(false);
    const [itemArray, setAllList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(itemList()).then((res) => {
            if (res && res.data && res.data.length > 0) {
                let size = 30;
                let myArray = res.data.slice(0, size);
                const trueFirst = myArray.sort((a, b) => Number(b.completed) - Number(a.completed));
                console.log(trueFirst, "myArray");
                setAllList(trueFirst);
            }
        })
    }, []);

    const showItem = () => {
        setShowItems(!isShowItems);
    }

    return (
        <Container>
            <Header />

            <Row>
                <Col className="buttonAll">
                    <Button variant="primary" onClick={() => showItem()}> {!isShowItems ? "Get Item" : "Close Item"}</Button>
                </Col>
            </Row>

            {isShowItems && <Row>
                {<ItemList itemArray={itemArray} />}
            </Row>}

        </Container>
    )
}

