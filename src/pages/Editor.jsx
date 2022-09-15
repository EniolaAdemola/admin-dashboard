import React from "react";
import {
	HtmlEditor,
	Image,
	Inject,
	Link,
	QuickToolbar,
	RichTextEditorComponent,
	Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Button, Header } from "../components";

const Editor = () => {
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="App" title="Editor" />
			<RichTextEditorComponent>
				<Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
			</RichTextEditorComponent>
			<div className="mt-6">
				<Button
					color="white"
					bgColor="blue"
					text="Compose"
					borderRadius="10px"
					size="md"
				/>
			</div>
		</div>
	);
};

export default Editor;
