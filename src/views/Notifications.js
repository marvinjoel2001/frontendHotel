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
import React, { useState } from "react";
import NotificationAlert from "react-notification-alert";
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import DataTable from "../components/DataTable/DataTable";
import Formulario from "../components/form"; // Asegúrate de importar el componente de formulario desde la ubicación correcta

function Reservas() {
  const titles = [
    {
      name: 'id',
      label: 'Id',
    },
    {
      name: 'cliente',
      label: 'Cliente',
    },
    {
      name: 'habitacion',
      label: 'Habitacion',
    },
    {
      name: 'fecha_entrada',
      label: 'Entrada',
    },
    {
      name: 'fecha_salida',
      label: 'Salida',
    },
  ];

  const apiEndpoint = "http://127.0.0.1:8000/api/reservas/";

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

export default Reservas;
