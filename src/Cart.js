import React, { Component } from 'react';
import Card from './components/Card'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from './store/ducks/cart'

const products = [
    {
        id: 1,
        name: "Calculadora",
        price: 15
    },
    {
        id: 2,
        name: "Lapiz",
        price: 0.5
    },
    {
        id: 3,
        name: "Caneta",
        price: 1
    },
    {
        id: 4,
        name: "Borracha",
        price: 2
    },
]

class Cart extends Component {

    render() {
        const { cart, total } = this.props;
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-start' }}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <h1>Produtos</h1>
                    {products.map((item) => (
                        <Card key={item.id}
                            name={item.name}
                            price={item.price}
                            onPress={() => this.handleSubmit(item)}
                            buttonTitle="Adicionar" />
                    ))}
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>Carrinho</h1>
                    <p>
                        Items: <strong>{cart.items.length}</strong>
                    </p>
                    <p>
                        Total: <strong>R${total}</strong>
                    </p>
                    {cart.items.map((item) => (
                        <Card key={item.id}
                            name={item.item.name}
                            qtd={item.qtd}
                            price={item.item.price}
                            onPress={() => this.removeItem(item.id)}
                            buttonTitle="Remover" />
                    ))}
                </div>
            </div>
        )
    }

    handleSubmit = (product) => {
        // console.log('handle submit')
        this.props.add(product);
    }

    removeItem = (id) => {
        this.props.remove(id);
    }
}


const calculateTotal = createSelector(
    state => state.cart.items,
    (items) => {
        return items.reduce((subtotal, item) => subtotal + item.item.price, 0);
    })

const mapStateToProps = state => ({
    cart: state.cart,
    total: calculateTotal(state)
})


const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);