// This is the snippet js code to automatically add the options to a selectbox custom fields
// So, we don't need to copy&paste then click the "Add" button so many time
// Simply put the codes at Browser console at the JIRA settigs page you are going to add the options to selectbox custom field
// NB: It implemeted based on JIRA Cloud

var arr=[], //Your array options are here
    input = jQuery("#custom-field-options-input"), 
    btn = jQuery("#custom-field-options-add");
    
arr.forEach((o)=>{
   input.val(o);
   btn.click();
});
