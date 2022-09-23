import ForgeUI, {  render, Fragment, Text, TextField, IssuePanel, useProductContext, useState, ButtonSet, Button, ModalDialog, Table, Row, cell, Head, Form, GlobalPage } from '@forge/ui';
import api, { route } from '@forge/api'
const App = () => {
  const [isOpen, setOpen] = useState(false);

  const onSubmit = async (formData) => {
  
    console.log("Data from the Form:" + formData);
    console.log("Data from the Form:" + JSON.stringify(formData));

    var bodyData = `{
      "searcherKey": "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher",
      "name": "New custom field",
      "description": "Custom field for picking groups",
      "type": "com.atlassian.jira.plugin.system.customfieldtypes:grouppicker"
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
