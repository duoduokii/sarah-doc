const inquirer = require("inquirer");

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
		console.log(answers);
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});
