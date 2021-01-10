import React, {
    Component
} from 'react';

export default class Card extends Component {
    render() {
        const { name, price, onPress, buttonTitle, qtd}  = this.props;
        return (
            <div style = {
                {
                    width: '40%',
                    color: '#000',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            } >
                {qtd ? qtd + "x " : ""}<p><b>{name}</b><br/>
                R${price}</p>
                <button onClick={onPress}>{buttonTitle}</button>
            </div>
        )
    }
}