import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import { Fragment } from 'react'
import { Popover, Transition } from "@headlessui/react";

interface Props {
	color: string;
	handleColorChange: (newColor: string) => void;
}

function ColorPicker({
	color,
 handleColorChange
}: Props) {
	const pickerRef = useRef(null);
	return (
		<Popover>
			{({ open }) => (
				<>
					<Popover.Button className="w-10 h-10 rounded cursor-pointer border-2 border-white border-opacity-1" ref={pickerRef}>
						<div className="w-full h-full rounded" style={{ backgroundColor: color }}></div>
					</Popover.Button>
					{open && (
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
						<Popover.Panel className="z-10 absolute">
							<SketchPicker color={color} onChange={(newColor) => handleColorChange(newColor.hex)} />
						</Popover.Panel>
						</Transition>
					)}
				</>
			)}
		</Popover>
	);
}

export default ColorPicker;
