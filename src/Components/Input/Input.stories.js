import React from "react";
import Input from "./Input";


export default {
	title: 'Input',
	component: Input,
}
export const Normal = () => <Input state='normal' placeholder='Text' />
export const Disabled = () => <Input state='medium' placeholder='Disabled' disabled/>
