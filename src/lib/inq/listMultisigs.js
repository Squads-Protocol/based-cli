import inquirer from "inquirer";

export default (multisigs) => {
    if(!multisigs || multisigs.length < 1){
        console.log("No multisigs found for this wallet");
    }
    const questions = [
        {
        type: 'list',
        name: 'action',
        message: 'Choose a multisig to manage',
        choices: multisigs,
        }
    ];
return inquirer.prompt(questions);
};