import * as React from "react";
import {
    Filter,
    List,
    Datagrid,
    TextField,
    TextInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

const UsersFilter = (props: any) => (
    <Filter {...props} >
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Search Users" source="id" reference="users" allowEmpty>
            <SelectInput optionText="username" />
        </ReferenceInput>
    </Filter>
);

export const UsersList = (props: any) => (
    <List {...props} title = "Users" filters = {<UsersFilter />}>
        <Datagrid rowClick="show" >
            <TextField source="username" label="Username"/>
            <TextField source="email" label="User Email"/>
        </Datagrid>
    </List>
);
