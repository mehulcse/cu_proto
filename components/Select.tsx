import React from "react";

type Option = Record<string, any>;

type SelectProps = {
	options: Option[];
	value: string;
	onChange: (e: any) => void;
	labelKey: keyof Option;
	valueKey: keyof Option;
};

function Select({ options, value, onChange, labelKey, valueKey }: SelectProps) {
	return (
		<div>
			<select
				value={value || ''}
				onChange={onChange}
				className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
			>
				{options?.map((option) => (
					<option key={option?.[valueKey]} value={option?.[valueKey]}>
						{option?.[labelKey]}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
