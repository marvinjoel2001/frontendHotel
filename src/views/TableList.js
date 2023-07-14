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
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import DataTable from "../components/DataTable/DataTable";

function Pagos() {
  const titles = [
    {
      name: 'id',
      label: 'Id',
    },
    {
      name: 'fecha',
      label: 'Fecha del Pago',
    },
    {
      name: 'monto',
      label: 'Monto',
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

  const apiEndpoint = "http://127.0.0.1:8000/api/pagos/";
  return (
    <>
      <div className="content">
        <DataTable titles={titles} apiEndpoint={apiEndpoint} />
      </div>
    </>
  );
}

export default Pagos;
