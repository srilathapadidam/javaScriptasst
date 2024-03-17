const form = document.querySelector("# book-store-record");
const input=  document.querySelector("#book-store-record ");
const records = document.querySelector(".records");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
        const userData = input.Value;
    if(!userData){
        alret ("please mention the book type before submitting!");
        return;
    }

    const record = document.createElement('div');
        record.classList.add("record");
        record.classList.add("mb-3");
    const record = document.createElement('div');
        content.classList.add("content");

    const record_input = document.createElement('input');
        record_input.classList.add("text");
        record_input.classList.add("form_control");
        record_input.classList.add("mb-2");
        record_input.Value = userData;
        record_input.setAttribute("readonly","readonly");
        record_input.type = "text";

    content.appendChild(record_input);
        record.appendChild(content);
        records.appendChild(record);

        const record = document.createElement('div');
        content.classList.add("actions");

    const record_edit = document.createElement('button');
        record_edit.classList.add("edit");
        record_edit.classList.add("btn");
        record_edit.classList.add("btn-warning");
        record_edit.innerHTML="Edit";

    const record_edit = document.createElement('button');
        record_delete.classList.add("delete");
        record_delete.classList.add("btn");
        record_delete.classList.add("btn-danger");
        record_delete.classList.add("mx-2");
        record_delete.innerHTML="delete";
        
        actions.appendChild(record_edit);
        actions.appendChild(record_delete);
        record.appendChild(actions);

        input.Value=""

    record_edit.addEventListener('click',()=>{
    if(record_edit.innerHTML=="edit"){
        record_input.removeAttribute("readonly");
        record_edit.innerHTML="save";
        record_input.focus();
    }
    else{
        record_input.setAttribute("ReadOnly","ReadOnly");
        record_edit.innerHTML="Edit";
    }
    })
    // delete user data
    record_delete.addEventListener("click",()=>{
        records.removeChild(record)
    })
});