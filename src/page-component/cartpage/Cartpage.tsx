import React, { useState } from 'react';
import {
    CartDiv,
    CartTotalMain,
    CheckButton,
    DeleteIcon,
    MainDiv,
    MainTable,
    ParaSubTypo,
    ParaTypo,
    QuantityControl,
    SubData,
    SubDiv,
    SubTableData,
    TableData,
    TableDiv,
    TableHead,
    TableHeadMain,
    TotalTypo
} from './Cartpage.styled';
import UiButton from 'genpixels_ui_components/src/ui-components/button/UiButton';
import DetailsQuality from '../detailsQuality/DetailsQuality';


const Cartpage = () => {
    const initialProducts = [
        { id: 1, name: 'Syltherine Cafe Chair', price: 250000, quantity: 1, image: 'images/1.1.png' },
        { id: 2, name: 'Lollito Cafe Chair', price: 150000, quantity: 1, image: 'images/1.1.png' },
    ];

    const [products, setProducts] = useState(initialProducts);

    const increment = (id: any) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const decrement = (id: any) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    return (
        <>
            <MainDiv className='body-gap'>
                <TableDiv>
                    <SubDiv>
                        <MainTable>
                            <TableHeadMain>
                                <tr>
                                    <TableHead>PRODUCTS</TableHead>
                                    <TableHead>PRICE</TableHead>
                                    <TableHead>QUANTITY</TableHead>
                                    <TableHead>SUB-TOTAL</TableHead>
                                    <TableHead>REMOVE</TableHead>
                                </tr>
                            </TableHeadMain>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <TableData>
                                            <img src={product.image} alt={product.name} />
                                            {product.name}
                                        </TableData>
                                        <SubTableData>Rs. {product.price.toLocaleString('en-IN')}.00</SubTableData>
                                        <td>
                                            <QuantityControl>
                                                <UiButton onClick={() => decrement(product.id)} variant={"text"}>-</UiButton>
                                                <span>{product.quantity}</span>
                                                <UiButton onClick={() => increment(product.id)} variant={"text"}>+</UiButton>
                                            </QuantityControl>
                                        </td>
                                        <SubData>Rs. {(product.price * product.quantity).toLocaleString('en-IN')}.00</SubData>
                                        <td><DeleteIcon /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </MainTable>
                    </SubDiv>
                </TableDiv>
                <CartDiv>
                    <CartTotalMain>
                        <TotalTypo>Cart Totals</TotalTypo>
                        <ParaTypo>SubTotal<span>Rs. {total.toLocaleString('en-IN')}.00</span></ParaTypo>
                        <ParaSubTypo>Total<span>Rs. {total.toLocaleString('en-IN')}.00</span></ParaSubTypo>
                        <div>
                            <CheckButton variant={'text'}>Check Out</CheckButton>
                        </div>
                    </CartTotalMain>
                </CartDiv>
            </MainDiv>
            <DetailsQuality />
        </>
    );
};

export default Cartpage;
