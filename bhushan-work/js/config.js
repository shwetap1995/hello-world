function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var key=document.getElementById("key_row"+no);
 var value=document.getElementById("value_row"+no);
	
 var name_data=name.innerHTML;
 var key_data=key.innerHTML;
 var value_data=value.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 key.innerHTML="<input type='text' id='key_text"+no+"' value='"+key_data+"'>";
 value.innerHTML="<input type='text' id='value_text"+no+"' value='"+value_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var key_val=document.getElementById("key_text"+no).value;
 var value_val=document.getElementById("value_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("key_row"+no).innerHTML=key_val;
 document.getElementById("value_row"+no).innerHTML=value_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
