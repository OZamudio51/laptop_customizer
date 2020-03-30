import React from 'react'
import ChosenPart from '../ChosenPart/ChosenPart'

function OptionsForm({ features, onUpdateFeature, selected }) {
	const featureItems = Object.keys(features).map((feature, idx) => {
		const featureHash = feature + '-' + idx
		const options = features[feature]
		return (
			<ChosenPart
				key={featureHash}
				feature={feature}
				options={options}
				onUpdateFeature={onUpdateFeature}
				selected={selected}
			/>
		)
	})
	return (
		<form className="main__form">
			<h2>Customize your laptop</h2>
			{featureItems}
		</form>
	)
}

export default OptionsForm;