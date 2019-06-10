// console.log('taraji dawla')
const fs = require("fs");

var fetchNotes=()=>{
    try{
        return JSON.parse(fs.readFileSync("notes.txt"))
    }catch(err){
        return [];
    }
}
var addingNote =(title,body)=>{
var notes=fetchNotes();
    var note={
        title,
        body
    }
    notes.push(note);
    fs.writeFileSync("notes.txt",JSON.stringify(notes))
}

var removeNote=(title)=>{
var notes=fetchNotes();
var filtredNotes=notes.filter((note)=>note.title !== title);
fs.writeFileSync("notes.txt",JSON.stringify(filtredNotes))
}
var readNote=(title)=>{
    var notes=fetchNotes();
    var filtredNotes=notes.filter((note)=>note.title === title);
    console.log(`Title:${filtredNotes[0].title} Body :${filtredNotes[0].body} `)
    }
    var getAll=()=>{
        var notes=fetchNotes();
        console.log(notes)
    }
        



module.exports={
    addingNote,
    removeNote,
    readNote,
    getAll
}