
const {Client} = require('@notionhq/client')

const notion = new Client({auth: process.env.NOTION_API_KEY})

console.log("IN THE NOTION.JS file", process.env.NOTION_API_KEY)
async function getDatabase(){
    //console.log(process.env.NOTION_DATABASE_ID)
    const  response =  await notion.databases.retrieve({ database_id:
         process.env.NOTION_DATABASE_ID
    })
    console.log(response)
    return response;
}

function createSuggestion(suggestion){
    
}

getDatabase()



exports.notionControllers = (req, res) =>{
    res.json({
     usersList: ["user 1", "user 2"]
    })
}
//this is where the api responses are posted!