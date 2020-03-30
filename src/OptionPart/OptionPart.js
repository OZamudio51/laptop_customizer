import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export default function OptionPart({
	item,
	feature,
	itemHash,
	checked,
	onUpdateFeature
}) {
	return (
		<div className="feature__item">
			<input
				type="radio"
				id={itemHash}
				className="feature__option"
				name={slugify(feature)}
				checked={checked}
				onChange={e => onUpdateFeature(feature, item)}
			/>
			<label htmlFor={itemHash} className="feature__label">
				{item.name} ({USCurrencyFormat.format(item.cost)})
			</label>
		</div>
	)
}

OptionPart.defaultProps = {
	itemHash: '',
	item: {},
	feature: '',
	checked: false
}