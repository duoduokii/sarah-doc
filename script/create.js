const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

/**
 * 创建文档
 */
const createDoc = ({ type, courseName, name }) => {
	const typePath = path.join(__dirname, `../src/pages/${type}/`);
	const dirs = fs.readdirSync(typePath, "utf-8");
	if (dirs.includes(courseName)) {
		// console.log("专栏已存在！！！");
		fs.writeFileSync(typePath + `${courseName}/${name}.md`, createContent());
	}
};

/**
 * 生成文档内容
 */
const createContent = () => {
	return `---
	title: Start
	date: 2022.06.19
---

## welcome to maxkii

	`;
};

inquirer
	.prompt([
		{
			type: "list",
			name: "type",
			message: "请选择需要创建的文档类型",
			choices: ["dev", "course", "daily"],
		},
		{
			type: "input",
			name: "courseName",
			message: "请选择需要创建的专栏名称",
		},
		{
			type: "input",
			name: "name",
			message: "请选择需要创建的文档名称",
		},
	])
	.then((answers) => {
		createDoc(answers);
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});
