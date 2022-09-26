import ForgeUI, {  render, Fragment, Text, TextField, IssuePanel, useProductContext, useState, ButtonSet, Button, ModalDialog, Table, Row, cell, Head, Form, GlobalPage } from '@forge/ui';
import api, { route } from '@forge/api'
const App = () => {
  const [isOpen, setOpen] = useState(false);

  const onSubmit = async (formData) => {
  
    console.log("Data from the Form:" + formData);
    console.log("Data from the Form:" + JSON.stringify(formData));
console.log("searcherkey: " + JSON.stringify(formData.fieldkey));
console.log("name: " + JSON.stringify(formData.fieldname));
console.log("description: " + JSON.stringify(formData.fielddescription));
console.log("type: " + JSON.stringify(formData.fieldtype));

   

    var bodyData = `{
      "searcherKey": ${(formData.fieldkey)},
      "name": ${(formData.fieldname)},
      "description": ${(formData.fielddescription)},
      "type": ${(formData.fieldtype)}
    }`;

    
    const response = await api.asApp().requestJira(route`/rest/api/3/field`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: bodyData
    });

    
    //console.log(await response.text());
  };
  return (
    <Fragment>
      <Button text="Create Custom field" onClick={() => setOpen(true)} />
      {isOpen && (
        <ModalDialog header="New custom field" onClose={() => setOpen(false)}>
          
          <Form onSubmit={onSubmit} submitButtonText="Add">
         
         
            <TextField label="Key" name="fieldkey" />
            <TextField label="Type" name="fieldtype" />
            <TextField label="Name" name="fieldname" />
            <TextField label="description" name="fielddescription" />
            
          </Form>
        </ModalDialog>
      )}
    </Fragment>
  );
};

export const run = render(
  <GlobalPage>
    <App/>
  </GlobalPage>
);
