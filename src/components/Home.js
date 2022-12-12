import React, { useEffect, useState } from'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from './ThemeProvider';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from './ProductCard';

const Home = () => {
    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);
    
    async function getResponse( ){
        const res = await fetch('https://fakestoreapi.com/products')
                            .then(res => res.json());
                            setProductData(await res);
    }
    useEffect(() => {
        getResponse();
    },[])

    return ( 
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col xs={10} md={7} xl={4} lg={6} className="md-3 mx-auto text-center">
                    <h1 className={theme ? 'text-light my-5': 'text-black my-5' }>Pesquisar produtos</h1>
                    <InputGroup className="mb-3">
                    <InputGroup.Text className={theme? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
                        <BiSearch size='1.5rem' />
                    </InputGroup.Text>
                    <FormControl
                        placeholder="Pesquisar"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className={theme? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}
                    />
                    </InputGroup>
                </Col>
                <SearchFilter 
                    value={searchInput}
                    data={productData}
                    renderResults={results => (
                        <Row className='justify-content-center'>
                            {results.map((item,i) =>(
                            <ProductCard data={item} />
                            ))}
                        </Row>
                    )}
                />
            </Row>
        </Container>
    );
}

export default Home;