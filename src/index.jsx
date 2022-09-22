import ForgeUI, {  render, Fragment, Text, TextField, IssuePanel, useProductContext, useState, ButtonSet, Button, ModalDialog, Table, Row, cell, Head, Form, GlobalPage } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Button text="Create Custom field" onClick={() => setOpen(true)} />
      {isOpen && (
        <ModalDialog header="New custom field" onClose={() => setOpen(false)}>
          
          <Form onSubmit={onSubmit} submitButtonText="Add">
         
         
            <TextField label="Key" name="fieldkey" />
            <TextField label="Type" name="fieldtype" />
            <TextField label="Name" name="fieldname" />
            
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