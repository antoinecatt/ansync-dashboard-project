import React from 'react';
import {Form, FormGroup, Input } from 'reactstrap';

const SearchBox = ({ searchChange }) => {
  return (
    <Form className="Form">
    <FormGroup>
      <Input type="search" name="search" placeholder="Search device" onChange={searchChange}/>
    </FormGroup>
    </Form>
  );
};

export default SearchBox;
