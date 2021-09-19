const Web3=require('web3');
let url='http://localhost:7545"';
const web3=new Web3(url);
web3.eth.defaultAccount = Web3.eth.accounts[0];

var starNotary = new web3.eth.Contract(
    [
        {
            "constant": true,
            "inputs": [],
            "name": "startOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "claimStar",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "startName",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ]
,'0x58CD6e18Ff5A0729Da37b7e9d806734541d51d02'
);


web3.eth.defaultAccount = web3.eth.accounts[0];

function getStarName(){

}

function claimButtonClicked() { 
    starNotary.methods.claimStar().call().then( result=> {
            location.reload();
    }).catch(err=>{
        console.log(err);
    });
}