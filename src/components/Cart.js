import React from 'react'
import { Button, Container, Col, Row, Table } from 'react-bootstrap'
import { useCart } from 'react-use-cart';
import { useThemeHook } from './ThemeProvider';
import { BsCartCheck, BsCartX } from 'react-icons/bs';

const Cart = () => {
    const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return ( 
        <Container className="py-4 mt-5">
            <h1 className={ `${theme ? 'text-light':'text-dark-primary'} my-5 text center`}>
                {isEmpty? 'Carrinho vazio' : 'Carinho de compras '}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={theme? 'dark' : 'light'} className='md-5'>
                    <tbody>                    
                        {items.map((item, index)=> {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center'}}>
                                        <div style={{ padding: '.5rem'}}>
                                            <img src={item.image} style={{ width: '4rem' }} alt={item.title}/>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                        <h6 style={{hiteSpace: 'nowrap', width: '14rem', overFlow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>R$ {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td><Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button></td>
                                    <td><Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button></td>
                                    <td><Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2">Remover</Button></td>
                                </tr>
                            )
                        })}                        
                    </tbody>
                </Table>
                {!isEmpty && 
                    <Row style={{position: 'fixed', bottom: 0}} className={`${theme ? 'bg-light-black text-light' : 'bg-light text-black'} justify-content-center w-100`}>
                        <Col className='ps-3'>
                            <h4>Preço Total: R$ {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant='danger' 
                                    className='m-3' onClick={() => emptyCart()}>    
                                    <BsCartX side='1.5rem' />
                                    Limpar carrinho
                            </Button>
                            <Button variant='success' 
                                    className='m-3'>    
                                    <BsCartCheck side='1.5rem' />
                                    Finalizar Compra
                            </Button>
                        </Col>
                    </Row>}
            </Row>
        </Container>
    );
}

export default Cart;