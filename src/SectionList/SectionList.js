import React from 'react';
import SummaryItems from '../SummaryItems/SummaryItems';
import CartTotalAmount from '../CartTotalAmount/CartTotalAmount';


function SectionList(props) {
    return(
        <section className="main__summary">
        <h2>Your cart</h2>
        <SummaryItems selected={props.selected} />
        <CartTotalAmount selected={props.selected} />
      </section>
    )
}

export default SectionList;