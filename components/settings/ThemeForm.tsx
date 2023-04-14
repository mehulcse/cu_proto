import {useEffect, useState} from 'react'
import {useForm, Controller} from "react-hook-form";
import { GraphQLQuery } from '@aws-amplify/api';
import ColorPicker from "@/components/ColorPicker";
import {API} from "aws-amplify";
import {listThemes} from "@/src/graphql/queries";
import Select from "@/components/Select";
import {updateTheme} from "@/src/graphql/mutations";
import Loader from "@/components/Loader";
import {ListThemesQuery} from "@/src/API";

const ThemeForm = () => {
	const {control, handleSubmit, reset} = useForm({
		defaultValues: {
			"mode": "DARK",
			"bottom_bar_color": "",
			"scaffold_bg_color": "",
			"app_bar_color": "",
			"primary_color": "",
			"black_color": "",
			"white_color": "",
			"grey_color": "",
			"red_color": "",
			"green_color": "",
			"orange_color": "",
			"organization_id": "a724c044-a445-4779-ac1f-7b563012fa70",
		}
	});
	const [themes, setThemes] = useState([]);
	const [selectedTheme, setSelectedTheme] = useState();
	const [loading, setLoading] = useState(false);

	const fetchThemes = async () => {
		const data = await API.graphql<GraphQLQuery<ListThemesQuery>>({
			query: listThemes,
			variables: {filter: {organization_id: {eq: "a724c044-a445-4779-ac1f-7b563012fa70"}}}
		});
		setThemes(data?.data?.listThemes?.items as any);
		reset({
			...(data?.data?.listThemes?.items?.[0] || {})
		})
		setSelectedTheme(data?.data?.listThemes?.items?.[0]?.mode as any);
	}

	useEffect(() => {
		fetchThemes();
	}, []);

	const onSubmit = async (data: any) => {
		setLoading(true);
		const {createdAt, updatedAt, ...input} = data;
		const theme = await API.graphql({
			query: updateTheme,
			variables: {
				input,
			}
		})
		setLoading(false);
		fetchThemes();
	}

	const handleThemeChange = (e: any) => {
		setSelectedTheme(e.target.value);
		const theme = themes.find((theme: any) => theme?.mode === e.target.value);
		if(theme) {
			reset({
				...(theme as Record<string, any>)
			});
		}
	}

	return (
		<div className="divide-y divide-white/5">
			<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
				<div>
					<h2 className="text-base font-semibold leading-7 text-white">Themes</h2>
					<p className="mt-1 text-sm leading-6 text-gray-400">
						Choose Light or Dark theme to proceed.
					</p>
				</div>

				<form className="md:col-span-2" onSubmit={handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
						<div className="col-span-full">
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
								Theme Name
							</label>
							<div className="mt-2">
								<Select options={themes || []} labelKey={"mode"} valueKey={"mode"} value={selectedTheme}
								        onChange={handleThemeChange}/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white">
								App Bar Color
							</label>
							<div className="mt-2">
								<Controller
									name="app_bar_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Bottom Bar Color
							</label>
							<div className="mt-2">
								<Controller
									name="bottom_bar_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Scaffold Background Color
							</label>
							<div className="mt-2">
								<Controller
									name="scaffold_bg_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Primary Color
							</label>
							<div className="mt-2">
								<Controller
									name="primary_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Black Color
							</label>
							<div className="mt-2">
								<Controller
									name="black_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								White Color
							</label>
							<div className="mt-2">
								<Controller
									name="white_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Grey Color
							</label>
							<div className="mt-2">
								<Controller
									name="grey_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Red Color
							</label>
							<div className="mt-2">
								<Controller
									name="red_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Green Color
							</label>
							<div className="mt-2">
								<Controller
									name="green_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
						<div className="col-span-3">
							<label className="block text-sm font-medium leading-6 text-white mt-3">
								Orange Color
							</label>
							<div className="mt-2">
								<Controller
									name="orange_color"
									control={control}
									render={({field: {onChange, value}}) => (
										<ColorPicker color={value} handleColorChange={onChange}/>
									)}
								/>
							</div>
						</div>
					</div>

					<div className="mt-16 flex">
						<button
							type="submit"
							className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Save
						</button>
					</div>
				</form>
			</div>
			{loading && <Loader />}
		</div>
	)
}

export default ThemeForm;
