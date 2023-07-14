import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { Button } from "@mui/material";

const DataTable = ({ titles, apiEndpoint }) => {
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState({});
    const [editMode, setEditMode] = useState(false);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(apiEndpoint);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (rowsDeleted, newTableData) => {
        const shouldDelete = window.confirm("¿Estás seguro de que deseas eliminar el registro?");

        if (shouldDelete) {
            try {
                const deletedIndexes = rowsDeleted.data.map(row => row.dataIndex);
                const selectedRows = rowsDeleted.data.map(row => row.index);
                const idColumnIndex = titles.findIndex(title => title.name === 'id');

                for (const index of deletedIndexes) {
                    const id = data[index].id;
                    try {
                        await fetch(`${apiEndpoint}${id}/`, {
                            method: 'DELETE',
                        });
                    } catch (error) {

                        console.error('Error deleting data:', error);
                    }
                }

                const updatedData = data.filter((_, index) => !deletedIndexes.includes(index));
                setData(updatedData);
            } catch (error) {

                console.error('Error deleting data:', error);
            }
        }else {
            window.location.reload()
        }

    };


    const handleEdit = (rowData) => {
        const id = rowData.id;
        setEditData(rowData);
        setEditMode(true);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        const id = editData.id;
        const updatedData = { ...editData };

        try {
            await fetch(`${apiEndpoint}${id}/`, {
                method: 'PUT',
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Actualizar solo el registro editado en el estado del componente
            const updatedDataArray = data.map(row => (row.id === id ? updatedData : row));
            setData(updatedDataArray);

            // Restablecer el estado del formulario y salir del modo de edición
            setEditData({});
            setEditMode(false);

            console.log('Registro actualizado exitosamente');
        } catch (error) {
            console.error(error);
        }
    };
    const handleFormChange = (event, field) => {
        const { value } = event.target;

        setEditData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };
    const renderFormFields = () => {
        return titles.map(title => (
            <div className="mb-3" key={title.name}>
                <label htmlFor={title.name} className="form-label">{title.label}</label>
                <input
                    type="text"
                    className="form-control"
                    id={title.name}
                    value={editData[title.name] || ''}
                    onChange={(event) => handleFormChange(event, title.name)}
                />
            </div>
        ));
    };

    const columns = [...titles, {
        name: 'edit',
        label: 'Editar',
        options: {
            customBodyRender: (_, tableMeta) => {
                const rowData = data[tableMeta.rowIndex];
                return (
                    <Button variant="contained" color="primary" onClick={() => handleEdit(rowData)}>
                        Editar
                    </Button>
                );
            },
        },
    }];

    const options = {
        textLabels: {
            body: {
                noMatch: 'No se encontraron registros',
                toolTip: 'Ordenar',
                columnHeaderTooltip: column => `Ordenar por ${column.label}`,
            },
            pagination: {
                next: 'Siguiente Página',
                previous: 'Página Anterior',
                rowsPerPage: 'Filas por página:',
                displayRows: 'de',
            },
            toolbar: {
                search: 'Buscar',
                downloadCsv: 'Descargar CSV',
                print: 'Imprimir',
                viewColumns: 'Ver Columnas',
                filterTable: 'Filtrar Tabla',
            },
            filter: {
                all: 'Todo',
                title: 'FILTROS',
                reset: 'REINICIAR',
            },
            viewColumns: {
                title: 'Mostrar Columnas',
                titleAria: 'Mostrar/Ocultar Columnas de la Tabla',
            },
            selectedRows: {
                text: 'fila(s) seleccionada(s)',
                delete: 'Eliminar',
                deleteAria: 'Eliminar Filas Seleccionadas',
            },
        },
        onRowsDelete: (rowsDeleted, newTableData) => {

            handleDelete(rowsDeleted, newTableData);
        },
    };
    if (editMode) {
        return (
            <form onSubmit={handleUpdate}>
                <div className="container">
                    {renderFormFields()}
                    <Button type="submit" variant="contained" color="primary">
                        Actualizar
                    </Button>
                </div>
            </form>
        );
    }

    return (
        <MUIDataTable
            title="Tabla Datos"
            data={data}
            columns={columns}
            options={options}
        />
    );
};

export default DataTable;
