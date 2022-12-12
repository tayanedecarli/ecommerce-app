import React, { Component, createContext, useEffect } from 'react';

export const EcommerceContext = createContext();
// class ProdutoFactory {
//     constructor(id, nome, preco, img){
//         this.nome = nome
//         this.preco = preco
//         this.img = img
//     }
// }
// const produto1 = new ProdutoFactory(1, 'camisa', 49.99, "img/p1.jpg")

const Main = (props) => {
    // const [id, item, preco] = produtos ([
    //     {id: 1, item: 'boné', preco: 49.99, "./img/p1.jpg"},
    //     {id: 2, item: 'boné', preco: 49.99 },
    //     {id: 3, item: 'boné', preco: 49.99 },
    //     {id: 4, item: 'boné', preco: 49.99 },
    //     {id: 5, item: 'boné', preco: 49.99 },
    //     {id: 6, item: 'boné', preco: 49.99 }
    // ]);
    // useEffect(() => {
    //     Produtos.buscar(item);
    // })
    return (
        <main className='container'>
            <h2></h2>
            <section>
                <div>
                <img src='{produtos.img}' alt='' />
                    <p></p>
                    <p></p>
                    <button></button>
                </div>
            </section>
        </main>
    );
}


export default Main;