import React from 'react';

function SummaryItems({selected}) {
	const summaryItems = Object.keys(selected).map((feature, idx) => {
		const featureHash = feature + '-' + idx
        const selectedOption = selected[feature]
        
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })

		return (
			<div className="summary__option" key={featureHash}>
				<div className="summary__option__label">{feature} </div>
				<div className="summary__option__value">
					{selectedOption.name}
				</div>
				<div className="summary__option__cost">
					{USCurrencyFormat.format(selectedOption.cost)}
				</div>
			</div>
		)
	})
	return <div>{summaryItems}</div>
}

export default SummaryItems;