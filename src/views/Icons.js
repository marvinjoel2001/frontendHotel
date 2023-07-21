/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";

// reactstrap components
import {Card, CardHeader, CardBody, Row, Col, Button} from "reactstrap";
import DataTable from "../components/DataTable/DataTable";
import Formulario from "../components/form";

function Clients() {
  const titles = [
    {
      name: 'id',
      label: 'Id',
    },
    {
      name: 'nombre',
      label: 'Nombre',
    },
    {
      name: 'telefono',
      label: 'Telefono',
    },
    {
      name: 'email',
      label: 'Correo Electronico',
    },
    {
      name: 'ci',
      label: 'CI',
    },
  ];

  const apiEndpoint = "http://127.0.0.1:8000/api/clientes/";
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

  const handleCreateClick = () => {
    setShowForm(true);
  };

  return (
      <>
        <div className="content">
          {showForm ? (
              <Formulario fields={titles} endpoint={apiEndpoint} />
          ) : (
              <Button onClick={handleCreateClick}>Crear registro</Button>
          )}
          {/* Ocultar la tabla cuando showForm sea verdadero */}
          {!showForm && <DataTable titles={titles} apiEndpoint={apiEndpoint} />}
        </div>
      </>
  );
}


export default Clients;
