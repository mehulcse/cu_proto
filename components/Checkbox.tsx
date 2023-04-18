import React from 'react';

type CheckboxProps = {
	label: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
	return (
		<div className="flex">
			<label className="block text-sm font-medium leading-6 text-white mr-3">{label}</label>
			<input
				type="checkbox"
				className="form-checkbox h-5 w-5 text-blue-600"
				checked={checked}
				onChange={onChange}
			/>
		</div>
	);
};

export default Checkbox;
