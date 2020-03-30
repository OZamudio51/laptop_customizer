import React from 'react'
import OptionPart from '../OptionPart/OptionPart'

import slugify from 'slugify'

export default function ChosenPart({
	feature,
	onUpdateFeature,
	options,
	selected
}) {
	const optionItems = options.map(item => {
		const itemHash = slugify(JSON.stringify(item))
		const checked = item.name === selected[feature].name

		return (
			<OptionPart
				key={itemHash}
				itemHash={itemHash}
				item={item}
				feature={feature}
				checked={checked}
				onUpdateFeature={onUpdateFeature}
			/>
		)
	})

	return (
		<fieldset className="feature">
			<legend className="feature__name">
				<h3>{feature}</h3>
			</legend>
			{optionItems}
		</fieldset>
	)
}

ChosenPart.defaultProps = {
	feature: '',
	featureHash: '',
	options: [],
	selected: {}
}