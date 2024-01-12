import React, { useEffect, useState } from "react";
import { getProducts } from "../functions/api.mjs";

const MyProducts = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProducts();
                setList(products.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchData();
    }, []);

    const handleUpdateProduct = (productId) => {
 return 0
    };

    const List = () => {
        
        return (
            <>
                <ul className='listProducts'>
                    {list.map((element) => (
                        <li className='itemlist' key={element.id}>
                            <h2 className='productTitle'>
                                {element.nome}
                            </h2>
                            <div>
                                <input className='inputField' type="text" value={element.id} required />
                                <br />
                                <input className='inputField' type="text" value={element.imgUrl} required />
                                <br />
                                {/* Adicione inputs para outras propriedades aqui */}
                            </div>
                            <img className='imgProduct' src={element.imgUrl} alt={`imagem${element.nome}`} />
                            <button onClick={() => handleUpdateProduct(element.id)}>Atualizar Produto</button>
                        </li>
                    ))}
                </ul>
            </>
        )
    };

    return (
        <>
            <List />
        </>
    );
};

export default MyProducts;
