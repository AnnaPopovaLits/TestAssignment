import client from '../../api';

export const fetchListRequest = () => client.get('/home_assignment/data.json');
