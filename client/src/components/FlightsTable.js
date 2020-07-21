import React from 'react';
import MaterialTable from 'material-table';

export default function FlightsTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Départ', field: 'departure' },
      { title: 'Arrivée', field: 'arrival' },
      { title: 'Date', field: 'date', type: 'date'},
      { title: 'Heure', field: 'time', type: 'time' },
      { title: 'Prix (€)', field: 'price', type: 'numeric' },
    ],
    data: [
      {
        departure: 'Paris',
        arrival: 'Londres',
        date: '21/12/2021',
        time: '12:00',
        price: 340,
      },
      {
        departure: 'Lyon',
        arrival: 'Nantes',
        date: '21/09/2020',
        time: '08:45',
        price: 257,
      },
      {
        departure: 'Nice',
        arrival: 'Lyon',
        date: '08/09/2020',
        time: '16:30',
        price: 78,
      },
      {
        departure: 'Lyon',
        arrival: 'Nice',
        date: '03/08/2020',
        time: '12:30',
        price: 78,
      },
      {
        departure: 'Dunkerk',
        arrival: 'Guingamp',
        date: '28/02/2051',
        time: '00:00',
        price: 4,
      },
      {
        departure: 'Paris',
        arrival: 'Londres',
        date: '21/12/2021',
        time: '12:00',
        price: 340,
      },
      {
        departure: 'Lyon',
        arrival: 'Nantes',
        date: '21/09/2020',
        time: '08:45',
        price: 257,
      },
      {
        departure: 'Nice',
        arrival: 'Lyon',
        date: '08/09/2020',
        time: '16:30',
        price: 78,
      },
      {
        departure: 'Lyon',
        arrival: 'Nice',
        date: '03/08/2020',
        time: '12:30',
        price: 78,
      },
      {
        departure: 'Dunkerk',
        arrival: 'Guingamp',
        date: '28/02/2051',
        time: '00:00',
        price: 4,
      },
    ],
  });

  return (
    <MaterialTable
        title="Vols disponibles"
        columns={state.columns}                                                     // ATTRIBUTS       
        data={state.data}                                                           // INFOS           
        editable={{
            onRowAdd: (newData) =>
            new Promise((resolve) => {
                setTimeout(() => {
                resolve();
                setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                });
                }, 600);
            }),
            onRowUpdate: (newData, oldData) =>                                  // newData => stock les infos tapées
            new Promise((resolve) => {
                setTimeout(() => {
                resolve();
                if (oldData) {
                    setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                    });
                }
                }, 600);
            }),
            onRowDelete: (oldData) =>
            new Promise((resolve) => {
                setTimeout(() => {
                resolve();
                setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                });
                }, 600);
            }),
        }}
    />
  );
}