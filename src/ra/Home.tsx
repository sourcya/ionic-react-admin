import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export const Home = () => (
    <Card>
        <Title title="Ionic React Admin Strapi Starter" />
        <CardContent>Release 0.1.0</CardContent>
    </Card>
);
